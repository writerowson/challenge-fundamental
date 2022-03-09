let myVar = 5;
if (myVar) {
    myVar = myVar * 100
}
else {
    myVar = 0
}


let myMoney = 50
if (!myMoney) {

}

const money = 80;
let food;
if (money > 100) {
    food = 'cha biscuit';
}
else {
    food = "biriyani"
}

// ternary
let food1 = money > 100 ? 'biriyani' : 'cha'


let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter Water';
console.log(drink)


let num1 = 5
const numberTostring = num1 + ''
console.log(numberTostring)
let input = '500'
const inputNum = +input;
console.log(inputNum)

const isActive = false;
const showUser = () => console.log('display User')
const hideUser = () => console.log('hide User')
// isActive ? showUser() : hideUser()

isActive && showUser();

isActive || hideUser()


// let isActive = false;
isActive = !isActive