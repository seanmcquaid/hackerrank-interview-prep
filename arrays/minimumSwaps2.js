let array = [1,3,5,2,4,6,7];

function minimumSwaps(arr) {
  let swapCount = 0;
  let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== i + 1){
      const indexOfCurrentNum = arr.indexOf(i + 1);
      swap(arr, i, indexOfCurrentNum);
      swapCount++;
    }
  }
  
  return swapCount;
}

minimumSwaps(array);

// found out that the solution will time out regardless for 8 - 13 on hacker rank
