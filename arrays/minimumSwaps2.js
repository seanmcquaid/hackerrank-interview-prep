let array = [4,3,1,2,0]

function minimumSwaps(arr) {
    let swapCount = 0;
    let swap = (arr,index1, index2)=>{
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }
    for (let i = 0; i < arr.length; i++){
        let swapIndex;
        let lowestNum = Infinity;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] <= arr[i] && arr[j] < lowestNum){
                lowestNum = arr[j];
                swapIndex = j;
                
            }
            if(j === arr.length-1){
                if(swapIndex !== i){
                    swap(arr, swapIndex, i)
                    swapCount++;
                }
                
            }
        }
    }
    return swapCount
}

console.log(minimumSwaps(array));

// found out that the solution will time out regardless for 8 - 13 on hacker rank