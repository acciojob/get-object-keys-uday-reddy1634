
const student = {
    name: "John"
};

function getKeys(obj) {
    return Object.keys(obj);
}

const student2 = {
    name: "John",
    age: 20,
    city: "Hyderabad"
};

console.log(getKeys(student2)); 

console.log(getKeys(student)); 
