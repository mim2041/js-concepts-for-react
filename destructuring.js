// 1. array destructuring
const numbers = [42, 65];
// const x= numbers[0];
// const y= numbers[1];

// const [x,y] = [42, 65];
const [x,y] = numbers;
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums;
}
// console.log(boxify(90,34));

const [first, second] = boxify(34, 45);

const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const [firstMovie, secondMovie] = student.movies;

// object destructuring
// const {name, age} = {name: 'alu', age: 14}
const {name, age} = {id: 12, name: 'alu', age: 14};

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }

}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee.specification.watch;