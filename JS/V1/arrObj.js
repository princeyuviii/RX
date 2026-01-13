let arr= [10,20,30,40,50];
let obj = {
    name : "Chirag",
    age : 21,
}


let Users = [
    {
        name : "Yuvi",
        age : 21,
        skills: ["C","C++","Python"],
        laptop: {
            brand : "Apple",
            processor : "M2"
        }

    },
    {
        name : "Dishu",
        age : 19,
        skills: ["C","React","AI"],
        laptop: {
            brand : "HP",
            processor : "Victus"
        }

    }
]

for(let i in Users){
    console.log(i,Users[i]);
}

console.log(Users[1]);
console.log(Users[0].laptop.brand);