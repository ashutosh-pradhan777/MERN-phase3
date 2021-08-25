let data;
function fetchData()
{
    setTimeout(() => {
        data={sId:1001,sName:"Sonam"}
    }, 2000)
}

function displayData()
{
    console.log(data);
    console.log("End");
}

console.log("Start");
fetchData();
displayData();