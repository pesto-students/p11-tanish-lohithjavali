// Put your solution here

function divideArray(numbers){
    let evenNums = []
    let oddNums = []
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]%2 == 0){
            evenNums.push(numbers[i])
        }else{
            oddNums.push(numbers[i])
        }        
    }
    //console.log("Even Numbers: "+evenNums);
    //console.log("Odd Numbers: "+oddNums);

    evenNums.sort()
    console.log("Even Numbers:");
    if(evenNums.length !== 0){
        for(let j=0; j<evenNums.length; j++){
            console.log(evenNums[j]);
        }
    }else{
        console.log("None");
    }

    console.log("Odd Numbers:");
    if(oddNums.length !== 0){
                oddNums.sort().forEach(element => {
            console.log(element);
        });
    }else{
        console.log("None");
    }

}

let nums = [4, 2, 9, 1, 8];
//let nums = [4, 2, 8]; //None case
divideArray(nums);