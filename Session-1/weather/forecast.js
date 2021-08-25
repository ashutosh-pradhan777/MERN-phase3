const request = require('request');

const forecast = (latitude,longitude,callback) =>
{
    const url1 = 'https://api.darksky.net/forecast/0f117a9db5a9407fd73d76e7555804b1/'+latitude+','+longitude
    request({url:url1,json:true}, (err,res) =>
    {
        if(err)
        {
            callback("unable to connect to internet",undefined)
        }
        else if(res.body.features.length === 0)
        {
            callback("unable to identify the location",undefined)
        }
        else
        {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                longitude: response.body.currently.temperature,
                location: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast;