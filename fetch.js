// 1. JSON

const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 423, 12, 443, 55,654];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in

const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 70000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 45000, brand: 'canon', color: 'gray'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'Lal'};

// copy products array and then add newProduct
const newProducts = [...products, newProduct];
// console.log(newProducts);

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);