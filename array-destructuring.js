const number = [42, 65]

const [x, y] = number
// const [x, y] = [42, 65]
console.log(x, y)

function boxify(num1, num2) {
    const nums = [num1 + num2];
    return nums
}
const [frist, second] = boxify(90, 34)
console.log(nums)

// Objects destruturing 
const myself = { name: 'rowshon', age: 27 }

// const { name, age } = { name: 'rowshon', age: 27 }
// const { name, age } = { salary: 32000, name: 'rowshon', age: 27 }

const employees = {
    id: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', "css", "js"],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarKhali',
        drink: 'water',
        watch: {
            brand: 'garmin',
            color: 'black'
        }
    }
}
const [html, css] = language;
const { machine, id } = employees;
const { weight, address } = employees.specification;
const { brand } = employees.specification.watch
