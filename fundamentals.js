

// 3. array declare
// index, length, push
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop
for(let i=0; i< numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

// 5. function
function multiply(num1, num2){
    const result = num1 *num2;
    return result;
}

const output = multiply(35, 78);

// 6. Object
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
console.log(student.age);
console.log(student['name']);
const myVariable = 'age';
console.log(student[myVariable]);