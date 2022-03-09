// const numbers = [89, 55, 36, 232];
const student = {
    name: 'Rowshon',
    age: 32,
    skill: ["contwnt writing", "logo designing"]
}
// 1. templete string
// const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} . She knows ${student.skill[1]}`
// console.log(about)

// 2. arrow Function
const getFlyFive = () => 55;
const addSixtyFive = num => num + 65
let x = 10
const isEven = x = x % 2 == 0
// console.log(isEven)  no need to return auto return
const addThree = (x, y, z) => x + y + z
const doMath = (num1, num2) => {
    const sum = num1 + num2
    return sum
}


// spread Operator
const numbers = [89, 55, 36, 232];
const newNumbers = [...numbers];
// numbers.push(99)
// console.log(newNumbers)
// console.log(numbers)







// create a new array from an older array and add an element.
const currentNUmbers = [...numbers, 55]
console.log(currentNUmbers)
console.log(newNumbers)
console.log(numbers)