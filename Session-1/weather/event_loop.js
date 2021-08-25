let request = require('request');

let apiKey = '5d16e148063d03a149a6d7953acab03e';

const CITIES = ['Kolkata','Dehli','Allahabad','Bangalore','Chennai'];

const city = CITIES[Math.floor(Math.random()*CITIES.length)];

//let url = `http://api.openweathermap.org/data/2.5/weather/q=${city}&units=imperial&appid=${apiKey}`;

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function(err,res,body){
    console.log("fetching data");
    if (err) {
        console.log("error while fetching data" + err);
    }
    else
    {
        let weather = JSON.parse(body);
        let message = `Its ${weather.main.temp} degrees is ${weather.name}!`
        console.log(message);
    }

    greeting();
})

function greeting()
{
    console.log('Hello');
}