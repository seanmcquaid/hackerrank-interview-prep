function rotLeft(a, d) {
    for(let i = 0; i < d; i++){
        let lost = a.shift();
        a.push(lost)
    }
    console.log(a)
}

let a = [1,2,3,4,5];
let d = 3;

rotLeft(a,d);