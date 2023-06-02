//Closure function

//counter function
function counter(){
    let count = 0;
    //counter increment function
    function incCount(){
        count++;
        console.log(count);
        return count;
    }
    return incCount;
}

//2 instances of the counter which returns count
let firstCounter = counter()
let secondCounter = counter()

let firstValues=[];
let secondValues=[];

//calling 1st and 2nd counters 5 ad 3 times
for (let i = 0; i < 5; i ++) {
    firstValues.push(firstCounter())
}
for (let i = 0; i < 3; i ++) {
    secondValues.push(secondCounter())
}

console.log("firstValues array:", firstValues)
console.log("secondValues array:", secondValues)