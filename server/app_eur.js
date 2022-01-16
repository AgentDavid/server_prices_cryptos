const fetch = require('cross-fetch');
const algosdk = require('algosdk');
const { encodeUint64 } = require('algosdk');
const dotenv = require('dotenv');
dotenv.config();

const { addr, sk } = algosdk.mnemonicToSecretKey(process.env.WALLET_CREATOR);

const app_id = parseInt(process.env.APP_ID_EUR);
const million = 1000000;
const server = process.env.ALGOEXPLORER_API;
const algoClient = new algosdk.Algodv2('', server, '');
const coingeckoApi =
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ethereum-classic,iota,binancecoin,solana,cardano,ripple,terra-luna,polkadot,avalanche-2,dogecoin,shiba-inu,matic-network,crypto-com-chain,wrapped-bitcoin,uniswap,litecoin,chainlink,algorand,bitcoin-cash,near,tron,stellar,decentraland,axie-infinity,cosmos,vechain,ftx-token,fantom,the-sandbox,filecoin,hedera-hashgraph,bitcoin-bep2,theta-token,elrond-erd-2,internet-computer,ethereum-claiota,tezos,helium,monero,aave,leo-token,klay-token,gala,the-graph,eos,pancakeswap-token,blockstack,flow,loopring,harmony,bittorrent-2,kusama,maker,enjincoin,bitcoin-cash-sv,quant-network,amp-token,kadena,ecash&vs_currencies=eur';

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
        encodeUint64(Math.trunc(data['bitcoin'].eur * million)),
        encodeUint64(Math.trunc(data['ethereum'].eur * million)),
        encodeUint64(Math.trunc(data['binancecoin'].eur * million)),
        encodeUint64(Math.trunc(data['solana'].eur * million)),
        encodeUint64(Math.trunc(data['cardano'].eur * million)),
        encodeUint64(Math.trunc(data['ripple'].eur * million)),
        encodeUint64(Math.trunc(data['terra-luna'].eur * million)),
        encodeUint64(Math.trunc(data['polkadot'].eur * million)),
        encodeUint64(Math.trunc(data['avalanche-2'].eur * million)),
        encodeUint64(Math.trunc(data['dogecoin'].eur * million)),
        encodeUint64(Math.trunc(data['shiba-inu'].eur * million)),
        encodeUint64(Math.trunc(data['matic-network'].eur * million)),
        encodeUint64(Math.trunc(data['crypto-com-chain'].eur * million)),
        encodeUint64(Math.trunc(data['wrapped-bitcoin'].eur * million)),
        encodeUint64(Math.trunc(data['uniswap'].eur * million)),
    ]);
    const tx2 = algosdk.makeApplicationNoOpTxn(addr, params, app_id, [
        new Uint8Array(Buffer.from('update_slot_2')),
        encodeUint64(Math.trunc(data['litecoin'].eur * million)),
        encodeUint64(Math.trunc(data['chainlink'].eur * million)),
        encodeUint64(Math.trunc(data['algorand'].eur * million)),
        encodeUint64(Math.trunc(data['bitcoin-cash'].eur * million)),
        encodeUint64(Math.trunc(data['near'].eur * million)),
        encodeUint64(Math.trunc(data['tron'].eur * million)),
        encodeUint64(Math.trunc(data['stellar'].eur * million)),
        encodeUint64(Math.trunc(data['decentraland'].eur * million)),
        encodeUint64(Math.trunc(data['axie-infinity'].eur * million)),
        encodeUint64(Math.trunc(data['cosmos'].eur * million)),
        encodeUint64(Math.trunc(data['vechain'].eur * million)),
        encodeUint64(Math.trunc(data['ftx-token'].eur * million)),
        encodeUint64(Math.trunc(data['fantom'].eur * million)),
        encodeUint64(Math.trunc(data['the-sandbox'].eur * million)),
        encodeUint64(Math.trunc(data['filecoin'].eur * million)),
    ]);
    const tx3 = algosdk.makeApplicationNoOpTxn(addr, params, app_id, [
        new Uint8Array(Buffer.from('update_slot_3')),

        encodeUint64(Math.trunc(data['hedera-hashgraph'].eur * million)),
        encodeUint64(Math.trunc(data['bitcoin-bep2'].eur * million)),
        encodeUint64(Math.trunc(data['theta-token'].eur * million)),
        encodeUint64(Math.trunc(data['elrond-erd-2'].eur * million)),
        encodeUint64(Math.trunc(data['internet-computer'].eur * million)),
        encodeUint64(Math.trunc(data['ethereum-classic'].eur * million)),
        encodeUint64(Math.trunc(data['iota'].eur * million)),
        encodeUint64(Math.trunc(data['tezos'].eur * million)),
        encodeUint64(Math.trunc(data['helium'].eur * million)),
        encodeUint64(Math.trunc(data['monero'].eur * million)),
        encodeUint64(Math.trunc(data['aave'].eur * million)),
        encodeUint64(Math.trunc(data['leo-token'].eur * million)),
        encodeUint64(Math.trunc(data['klay-token'].eur * million)),
        encodeUint64(Math.trunc(data['gala'].eur * million)),
        encodeUint64(Math.trunc(data['the-graph'].eur * million)),
    ]);
    const tx4 = algosdk.makeApplicationNoOpTxn(addr, params, app_id, [
        new Uint8Array(Buffer.from('update_slot_4')),
        encodeUint64(Math.trunc(data['eos'].eur * million)),
        encodeUint64(Math.trunc(data['pancakeswap-token'].eur * million)),
        encodeUint64(Math.trunc(data['blockstack'].eur * million)),
        encodeUint64(Math.trunc(data['flow'].eur * million)),
        encodeUint64(Math.trunc(data['loopring'].eur * million)),
        encodeUint64(Math.trunc(data['harmony'].eur * million)),
        encodeUint64(Math.trunc(data['bittorrent-2'].eur * million)),
        encodeUint64(Math.trunc(data['kusama'].eur * million)),
        encodeUint64(Math.trunc(data['maker'].eur * million)),
        encodeUint64(Math.trunc(data['enjincoin'].eur * million)),
        encodeUint64(Math.trunc(data['bitcoin-cash-sv'].eur * million)),
        encodeUint64(Math.trunc(data['quant-network'].eur * million)),
        encodeUint64(Math.trunc(data['amp-token'].eur * million)),
        encodeUint64(Math.trunc(data['kadena'].eur * million)),
        encodeUint64(Math.trunc(data['ecash'].eur * million)),
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
