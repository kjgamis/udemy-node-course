const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
// standard to use env variables
const port = process.env.PORT || 3000

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
        title: 'Weather',
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
    const address = req.query.address
    if (!address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    // default value for longitude, latitude and location must be provided in the case of an error where they do not exist and therefore cannot be destructured
    geocode(address, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({ error: error })
            }
            res.send({ address, location, forecast: forecastData })
        })
        
    })

    // res.send({
    //     forecast: 'sunny',
    //     location: 'Toronto',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }
    console.log(req.query)
    res.send({
        products: []
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

app.listen(port, () => {
    console.log('Server is up on port 3000')
})