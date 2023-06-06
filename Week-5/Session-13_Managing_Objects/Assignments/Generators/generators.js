//generators

function* generators(array){
    for(let element of array){
        yield Symbol(element);
    }
}

const array = ['hello', 'world', 'test']

const generate = generators(array)
console.log(generate.next().value);