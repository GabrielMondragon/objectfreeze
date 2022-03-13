// got this from https://www.youtube.com/watch?v=yJDofSGTSPQ&ab_channel=WebDevSimplified

const person = Object.freeze({
    name: "Alex",
    age: 28,
    favoriteFood: "Syrup",
    address: {
        street: "Lacson Street"
    }
})
// DID NOT change because of Object.freeze
console.log(person.name);
person.name = "Justine"; 
console.log(person.name);

// DID change because it is nested 
// out of Object.freeze scope
console.log (person.address.street);
person.address.street = "Moon";
console.log (person.address.street);