// 6 * 6 grid 

// 16 hourglasses

// example grid: 
// -9 -9 -9  1 1 1 
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// i = array for lines
// j = array of integers for that line

// hour glass format
// a b c
//   d
// e f g

let array = [
    [-9,-9,-9,1,1,1],
    [0,-9,0,4,3,2],
    [-9,-9,-9,1,2,3],
    [0,0,8,6,6,0],
    [0,0,0,-2,0,0],
    [0,0,1,2,4,0]
]

// example values of the 16 hour glasses
// -63, -34, -9, 12, 
// -10, 0, 28, 23, 
// -27, -11, -2, 10, 
// 9, 17, 25, 18

function hourglassSum(arr) {
    let biggestHourGlass = -82;
    let gridCheck = arr.length - 2;
    console.log(gridCheck)
    for(let i = 0; i < gridCheck; i++){
        for(let j = 0; j < gridCheck; j++){
            let hourGlass = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(hourGlass > biggestHourGlass){
                biggestHourGlass = hourGlass;
            }
        }
    }
    console.log(biggestHourGlass);
}

hourglassSum(array);