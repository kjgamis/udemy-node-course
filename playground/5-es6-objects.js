// Object property shorthand

const name = 'Karen'
const age = 22

const user = {
    name,
    userAge: age,
    city: 'Toronto'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const { label: productLabel, price, rating = 6 } = product

// 'label' is renamed as 'productLabel'
console.log(productLabel)
console.log(price)
// rating only works when it is not defined in the object above
console.log(rating)


// inline destructuring found in the second argument
const transaction = (type, { label, stock }) => {
     console.log(type, label, stock)
}

transaction('order', product)