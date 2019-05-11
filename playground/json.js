const fs = require('fs')


// const book = {
//     title: 'Ego is the enemy',
//     author: 'KJS'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// // turn data to readable JS string
// const dataJSON = dataBuffer.toString()
// // parse data so we can access properties
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const karenJson = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(karenJson)

data.name = 'Karen Jane'
data.age = 23

console.log(data.name)

const newData = JSON.stringify(data)
fs.writeFileSync('2-json.json', newData)