const fetch = require('cross-fetch');

setInterval(() => {
    console.clear();
    let urlSite =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'; // URL de la API

    // Obtencion de la data desde la API por un endpoint

    fetch(urlSite)
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
}, 4000); // Tiempo que se tarda en actualizar el server
