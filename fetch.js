const student = {
    name: 'Rowshon',
    age: 27,
    skill: ["contwnt writing", "logo designing"]
}

const studentJson = JSON.stringify(student);
// console.log(studentJson)

const studentObj = JSON.parse(studentJson)
// console.log(studentObj)

// keys , values
const keys = Object.keys(student)
const values = Object.values(student)

// console.log(keys)
// console.log(values)


// var i = 0;
// while (i <= 15) {
//     console.log(i);
//     console.log('looping looping looping');
//     i++
// }

// for 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers.forEach(num => console.log(num - 1))
numbers.map(num => console.log(num - 1))


const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'black' },
    { name: 'camera', price: 32000, brand: 'DSlR', color: 'black' },
]
const newProduct = { name: 'webcam', price: 700, brand: 'lai' }
const newProducts = [...products, newProduct]




const remaining = newProducts.filter(product => product.name !== 'camera')
console.log(remaining)