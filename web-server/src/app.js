const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars and views location
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirectoryPath))

// first argument is the route/slug
app.get('', (req, res) => {
    // first argument must match template name without extension
    // second argument is an object containing values you want the view to be able to access 
    res.render('index', {
        title: 'Weather App',
        name: 'Karen Gamis'
    })
})

app.get('/about', (req, res) => {
    // first argument must match template name without extension
    // second argument is an object containing values you want the view to be able to access 
    res.render('about', {
        title: 'About Me',
        name: 'Karen Gamis'
    })
})

app.get('/help', (req, res) => {
    // first argument must match template name without extension
    // second argument is an object containing values you want the view to be able to access 
    res.render('help', {
        title: 'Help',
        name: 'Karen Gamis',
        helpText: 'Helpful Text'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Toronto',
        forecast: 'sunny'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error404', {
        title: 'Error 404',
        name: 'Karen Gamis',
        errorMessage: 'Help article not found',
    })
})

app.get('*', (req, res) => {
    res.render('error404', {
        title: 'Error 404',
        name: 'Karen Gamis',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})