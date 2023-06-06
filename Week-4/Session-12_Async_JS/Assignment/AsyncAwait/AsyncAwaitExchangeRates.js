//AsyncAwaitExchangeRates

async function getExchangeRate(currencyCode){
    try{
        const url = "https://api.exchangerate.host/latest"
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const rate = data.rates[currencyCode]
        // console.log(rate);
        if(data.rates.hasOwnProperty(currencyCode)){
            console.log(`ExchangeRate in ${currencyCode} = `+rate.toFixed(4));
            return rate.toFixed(4);
        }else{
            return null;                     
        }
    }
    catch(error){
        console.error(`Error: `+error);
    }
}

getExchangeRate('INR')
    .then((rate)=>{
        console.log(rate);
    })
    .catch((error)=>{
        console.log(error);;
    });

getExchangeRate('XYZ')
    .then((rate)=>{
        console.log(rate);
    })
    .catch((error)=>{
        console.log(error);;
    });