let str1 = "hello";
let str2 = "world"

function twoStrings(s1, s2) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let substring = false;
    for(let i = 0 ; i < alpha.length; i++){
        let regexCheck = RegExp(`[${alpha[i]}]+`)
        let match1 = regexCheck.test(s1);
        let match2 = regexCheck.test(s2);
        if(match1 == true && match2 == true){
            substring = true;
        }
    }
    if(substring == true){
        console.log("YES")
    } else {
        console.log("NO")
    }
}

twoStrings(str1,str2)