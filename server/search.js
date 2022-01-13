const fetch = require('cross-fetch');
const fs = require('fs');

const coingeckoApi = ('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=75&page=1&sparkline=false')

fetch(coingeckoApi)
    .then((response) => response.json())
    .then((data) => update_slots(data))
    .catch((e) => console.log(e));

const update_slot_1 = [
    'btc',
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

function update_slots(data) {
    for (let i = 0; i < 10; i++) {
        const update_slot_1_index = update_slot_1.indexOf(data[i]['symbol']);
        if (update_slot_1_index !== -1) {
            console.log(data[i]['id']);
            update_slot_1[update_slot_1_index] = data[i]['id'];
        }
        const update_slot_2_index = update_slot_2.indexOf(data[i]['symbol']);
        if (update_slot_2_index !== -1) {
            update_slot_2[update_slot_2_index] = data[i]['id'];
        }
        const update_slot_3_index = update_slot_3.indexOf(data[i]['symbol']);
        if (update_slot_3_index !== -1) {
            update_slot_3[update_slot_3_index] = data[i]['id'];
        }
        const update_slot_4_index = update_slot_4.indexOf(data[i]['symbol']);
        if (update_slot_4_index !== -1) {
            update_slot_4[update_slot_4_index] = data[i]['id'];
        }
    }
}

fs.writeFile(
    'test.json',
    JSON.stringify({
        update_slot_1,
        update_slot_2,
        update_slot_3,
        update_slot_4,
    }),
    (err) => {
        if (err) {
            console.error(err);
            return;
        }
    },
);
