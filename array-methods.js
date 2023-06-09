const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 70000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 2000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 45000, brand: 'canon', color: 'gray'},
];

const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);

products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// 3. filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);

// 4. find
const special = products.find(p => p.name.includes('n'));
console.log(special);