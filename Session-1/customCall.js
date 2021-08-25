function testCustomCall(message, callback){
    console.log("Custom call Running: "+message);
    if(typeof callback == "function")
    {
        callback();
    }
}

testCustomCall("Testing CallBack Function", function myFunction()
{
    console.log("This is a simple function passed as n argument");
})