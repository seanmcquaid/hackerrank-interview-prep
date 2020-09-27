let binaryArray = [0,0,0,0,1,0];

function jumpingOnClouds(c) {
    let stepCount = 0;
    for(let i = 0; i < c.length; i++){
        // if index of next thing is current index + 1 or current index + 2 , 
        // jump to the index
        // add to stepcount
        // if index is equal 1, skip
        if(c[i + 1] === 0){
            if(c[i + 2] === 0){
                i = i + 1; 
                stepCount++;
            } else {
                stepCount++;
            }
        } else if (c[i + 1] === 1){
            i = i + 1;
            stepCount++;
        }
    }
    console.log(stepCount);
}

jumpingOnClouds(binaryArray);