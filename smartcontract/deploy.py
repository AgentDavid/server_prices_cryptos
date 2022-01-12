
# Basic Importations
from crypto_price import approval_program, clear_state_program
import base64
import os

from algosdk import mnemonic
from algosdk.future import transaction
from algosdk.v2client import algod
from dotenv import load_dotenv
from pyteal import *

load_dotenv()

# Purestake connection

algod_address = os.getenv('PURESTAKE_API')

# Add Token

algod_token = os.getenv('PURESTAKE_TOKEN')
headers = {
    "X-API-KEY": algod_token
}
algod_client = algod.AlgodClient(algod_token, algod_address, headers)

# Setup the wallet

passphrase = os.getenv('WALLET_CREATOR')  # Put your passphrase here

private_key = mnemonic.to_private_key(passphrase)
sender = mnemonic.to_public_key(passphrase)
print("Sender address: {}".format(sender))

account_info = algod_client.account_info(sender)
print("Account balance: {} microAlgos".format(account_info.get('amount')))

# Setup Smart contract data scheme

local_ints = 1
local_bytes = 1
global_ints = 0
global_bytes = 1

global_schema = transaction.StateSchema(global_ints, global_bytes)
local_schema = transaction.StateSchema(local_ints, local_bytes)

# Basic Txn config

params = algod_client.suggested_params()
on_complete = transaction.OnComplete.NoOpOC.real

# Helper function to compile program source


def compile_program(source_code):
    compile_response = algod_client.compile(source_code.decode('utf-8'))
    return base64.b64decode(compile_response['result'])


def import_teal_source_code_as_binary(file_name):
    with open(file_name, 'r') as f:
        data = f.read()
        return str.encode(data)


# Helper function that waits for a given txid to be confirmed by the network

def wait_for_confirmation(client, txid):
    last_round = client.status().get('last-round')
    txinfo = client.pending_transaction_info(txid)
    while not (txinfo.get('confirmed-round') and txinfo.get('confirmed-round') > 0):
        print("Waiting for confirmation...")
        last_round += 1
        client.status_after_block(last_round)
        txinfo = client.pending_transaction_info(txid)
    print("Transaction {} confirmed in round {}.".format(
        txid, txinfo.get('confirmed-round')))
    return txinfo

# Compile pyteal code


approval_program_source_code = compileTeal(
    approval_program(), Mode.Application, version=3)
clear_state_program_source_code = compileTeal(
    clear_state_program(), Mode.Application, version=3)

did_approval_program = compile_program(
    import_teal_source_code_as_binary('did_approval.teal'))
did_clear_state_program = compile_program(
    import_teal_source_code_as_binary('did_clear_state.teal'))

# Create Txn to create the Dapp

txn = transaction.ApplicationCreateTxn(sender, params, on_complete, did_approval_program, did_clear_state_program,
                                       global_schema, local_schema)

# Sign transaction

signed_txn = txn.sign(private_key)
tx_id = signed_txn.transaction.get_txid()

print(tx_id)

# Send txn

algod_client.send_transactions([signed_txn])

# Await confirmation

wait_for_confirmation(algod_client, tx_id)

# Display results

transaction_response = algod_client.pending_transaction_info(tx_id)
app_id = transaction_response['application-index']
print("Created new app-id: ", app_id)
