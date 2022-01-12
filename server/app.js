const fetch = require('cross-fetch');
const algosdk = require('algosdk');
const dataParse = JSON.parse(fs.readFileSync('wallet_creator.json').toString());

const wallet_creator = algosdk.mnemonicToSecretKey(dataParse.mnemonic);

const server = 'https://testnet.algoexplorerapi.io';
const algoClient = new algosdk.Algodv2('', server, '');
const coingeckoApi =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false';

const update_slot_1 = [
    'bitcoin', //btc
    'eth',
    'bnb',
    'sol',
    'ada',
    'xrp',
    'luna',
    'dot',
    'avax',
    'doge',
    'shib',
    'matic',
    'cro',
    'wbtc',
    'uni',
];

const update_slot_2 = [
    'ltc',
    'link',
    'algo',
    'bch',
    'near',
    'trx',
    'xml',
    'mana',
    'axs',
    'atom',
    'vet',
    'ftt',
    'ftm',
    'sand',
    'fil',
];

const update_slot_3 = [
    'hbar',
    'btcb',
    'theta',
    'egld',
    'icp',
    'etc',
    'miota',
    'xtz',
    'hnt',
    'xmr',
    'aave',
    'leo',
    'klay',
    'gala',
    'grt',
];

const update_slot_4 = [
    'eos',
    'cake',
    'stx',
    'flow',
    'lrc',
    'one',
    'btt',
    'ksm',
    'mkr',
    'enj',
    'bsv',
    'qnt',
    'amp',
    'kda',
    'xec',
];

const main = async () => {
    setInterval(() => {
        const params = await algoClient.getTransactionParams().do();

        // Get data from coingecko's API
        fetch(coingeckoApi)
            .then((response) => response.json())
            .then((data) => mostrarData(data))
            .catch((e) => console.log(e));

        // Funcion encargada de mostrar y procesar la data
        const mostrarData = (data) => {
            let arrCrypto = [];

            for (let i = 0; i < data.length; i++) {
                const symbol = data[i].symbol;
                const price = data[i].current_price;
                arrCrypto.push(symbol + ' | ' + price);
            }

            for (let i = 0; i < arrCrypto.length; i++) {
                console.log(arrCrypto[i]);
            }
        };

        //Paso 1  usar simple/prices
        //Paso 2 encontrar los id de los symbols (1 sola vez)
        //Paso 3 ordenar los precios, que sean en el mismo orden que en crypto_price.py (chequear update_slot_1/2/3/4)
        //Paso 4 convertirlos a enteros agregando 6 ceros
        //Paso 5 crear los arrays del tipo:

        // [
        //     new Uint8Array(Buffer.from('update_slot_1')),
        //     new Uint8Array(Buffer.from(convertPrice(data.bitcoin.usd))),// btc 47000000000
        //     new Uint8Array(Buffer.from(47000)), //eth 3500000000
        //     new Uint8Array(Buffer.from(47000)), 300000
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        // ];
        // [
        //     new Uint8Array(Buffer.from('update_slot_2')),
        //     ...
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        // ];
        // [
        //     new Uint8Array(Buffer.from('update_slot_3')),
        //     ...
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        // ],
        // [
        //     new Uint8Array(Buffer.from('update_slot_4')),
        //     ...
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        //     new Uint8Array(Buffer.from(47000)),
        // ],
    }, 4000); // Tiempo que se tarda en actualizar el server
};

main();
