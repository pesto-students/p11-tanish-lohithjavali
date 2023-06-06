//getTemperatureForCity

const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
   };

function getTemperatureForCity(){
    const cache = {};

    return function(city){
        if(cache[city]){
            return `Temperature of the ${city} is ${cache[city]}`
        }
        console.log(`Fetching temperature of the  ${city} from temperatureData`);
        const temperature = temperatureData[city]
        cache[city] = temperature;
        return `Fetched Temperature of the ${city} is ${temperature}`
    }
}

const temperature1 = getTemperatureForCity();
console.log(temperature1('New York')); // 20
console.log(temperature1('New York')); // 20 (retrieved from cache)
console.log(temperature1('London')); // 18
console.log(temperature1('London')); // 18 (retrieved from cache)