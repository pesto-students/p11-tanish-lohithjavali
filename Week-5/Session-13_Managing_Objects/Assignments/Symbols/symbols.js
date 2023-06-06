//symbols

function generateTransactionId(){
    let _tID = Symbol("tID");
    return function(){
        this._tID = Math.floor((Math.random() * 10000) + 1);
        return this._tID
        // return Symbol(this._tID)
   }
}

const genarateTransID = generateTransactionId()
console.log(genarateTransID())