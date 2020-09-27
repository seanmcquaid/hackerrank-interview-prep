let string1 = "showman";
let string2 = "womaan";

// string 1 = woman - 2
// string 2 = woman - 1

function makeAnagram(string1, string2) {
    let commonCharacters = 0;
    let string1Obj = {};
    let string2Obj = {};
    for (let i = 0; i < string1.length; i++) {
        let character = string1[i];
        string1Obj[character] = (string1Obj[character] || 0) + 1;
    }
    for (let i = 0; i < string2.length; i++) {
        let character = string2[i];
        string2Obj[character] = (string2Obj[character] || 0) + 1;
    }

    let longerStringObj, smallerStringObj;
    if (string1.length >= string2.length) {
        longerStringObj = string1Obj;
        smallerStringObj = string2Obj;  
    } else {
        longerStringObj = string2Obj;
        smallerStringObj = string1Obj;
    }

    for(let keys in longerStringObj){
        if(longerStringObj[keys] === smallerStringObj[keys]){
            commonCharacters += longerStringObj[keys] + smallerStringObj[keys];
        } else if (longerStringObj[keys] > smallerStringObj[keys] && smallerStringObj[keys] !== undefined){
            commonCharacters += smallerStringObj[keys] * 2
        } else if (longerStringObj[keys] < smallerStringObj[keys]){
            commonCharacters += longerStringObj[keys] * 2
        }
    }
    
    return(string1.length+ string2.length - commonCharacters)
   
}

console.log(makeAnagram(string1, string2))