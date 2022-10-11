//import './loanCalculator.js';
class LoanCalculator {

    constructor ()
    {
        this.interests = []

        this.interests["car"] = [0, 0.05, 0.10, 0.15, 0.20, 0.25];
        this.interests["personal"] = [0, 0.05, 0.10, 0.15, 0.20, 0.25];
        
        //this.interests = [0, 0.05, 0.10, 0.15, 0.20, 0.25];
    }

    calculateLoan(amount, cuotes, type)
    {
        let result = 
        {
            total: 0,
            total_x_cuotes: 0,
            type: type
        }
        for(let loan_type in this.interests)
        {
            if(type == loan_type)
            {
              
                for(let i = 1; i <= this.insterests[loan_type].length; i++)
                {
                    if(i == cuotes)
                    {  
                        result.total = amount + (amount * this.interests[loan_type][i]);
                    }
                }
            }
        }
        result.total_x_cuotes = result.total/cuotes;
        return result;
    }
}

let amount = parseInt(prompt("Enter the data to calculate your loan"));
let cuotes = parseInt(prompt("Enter the amount of cuotes you wanna pay your loan"));
let type = prompt("Enter the type of loan");

calculator = new LoanCalculator();
let loan = null;

while(type != "c" && type != "p")
{
    type = prompt("Thats not a type of loan available, please try again");
  
}
if(type == "c")
{
    loan = calculator.calculateLoan(amount, cuotes, "car");
}
else if(type == "p")
{
    loan = calculator.calculateLoan(amount, cuotes, "personal");
}

let message = "Total loan : " + loan.total + "\nValue of each cuote: " + loan.total_x_cuotes + "\nType of loan: "+loan.type;
alert(message);
/*
let result = document.getElementById("result");
let button = document.getElementById("boton");


console.log(result.hasChildNodes());
if(result.hasChildNodes())
{
    
    let nodes = result.childNodes;
    console.log(nodes);
    for (child in nodes)
    {
        child.remove();
    }
    //window.location.reload();
}

button.addEventListener("click", function()
{
    console.log("llgué")
  
    let amount = parseInt(document.getElementById("amount").value);//parseInt(prompt("Enter the data to calculate your loan"));
    let cuotes = document.getElementById("cuotes");//parseInt(prompt("Enter the amount of cuotes you wanna pay your loan"));

    cuotes = cuotes.options[cuotes.selectedIndex];

    console.log(cuotes);
    calculator = new LoanCalculator();
    let loan = calculator.calculateLoan(amount, cuotes);
    if(amount != null && cuotes != null)
    {
        result.innerHTML = "<h2> Your loan data: </h2>" ; 
        let paragraph_1 = document.createElement("p");
        paragraph_1.innerText = "Total loan: " + toString(loan.total);
        result.append(paragraph_1);
        let paragraph_2 = document.createElement("p");
        paragraph_2.innerHTML = "Value of each cuote: " + toString(loan.total_x_cuotes);
        result.append(paragraph_2);
    }
})
*/






