class NotValidAgeError extends Error
{
    constructor(args)
    {
        super(args);
        this.name = "Invalid Age"
    }
}

function chechAge()
{
    let age =17;
    if(age >= 18)
    {
        console.log("");
    }
    else{
        throw new NotValidAgeError("Not a valid age for voting");
    }
}

function display()
{
    try {
        chechAge();
    } catch (error) {
        console.log(error);
    }
    console.log("Program working fine");
}
display();