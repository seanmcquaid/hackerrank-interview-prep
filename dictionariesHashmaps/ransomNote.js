let magazine = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"]
let note = ["Ive", "got", "coconuts"]

function checkMagazine(magazine, note) {
    let map = {};
    let recreatable = true;
    for(let i of magazine){
        map[i] = (map[i] || 0) + 1;
    }
    for(let i of note){
        map[i] = (map[i] || 0) - 1;
    }
    for(let i in map){
        if(map[i] < 0){
            recreatable = false;
            break;
        }
    }
    console.log(recreatable? "Yes" : "No")
}

console.log(checkMagazine(magazine,note))