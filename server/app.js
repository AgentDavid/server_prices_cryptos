const fetch = require('cross-fetch');
const algosdk = require('algosdk');
const dataParse = JSON.parse(fs.readFileSync('wallet_creator.json').toString());

const wallet_creator = algosdk.mnemonicToSecretKey(dataParse.mnemonic);

const token = {
    'X-API-Key': '79vc1nPNxj50rxauKFEI35oynac24jzo3EE6tYZc',
};
const server = 'https://testnet-algorand.api.purestake.io/ps2';
const port = '';
const algoClient = new algosdk.Algodv2(token, server, port);
const coingeckoApi =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false'; // URL de la API

const update_slot_1 = [
    'BTC',
    'ETH',
    'BNB',
    'SOL',
    'ADA',
    'XRP',
    'LUNA',
    'DOT',
    'AVAX',
    'DOGE',
    'SHIB',
    'MATIC',
    'CRO',
    'WBTC',
    'UNI',
];

const update_slot_2 = [
    'LTC',
    'LINK',
    'ALGO',
    'BCH',
    'NEAR',
    'TRX',
    'XML',
    'MANA',
    'AXS',
    'ATOM',
    'VET',
    'FTT',
    'FTM',
    'SAND',
    'FIL',
];

const update_slot_3 = [
    'HBAR',
    'BTCB',
    'THETA',
    'EGLD',
    'ICP',
    'ETC',
    'MIOTA',
    'XTZ',
    'HNT',
    'XMR',
    'AAVE',
    'LEO',
    'KLAY',
    'GALA',
    'GRT',
];

const update_slot_4 = [
    'EOS',
    'CAKE',
    'STX',
    'FLOW',
    'LRC',
    'ONE',
    'BTT',
    'KSM',
    'MKR',
    'ENJ',
    'BSV',
    'QNT',
    'AMP',
    'KDA',
    'XEC',
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
        const txn1 = algosdk.makeApplicationNoOpTxn(
            wallet_creator.addr,
            params,
            182182812,
            [],
        );
    }, 4000); // Tiempo que se tarda en actualizar el server
};

main();
