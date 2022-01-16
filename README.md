# How deploy the smartcontract

To deploy the smartcontract check the smartcontract\deploy.ipynb file in Jupiter Notebook

To run the script to automatically update the smartcontract prices

```
npm i && npm start
```

## Using the data in another smartcontract

Pyteal code:

```
App.globalGetEx(Int(APP_ID), Bytes('CRYPTO_SYMBOL'))
App.globalGetEx(Int(62242014), Bytes('BTC'))
```

It must be remembered that the smart contract only admits integers, so 6-zeroes were added to the prices to maintain accuracy. Just like the use of micro algos, to know the real value, just divide by 1,000,000.

We have 3 smart contracts on the test network, one priced in USD, the other in EUR and GBP. The app.js file is the demo to update the prices in USD, to change to another currency you just have to change the vs_currencies parameter to the desired currency (For example "https://....&vs_currencies=eur")

### APP_ID_USD=62242014

### APP_ID_EUR=62242137

### APP_ID_GBP=62242291

Crypto prices currently supported:

```
symbol / name
BTC = bitcoin
ETH = ethereum
BNB = binancecoin
SOL = solana
ADA = cardano
XRP = ripple
LUNA = terra-luna
DOT = polkadot
AVAX = avalanche-2
DOGE = dogecoin
SHIB = shiba-inu
MATIC = matic-network
CRO = crypto-com-chain
WBTC = wrapped-bitcoin
UNI = uniswap
LTC = litecoin
LINK = chainlink
ALGO = algorand
BCH = bitcoin-cash
NEAR = near
TRX = tron
XML = stellar
MANA = decentraland
AXS = axie-infinity
ATOM = cosmos
VET = vechain
FTT = ftx-token
FTM = fantom
SAND = the-sandbox
FIL = filecoin
HBAR = hedera-hashgraph
BTCB = bitcoin-bep2
THETA = theta-token
EGLD = elrond-erd-2
ICP = internet-computer
ETC = ethereum-classic
MIOTA = iota
XTZ = tezos
HNT = helium
XMR = monero
AAVE = aave
LEO = leo-token
KLAY = klay-token
GALA = gala
GRT = the-graph
EOS = eos
CAKE = pancakeswap-token
STX = blockstack
FLOW = flow
LRC = loopring
ONE = harmony
BTT = bittorrent-2
KSM = kusama
MKR = maker
ENJ = enjincoin
BSV = bitcoin-cash-sv
QNT = quant-network
AMP = amp-token
KDA = kadena
XEC = ecash

```

## Using the data with AlgoClient (a free solution for development)

Currently consulting an API may or may not be useful for your developments, some APIs like those of coingeko work quite well but have certain limitations. In this case, the blockchain is open and you can see the real price without any limitations. In this case, get_prices_algoclient.js is used with the algoexplorer indexer to check the values of the cryptos.

You would get a result similar to this:

```
{
  XEC: 0.000104,
  HBAR: 0.279421,
  STX: 2.17,
  BTC: 43258,
  MIOTA: 1.14,
  KSM: 277.63,
  VET: 0.078682,
  UNI: 17.87,
  ETC: 32.42,
  HNT: 33.76,
  CAKE: 12.11,
  ALGO: 1.44,
  FIL: 30.67,
  KDA: 9.01,
  AMP: 0.041331,
  FLOW: 7.67,
  FTT: 46.46,
  CRO: 0.464589,
  LEO: 3.78,
  DOT: 27.77,
  LTC: 147.06,
  ADA: 1.41,
  XMR: 227.72,
  TRX: 0.069828,
  AVAX: 92.86,
  FTM: 3.27,
  SOL: 147.96,
  LINK: 25.69,
  GALA: 0.329631,
  XML: 0.259983,
  LRC: 1.37,
  NEAR: 20.25,
  AAVE: 239.8,
  BTT: 0.00262,
  WBTC: 43264,
  BNB: 500.04,
  LUNA: 86.39,
  ETH: 3354.14
}
```

## TODOS:

-   Create a package in NPM and PIP for free use by developers
