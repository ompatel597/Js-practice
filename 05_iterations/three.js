// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " ") {
        break
    }
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [J,r] of map) {
    console.log(`${J} :- ${r}`);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [J,r] of myObject) {
    console.log(`${J} :- ${r}`);
    
}
