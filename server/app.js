const fetch = require('cross-fetch');
const algosdk = require('algosdk');
const dataParse = JSON.parse(fs.readFileSync('wallet_creator.json').toString());

const wallet_creator = algosdk.mnemonicToSecretKey(dataParse.mnemonic);

const server = 'https://testnet.algoexplorerapi.io';
const algoClient = new algosdk.Algodv2('', server, '');
const coingeckoApi = ('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,cardano,rippler,terra-luna,polkadot,avalanche-2,dogecoin,shiba-inu,matic-network,crypto-com-chain,wrapped-bitcoin,uniswap,litecoin,chainlink,algorand,bitcoin-cash,near,tron,stellar,decentraland,axie-infinity,cosmos,vechain,ftx-token,fantom,the-sandbox,filecoin,hedera-hashgraph,bitcoin-bep2,theta-token,elrond-erd-2,internet-computer,ethereum-claiota,tezos,helium,monero,aave,leo-token,klay-token,gala,the-graph,eos,pancakeswap-token,blockstack,flow,loopring,harmony,bittorrent-2,kusama,maker,enjincoin,bitcoin-cash-sv,quant-network,amp-token,kadena,ecash&vs_currencies=usd');

const update_slot_1 = [
    'bitcoin', //btc
    'ethereum', //eth
    'binancecoin', //bnb
    'solana', //sol
    'cardano', //ada
    'rippler', //xrp
    'terra-luna', //luna
    'polkadot', //dot
    'avalanche-2', //avax
    'dogecoin', //doge
    'shiba-inu', //shib
    'matic-network', //matic
    'crypto-com-chain', //cro
    'wrapped-bitcoin', //wbtc
    'uniswap', //uni
];

const update_slot_2 = [
    'litecoin', //ltc
    'chainlink', //link
    'algorand', //algo
    'bitcoin-cash', //bch
    'near', //near
    'tron', //trx
    'stellar', //xml
    'decentraland', //mana
    'axie-infinity', //axs
    'cosmos', //atom
    'vechain', //vet
    'ftx-token', //ftt
    'fantom', //ftm
    'the-sandbox', //sand
    'filecoin', //fil
];

const update_slot_3 = [
    'hedera-hashgraph', //hbar
    'bitcoin-bep2', //btcb
    'theta-token', //theta
    'elrond-erd-2', //egld
    'internet-computer', //icp
    'ethereum-classic',
    'iota', //miota
    'tezos', //xtz
    'helium', //hnt
    'monero', //xmr
    'aave', //aave
    'leo-token', //leo
    'klay-token', //klay
    'gala', //gala
    'the-graph', //gtr
];

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
    setInterval(() => {
        const params = await algoClient.getTransactionParams().do();

        // Get data from coingecko's API
        fetch(coingeckoApi)
            .then((response) => response.json())
            .then((data) => getData(data))
            .catch((e) => console.log(e));

const getData = (data) => {

    [
        new Uint8Array(Buffer.from('update_slot_1')),
        
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[0]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[1]].usd * 1000000))), 
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[2]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[3]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[4]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[5]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[6]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[7]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[8]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[9]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[10]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[11]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[12]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[13]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_1[14]].usd * 1000000)))
    ],
    [
        new Uint8Array(Buffer.from('update_slot_2')),
    
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[0]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[1]].usd * 1000000))), 
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[2]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[3]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[4]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[5]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[6]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[7]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[8]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[9]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[10]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[11]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[12]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[13]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_2[14]].usd * 1000000)))
    ],
    [
        new Uint8Array(Buffer.from('update_slot_3')),
        
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[0]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[1]].usd * 1000000))), 
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[2]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[3]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[4]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[5]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[6]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[7]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[8]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[9]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[10]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[11]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[12]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[13]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_3[14]].usd * 1000000)))
    ],
    [
        new Uint8Array(Buffer.from('update_slot_4')),
        
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[0]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[1]].usd * 1000000))), 
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[2]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[3]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[4]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[5]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[6]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[7]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[8]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[9]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[10]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[11]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[12]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[13]].usd * 1000000))),
        new Uint8Array(Buffer.from(Math.trunc(data[update_slot_4[14]].usd * 1000000)))
    ];

}


    }, 4000); // Tiempo que se tarda en actualizar el server
};

main();
