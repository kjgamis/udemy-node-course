const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// geocode('Toronto', (error, data) => {
//     if (error) {
//         return console.log('Error', error)
//     }

//     forecast(data.longitude, data.latitude, (error, forecastData) => {
//         if (error) {
//             return console.log('Error', error)
//         }
//         console.log(data.location, forecastData)
//     })
// })

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

const address = process.argv[2]

if (!address) {
    console.log('Please provide a city.')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log('Error', error)
        }

        forecast(data.longitude, data.latitude, (error, forecastData) => {
            if (error) {
                return console.log('Error', error)
            }
            console.log(data.location, forecastData)
        })
    })
}