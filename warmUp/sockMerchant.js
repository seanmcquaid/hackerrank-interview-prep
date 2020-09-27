let socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let numOfMatchingPairs = 0;

function sockMerchant(num, array) {
    array.sort();
    let matchingPair = 0;
    for(let i = 0; i < array.length - 1 ; i++){
        if (array[i] === array[i + 1]) {
            matchingPair++;
            i++;
        }
    }
    return(matchingPair);
}


sockMerchant(numOfMatchingPairs, socks);