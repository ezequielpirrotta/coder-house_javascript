/*function validateForm()
{
    let x = document.forms["main_form"]["amount"].value;
    if (x == "") {
        alert("You must enter the amount of money that you want to loan");
        return false;
    }
    // Get the value of the input field with id="numb"
    let amount = document.getElementById("amount");
    console.log(amount.value());
    if (isNaN(amount)) {
        alert("You must enter a valid number");
        return false;
    }
}*/
let interests = 
{
    1: 0,
    2: 0.05,
    3: 0.10,
    4: 0.15,
    5: 0.20,
    6: 0.25
};
function calculateLoan(amount, cuotes)
{
    for(let i = 1; i <= 6; i++)
    {
        if(i == cuotes)
        {
            amount = amount + (amount * interests[i]);
        }
    }
    return amount;
}

let amount = parseInt(prompt("Enter the data to calculate your loan"));
let cuotes = parseInt(prompt("Enter the amount of cuotes you wanna pay your loan"));
total = calculateLoan(amount, cuotes);
alert("Your total amount of money to pay is " + total + ", and the value of each cuote is " + (total/cuotes));
