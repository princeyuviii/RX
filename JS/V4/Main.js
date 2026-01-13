function A(){
    console.log("Hello, I am A")
}

function B() {
  setTimeout(() => {
    console.log("Hello, I am B");
  }, 500);
}

function C() {
  console.log("Hello, I am C");
}

console.log("Hello, From Js");

A();
B();
C();

console.log("Good Morning");
