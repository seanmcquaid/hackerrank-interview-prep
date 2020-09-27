const minimumAbsoluteDifference = array => {
    let minimumDiff = Infinity;
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            minimumDiff = Math.abs(array[i] - array[j]) < minimumDiff ? Math.abs(array[i] - array[j]) : minimumDiff;
        }
    }
    return minimumDiff;
};

console.log(minimumAbsoluteDifference([-2, 2, 4]));