let path = "DUDDDUUDUU";
let pathArray = path.split("")
let numberOfSteps = pathArray.length;

function countingValleys(num, string) {
    let pathArray = string.split("")
    let numberOfSteps = pathArray.length;
    while (numberOfSteps > 0) {
        let valleyCount = 0; 
        let seaLevel = 0; 
        for(let i = 0; i < pathArray.length; i++){
            if(pathArray[i] == "D"){
                seaLevel--;
                numberOfSteps--;
            } else if (pathArray[i] == "U"){
                seaLevel++;
                numberOfSteps--;
                if(seaLevel == 0){
                    valleyCount++;
                }
            }
        }
        return(valleyCount);
    }
}

countingValleys(numberOfSteps, path);