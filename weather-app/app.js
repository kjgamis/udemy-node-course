const request = require('request')

const url = 'https://api.darksky.net/forecast/53c4d3a3640305700d173ff2a37b3b49/37.8267,-122.4233?units=si'

request({
    url,
    json: true
}, (error, response) => {
    // const data = JSON.parse(response.body)
    // console.log(data.currently)
    // console.log(response.body.currently)
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else {
        const { temperature, precipProbability, precipType } = response.body.currently
        console.log(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability*100}% of ${precipType}.`)
    }
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2pnYW1pcyIsImEiOiJjanZxMnhsOHMwMzU5M3lyeDc1d3NoeW9rIn0.oP2_OQ10lm1DRyS0K_oPxg&limit=1'

request({
    url: url2, json: true
}, (error, response) => {
    if (error) {
        console.log('Unable to connect to map service')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        console.log(lat, long)
    }
})