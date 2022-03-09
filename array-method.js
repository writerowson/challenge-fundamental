const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'black' },
    { name: 'camera', price: 32000, brand: 'DSlR', color: 'black' },
    { name: 'watch', price: 9000, brand: 'bamboo', color: 'blue' },
    { name: 'lphone', price: 45000, brand: 'iphone', color: 'golden' },
    { name: 'sunglass', price: 320, brand: 'fau', color: 'silver' },
]
// const brands = products.map(product => product.brand)


// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

// const name = 'Hero'; const age = 34;
// const person = { name, age }; console.log(person)


const cheap = products.filter(product => product.price <= 5000)


const SpecificName = products.filter(product => product.name.includes('z'))


const special = products.find(p => p.name.includes('z'))
console.log(SpecificName)