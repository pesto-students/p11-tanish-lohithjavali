// Your solution goes here 

function isStrongPassword(password) {
    if(password.length >= 8 &&  !password.includes("password") && /[A-Z]/.test(password)){
        console.log("Password valid");
        return true;
    }else{
        console.log("Password not valid");
        return false;
    }

}

//isStrongPassword("Qwerty"); // false - Too short
//isStrongPassword("passwordQwerty") // false - Contains "password"
//isStrongPassword("qwerty123") // false - No uppercase characters
isStrongPassword("Qwerty123") // true