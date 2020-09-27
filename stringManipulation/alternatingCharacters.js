let string = "AAAA";

function alternatingCharacters(string) {
    let deletionCount = 0;
    for(let i = 0; i <string.length; i++){
        if(string[i] === string[i+1]){
            deletionCount++;
        }
    }
    return deletionCount
}

console.log(alternatingCharacters(string))