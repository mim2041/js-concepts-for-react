// 'adbg', 5, true, {}, []
// '', 0, false, null, undefind

// check truthy
let myVar = 5;
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biriyani';
}
else{
    food = 'cha biscuit';
}

// ternary
let food1 = money>100 ? 'biriyani' : 'cha biscuit';
console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink);

// number to string conversion
const num3 = 5;
const strNum = num3 + '';

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);

let isActive = false;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || showUser();

isActive = !isActive;