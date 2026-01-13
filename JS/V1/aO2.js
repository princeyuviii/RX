let Teams = [["A","B","C"],["D","E","F"],["G","H","I"]];

console.log(Teams);
console.log(Teams[0][1]);

for(let i of Teams)
{
    for(j of i)
    {
        console.log(j);
    }
}


function Person(n,a)
{
    return{
        name : n,
        age : a,

        intro:function()
        {
            console.log("Hello, I am",this.name,"and my age is",this.age)
        }
    }
    
}

let P1 = Person("Yuvi",21);
P1.intro();


setInterval(()=>{
    let MyDate = new Date();
    console.log(MyDate.getFullYear());
    console.log(MyDate.getMonth());
    console.log(MyDate.getDay());
    console.log(MyDate.getHours());
    console.log(MyDate.getMinutes());
    console.log(MyDate.getSeconds());
    console.log("----------------------")



},1000)



