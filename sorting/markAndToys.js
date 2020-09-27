function maximumToys(prices, k){
    
    function merge(arr1, arr2){
        let results = []
        let i = 0;
        let j = 0;
        while(i < arr1.length && j < arr2.length){
            if(arr2[j] > arr1[i]){
                results.push(arr1[i]);
                i++;
            } else {
                results.push(arr2[j]);
                j++;
            }
        }
        while(i < arr1.length){
            results.push(arr1[i])
            i++;
        }
        while(j < arr2.length){
            results.push(arr2[j]);
            j++;
        }
        return results
    }

    function mergeSort(arr){
        if(arr.length <= 1){
            return arr
        }
        let mid = Math.floor((arr.length) / 2 );
        let left = mergeSort(arr.slice(0,mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right)
    }

    let sortedArray = mergeSort(prices);

    function underBudget(array){
        let overBudgetIndex = 0;
        for (let i = 0; i < array.length; i++){
            if(array[i] > k){
                overBudgetIndex = i;
                break
            }
        }
        let newArray = array.slice(0,array.length - overBudgetIndex + 1)

        return (newArray)
    }

    let underBudgetArray = underBudget(sortedArray);

    let total = 0;
    let toyCount = 0;
    for(let i = 0; i < underBudgetArray.length; i++){
        let toy = underBudgetArray[i];
        if(total + toy <= k){
            total += toy;
            toyCount++;
        } 
    }

    return toyCount
   
}

let toyArray =  [1,12,5,111,200,100,50];
const budget = 50;

maximumToys(toyArray,budget)