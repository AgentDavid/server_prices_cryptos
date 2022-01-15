const fetch = require('cross-fetch');
const algosdk = require('algosdk');
const fs = require('fs');

const dataParse = JSON.parse(fs.readFileSync('wallet_creator.json').toString());

const { addr, sk } = algosdk.mnemonicToSecretKey(dataParse.mnemonic);

const server = 'https://testnet.algoexplorerapi.io';
const algoClient = new algosdk.Algodv2('', server, '');
const coingeckoApi =
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ethereum-classic,iota,binancecoin,solana,cardano,ripple,terra-luna,polkadot,avalanche-2,dogecoin,shiba-inu,matic-network,crypto-com-chain,wrapped-bitcoin,uniswap,litecoin,chainlink,algorand,bitcoin-cash,near,tron,stellar,decentraland,axie-infinity,cosmos,vechain,ftx-token,fantom,the-sandbox,filecoin,hedera-hashgraph,bitcoin-bep2,theta-token,elrond-erd-2,internet-computer,ethereum-claiota,tezos,helium,monero,aave,leo-token,klay-token,gala,the-graph,eos,pancakeswap-token,blockstack,flow,loopring,harmony,bittorrent-2,kusama,maker,enjincoin,bitcoin-cash-sv,quant-network,amp-token,kadena,ecash&vs_currencies=usd';

const update_slot_4 = [
    'eos', //eos
    'pancakeswap-token', //cake
    'blockstack', //stx
    'flow', //flow
    'loopring', //lrc
    'harmony', //one
    'bittorrent-2', //btt
    'kusama', //ksm
    'maker', //kmr
    'enjincoin', //enj
    'bitcoin-cash-sv', //bsv
    'quant-network', //qnt
    'amp-token', //amp
    'kadena', //kda
    'ecash', //xec
];

const main = async () => {
    // setInterval(() => {
    const getData = async (data) => {
        const params = await algoClient.getTransactionParams().do();
        const tx1 = algosdk.makeApplicationNoOpTxn(addr, params, 59400639, [
            new Uint8Array(Buffer.from('update_slot_1')),
            new Uint8Array([Math.trunc(data['bitcoin'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['ethereum'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['binancecoin'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['solana'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['cardano'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['ripple'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['terra-luna'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['polkadot'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['avalanche-2'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['dogecoin'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['shiba-inu'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['matic-network'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['crypto-com-chain'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['wrapped-bitcoin'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['uniswap'].usd * 1000000)]),
        ]);
        const tx2 = algosdk.makeApplicationNoOpTxn(addr, params, 59400639, [
            new Uint8Array(Buffer.from('update_slot_2')),
            new Uint8Array([Math.trunc(data['litecoin'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['chainlink'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['algorand'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['bitcoin-cash'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['near'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['tron'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['stellar'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['decentraland'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['axie-infinity'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['cosmos'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['vechain'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['ftx-token'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['fantom'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['the-sandbox'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['filecoin'].usd * 1000000)]),
        ]);
        const tx3 = algosdk.makeApplicationNoOpTxn(addr, params, 59400639, [
            new Uint8Array(Buffer.from('update_slot_3')),

            new Uint8Array([Math.trunc(data['hedera-hashgraph'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['bitcoin-bep2'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['theta-token'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['elrond-erd-2'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['internet-computer'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['ethereum-classic'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['iota'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['tezos'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['helium'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['monero'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['aave'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['leo-token'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['klay-token'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['gala'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['the-graph'].usd * 1000000)]),
        ]);
        const tx4 = algosdk.makeApplicationNoOpTxn(addr, params, 59400639, [
            new Uint8Array(Buffer.from('update_slot_4')),
            new Uint8Array([Math.trunc(data['eos'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['pancakeswap-token'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['blockstack'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['flow'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['loopring'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['harmony'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['bittorrent-2'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['kusama'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['maker'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['enjincoin'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['bitcoin-cash-sv'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['quant-network'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['amp-token'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['kadena'].usd * 1000000)]),
            new Uint8Array([Math.trunc(data['ecash'].usd * 1000000)]),
        ]);
        const tx = algoClient.sendRawTransaction([tx1.signTxn(sk), tx2.signTxn(sk), tx3.signTxn(sk), tx4.signTxn(sk)]);
        console.log('tx send: ' + tx.id);
    };
    // Get data from coingecko's API
    fetch(coingeckoApi)
        .then((response) => response.json())
        .then((data) => {
            getData(data);
        })
        .catch((e) => console.log(e));
    // }, 4000);
};

main();
