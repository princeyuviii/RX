let Products = ["Dell","Apple Macbook","Lenovo","Asus","HP","ChromeBook","VivoBook","Acer","LG Gram"];

let filterProduct = Products.filter(p => p.startsWith("A"));

console.log(filterProduct);

let p1 = {
    name : "Yuvi",
    age : 21,
    city : "Mandsaur",
    intro : function(){
        console.log("Hello, My name is", this.name , "From", this.city , "and age is", this.age)
    }
}

p1.intro();