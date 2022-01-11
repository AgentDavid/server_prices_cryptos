const fetch = require('cross-fetch');

setInterval(() => {
    console.clear()
    let urlSite = 'https://api.binance.com/api/v3/ticker/price' // URL de la API

    // Obtencion de la data desde la API por un endpoint
    
    fetch(urlSite)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(e => console.log(e))
    
    // Funcion encargada de mostrar y procesar la data

    const mostrarData = (data) => {
        
        let arrCrypto= [] // Arreglo donde se almacena los elementos finales

        for (let i = 0; i < data.length; i++) {
            const price = data[i].price; // Precio de las monedas
            const symbol = data[i].symbol.split('USDT') // Symbolos de la moneda
            
            // Metodo para separar las monedas

            if (symbol[0].length <= 5) {
                
                arrCrypto.push(`${symbol[0]} | ${price}`)
    
            }
            
        }
        
        for (let i = 0; i < 59; i++) {
            const element= arrCrypto[i];
            
            console.log(element) // Imprime todas las monedas con sus precios y simbolos
        }

    }
}, 4000); // Tiempo que se tarda en actualizar el server


