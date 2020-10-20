let array = [1,3,5,2,4,6,7];

function minimumSwaps(arr) {
  let swapCount = 0;
  let swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  const sortedArr = arr.slice().sort((a, b) => a - b);
  let firstIndex = 0;
  
  while(JSON.stringify(arr) != JSON.stringify(sortedArr)){
    const currentNum = arr[firstIndex];
    if(currentNum !== firstIndex + 1){
      swap(arr, firstIndex, currentNum - 1);
      swapCount++;
    }else{
      firstIndex++;
    }
  }
  console.log(swapCount)
  return swapCount;
}

minimumSwaps(array);

// found out that the solution will time out regardless for 8 - 13 on hacker rank
