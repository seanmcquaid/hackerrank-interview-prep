function digitSum(n, k){
    let stringNum = n.toString()
    let newString = n.toString()
    for(let i = 0; i < k-1; i++){
        newString += stringNum
    }
    function calculatedSum(newString){
        let splitDigitArr = newString.split("")
        if(splitDigitArr.length === 1){
            return newString
        }
        let total = 0;
        for(let i = 0; i < splitDigitArr.length; i++){
            let digit = parseInt(splitDigitArr[i])
            total += digit
        }
        let stringTotal = total.toString()
        return calculatedSum(stringTotal)
    }
    let totalDigitSum = parseInt(calculatedSum(newString))
    return(totalDigitSum)
}

console.log(digitSum(593,10))