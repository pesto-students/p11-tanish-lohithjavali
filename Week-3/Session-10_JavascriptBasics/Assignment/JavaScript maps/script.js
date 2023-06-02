function calcWordFrequencies() {
    let words = prompt("Enter the list of words separated by spaces:")
    
    //convert list of words to array
    const wordArray = words.split(" ");
    console.log(wordArray);

    //initialize Map
    const wordMap = new Map();

    //Loop through the array and push them to Map based on the count
    for (let i = 0; i < wordArray.length; i++) {
        if(wordMap.has(wordArray[i])){
            wordMap.set(wordArray[i], wordMap.get(wordArray[i])+1)
        }else{
            wordMap.set(wordArray[i], 1)
        }
    } 
    
    //print the words and their count
    wordMap.forEach((key, value) => {
        console.log(key, value);
    }); 
}
  
calcWordFrequencies()