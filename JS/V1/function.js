function Greet(){
    console.log("Hello");
    console.log("goodmorning");
    console.log("Kese Ho");
    console.log();
}

console.log("Yuvi");
Greet();

console.log("Dishu");
Greet();

console.log("Chirag");
Greet();

let a =3;

function factOf(a){
    if(a==1)
    {
        return 1;
    }
    else
    {
        return a = a * factOf(a-1);
    }

    
}
console.log("Factorial of ",a," is ",factOf(a));

console.log();

let sqr = (x) => x*x;
console.log(sqr(5));
console.log(((x) => x*x)(5));



