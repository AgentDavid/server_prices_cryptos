const fetch = require('cross-fetch');
const algosdk = require('algosdk');
const { encodeUint64 } = require('algosdk');
const dotenv = require('dotenv');
dotenv.config();

const { addr, sk } = algosdk.mnemonicToSecretKey(process.env.WALLET_CREATOR);

const app_id = parseInt(process.env.APP_ID_GBP);
const million = 1000000;
const server = process.env.ALGOEXPLORER_API;
const algoClient = new algosdk.Algodv2('', server, '');
const coingeckoApi =
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ethereum-classic,iota,binancecoin,solana,cardano,ripple,terra-luna,polkadot,avalanche-2,dogecoin,shiba-inu,matic-network,crypto-com-chain,wrapped-bitcoin,uniswap,litecoin,chainlink,algorand,bitcoin-cash,near,tron,stellar,decentraland,axie-infinity,cosmos,vechain,ftx-token,fantom,the-sandbox,filecoin,hedera-hashgraph,bitcoin-bep2,theta-token,elrond-erd-2,internet-computer,ethereum-claiota,tezos,helium,monero,aave,leo-token,klay-token,gala,the-graph,eos,pancakeswap-token,blockstack,flow,loopring,harmony,bittorrent-2,kusama,maker,enjincoin,bitcoin-cash-sv,quant-network,amp-token,kadena,ecash&vs_currencies=gbp';

const waitForConfirmation = async (algodClient, txId, timeout) => {
    if (algodClient == null || txId == null || timeout < 0) {
        throw new Error('Bad arguments');
    }

    const status = await algodClient.status().do();
    if (status === undefined) {
        console.log('Unable to get node status');
    }

    const startround = status['last-round'] + 1;
    let currentround = startround;

    while (currentround < startround + timeout) {
        const pendingInfo = await algodClient.pendingTransactionInformation(txId).do();
        if (pendingInfo !== undefined) {
            if (pendingInfo['confirmed-round'] !== null && pendingInfo['confirmed-round'] > 0) {
                //Got the completed Transaction
                return pendingInfo['confirmed-round'];
            } else {
                if (pendingInfo['pool-error'] != null && pendingInfo['pool-error'].length > 0) {
                    // If there was a pool error, then the transaction has been rejected!
                    console.log('Transaction ' + txId + ' rejected - pool error: ' + pendingInfo['pool-error']);
                }
            }
        }
        await algodClient.statusAfterBlock(currentround).do();
        currentround++;
    }

    console.log('Transaction ' + txId + ' not confirmed after ' + timeout + ' rounds!');
};

const getData = async (data) => {
    const params = await algoClient.getTransactionParams().do();
    const tx1 = algosdk.makeApplicationNoOpTxn(addr, params, app_id, [
        new Uint8Array(Buffer.from('update_slot_1')),
        encodeUint64(Math.trunc(data['bitcoin'].gbp * million)),
        encodeUint64(Math.trunc(data['ethereum'].gbp * million)),
        encodeUint64(Math.trunc(data['binancecoin'].gbp * million)),
        encodeUint64(Math.trunc(data['solana'].gbp * million)),
        encodeUint64(Math.trunc(data['cardano'].gbp * million)),
        encodeUint64(Math.trunc(data['ripple'].gbp * million)),
        encodeUint64(Math.trunc(data['terra-luna'].gbp * million)),
        encodeUint64(Math.trunc(data['polkadot'].gbp * million)),
        encodeUint64(Math.trunc(data['avalanche-2'].gbp * million)),
        encodeUint64(Math.trunc(data['dogecoin'].gbp * million)),
        encodeUint64(Math.trunc(data['shiba-inu'].gbp * million)),
        encodeUint64(Math.trunc(data['matic-network'].gbp * million)),
        encodeUint64(Math.trunc(data['crypto-com-chain'].gbp * million)),
        encodeUint64(Math.trunc(data['wrapped-bitcoin'].gbp * million)),
        encodeUint64(Math.trunc(data['uniswap'].gbp * million)),
    ]);
    const tx2 = algosdk.makeApplicationNoOpTxn(addr, params, app_id, [
        new Uint8Array(Buffer.from('update_slot_2')),
        encodeUint64(Math.trunc(data['litecoin'].gbp * million)),
        encodeUint64(Math.trunc(data['chainlink'].gbp * million)),
        encodeUint64(Math.trunc(data['algorand'].gbp * million)),
        encodeUint64(Math.trunc(data['bitcoin-cash'].gbp * million)),
        encodeUint64(Math.trunc(data['near'].gbp * million)),
        encodeUint64(Math.trunc(data['tron'].gbp * million)),
        encodeUint64(Math.trunc(data['stellar'].gbp * million)),
        encodeUint64(Math.trunc(data['decentraland'].gbp * million)),
        encodeUint64(Math.trunc(data['axie-infinity'].gbp * million)),
        encodeUint64(Math.trunc(data['cosmos'].gbp * million)),
        encodeUint64(Math.trunc(data['vechain'].gbp * million)),
        encodeUint64(Math.trunc(data['ftx-token'].gbp * million)),
        encodeUint64(Math.trunc(data['fantom'].gbp * million)),
        encodeUint64(Math.trunc(data['the-sandbox'].gbp * million)),
        encodeUint64(Math.trunc(data['filecoin'].gbp * million)),
    ]);
    const tx3 = algosdk.makeApplicationNoOpTxn(addr, params, app_id, [
        new Uint8Array(Buffer.from('update_slot_3')),

        encodeUint64(Math.trunc(data['hedera-hashgraph'].gbp * million)),
        encodeUint64(Math.trunc(data['bitcoin-bep2'].gbp * million)),
        encodeUint64(Math.trunc(data['theta-token'].gbp * million)),
        encodeUint64(Math.trunc(data['elrond-erd-2'].gbp * million)),
        encodeUint64(Math.trunc(data['internet-computer'].gbp * million)),
        encodeUint64(Math.trunc(data['ethereum-classic'].gbp * million)),
        encodeUint64(Math.trunc(data['iota'].gbp * million)),
        encodeUint64(Math.trunc(data['tezos'].gbp * million)),
        encodeUint64(Math.trunc(data['helium'].gbp * million)),
        encodeUint64(Math.trunc(data['monero'].gbp * million)),
        encodeUint64(Math.trunc(data['aave'].gbp * million)),
        encodeUint64(Math.trunc(data['leo-token'].gbp * million)),
        encodeUint64(Math.trunc(data['klay-token'].gbp * million)),
        encodeUint64(Math.trunc(data['gala'].gbp * million)),
        encodeUint64(Math.trunc(data['the-graph'].gbp * million)),
    ]);
    const tx4 = algosdk.makeApplicationNoOpTxn(addr, params, app_id, [
        new Uint8Array(Buffer.from('update_slot_4')),
        encodeUint64(Math.trunc(data['eos'].gbp * million)),
        encodeUint64(Math.trunc(data['pancakeswap-token'].gbp * million)),
        encodeUint64(Math.trunc(data['blockstack'].gbp * million)),
        encodeUint64(Math.trunc(data['flow'].gbp * million)),
        encodeUint64(Math.trunc(data['loopring'].gbp * million)),
        encodeUint64(Math.trunc(data['harmony'].gbp * million)),
        encodeUint64(Math.trunc(data['bittorrent-2'].gbp * million)),
        encodeUint64(Math.trunc(data['kusama'].gbp * million)),
        encodeUint64(Math.trunc(data['maker'].gbp * million)),
        encodeUint64(Math.trunc(data['enjincoin'].gbp * million)),
        encodeUint64(Math.trunc(data['bitcoin-cash-sv'].gbp * million)),
        encodeUint64(Math.trunc(data['quant-network'].gbp * million)),
        encodeUint64(Math.trunc(data['amp-token'].gbp * million)),
        encodeUint64(Math.trunc(data['kadena'].gbp * million)),
        encodeUint64(Math.trunc(data['ecash'].gbp * million)),
    ]);
    const txGroup = algosdk.assignGroupID([tx1, tx2, tx3, tx4]);
    const txn = await algoClient
        .sendRawTransaction([
            txGroup[0].signTxn(sk),
            txGroup[1].signTxn(sk),
            txGroup[2].signTxn(sk),
            txGroup[3].signTxn(sk),
        ])
        .do();
    console.log('tx send: ' + txn.txId);
    const txResolve = await waitForConfirmation(algoClient, txn.txId, 5);
    console.log('tx confirmed in round: ' + txResolve);
    main();
    return;
};

const main = async () => {
    // Get data from coingecko's API
    fetch(coingeckoApi)
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                getData(data);
            } else {
                throw new Error('Undefined received from coingeko');
            }
        })
        .catch((e) => console.log(e));
};

main();
