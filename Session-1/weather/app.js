const request = require('request');
const geocode = require('./geocode');
const forecast = require('./forecast');

var myData;
geocode('Kolkata', (err,data) => 
{
   if(err)
   console.log(err);
   else
   {
   console.log(data);
   myData = data
   }
})

forecast(myData.latitude,myData.longitude, (err,data) => 
{
   if(err)
   console.log(err);
   else
   {
   console.log(data);
   myData = data
   }
})