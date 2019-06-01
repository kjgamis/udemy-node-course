const express = require('express')

const app = express()

// first argument is the route/slug
app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Karen',
        age: 22
    })
})

app.get('/about', (req, res) => {
    res.send('About Page')
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