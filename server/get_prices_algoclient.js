const algosdk = require('algosdk');
const dotenv = require('dotenv');

dotenv.config();

const app_id = parseInt(process.env.APP_ID_USD);
const server = process.env.ALGOEXPLORER_INDEXER_API;
const algoIndexer = new algosdk.Indexer('', server, '');

const getCRypto = async () => {
    let values = {};
    const accountInfoResponse = await algoIndexer.lookupApplications(app_id).do();

    for (let i = 0; i < accountInfoResponse['application']['params']['global-state'].length; i++) {
        const var_name = Buffer.from(
            accountInfoResponse['application']['params']['global-state'][i][`key`],
            'base64',
        ).toString();
        if (accountInfoResponse['application']['params']['global-state'][i]['value']['type'] === 2) {
            values[var_name] =
                accountInfoResponse['application']['params']['global-state'][i]['value']['uint'] / 1000000;
        }
    }

    console.log(values);
    console.log("Bitcoin's price is " + values['BTC'] + ' USD');
};

getCRypto();
