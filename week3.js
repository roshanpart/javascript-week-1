const myself = {
    name: "Roshan", 
    age: 39,
    skills: ["interpreter", "coder", "designer", "photographer"]
}

console.log(myself.name);
console.log(myself["name"]);

const myAge = myself.age;

const array = []
const productOne = {name: "choco", price: 30, inStock: true};
const productTwo = {name: "biscuit", price: 24, inStock: false}
const productThree = {name: "cookies", price: 45, inStock: true}
array.push(productOne, productTwo, productThree);
console.log(array);

for (i = 0; i < array.length; i++){
    console.log(`The name of product is ${array[i].name} and the price is ${array[i].price}`);
}


/* const names = ["Emil", "Zoey"];
names.unshift("Fowad");
console.log(names);
names.shift();
console.log(names); */


const names = ["Amina", "Emil", "Zoey", "Ahmad"];
const nameToRemove = "Zoey";
const findIndex = names.indexOf(nameToRemove);

if (nameToRemove !== -1) {
    names.splice(findIndex, 1)
}
console
