const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoia2pnYW1pcyIsImEiOiJjanZxMnhsOHMwMzU5M3lyeDc1d3NoeW9rIn0.oP2_OQ10lm1DRyS0K_oPxg&limit=1`

    // callback can receive a successful response or an error. 'if' loop defines either one of the other
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            // const { temperature, precipProbability, precipType } = response.body.currently
            // callback(`${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability*100}% of ${precipType}.`, undefined)

            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode