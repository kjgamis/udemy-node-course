const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// first argument is the route/slug
app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Toronto',
        forecast: 'sunny'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})