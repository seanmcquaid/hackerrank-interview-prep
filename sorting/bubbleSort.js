let array = [6,4,1]

function countSwaps(a) {
    let numSwaps = 0;
        for(let i = 0; i < a.length; i++){
            for(let j = 0 ; j < a.length ; j++){
                if(a[j] > a[j+1]){
                    const firstNum = a[j];
                    a[j] = a[j+1];
                    a[j+1] = firstNum;
                    numSwaps++;
                }
            }
        }
    let firstElement = a[0];
    let lastElement = a[a.length - 1];
    console.log("Array is sorted in " + numSwaps + " swaps.")
    console.log("First element: " + firstElement);
    console.log("Last element: " + lastElement);
}

countSwaps(array)