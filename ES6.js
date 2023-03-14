const numbers = [89, 35, 98, 12];
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x%2===0;
console.log(isEven(5));
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    return num1 + num2;
}

// 3. spread operator
// const newNumbers = numbers;
const newNumbers = [...numbers, 55];
numbers.push(99);
console.log(numbers);
console.log(newNumbers);