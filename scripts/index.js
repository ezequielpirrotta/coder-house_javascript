import {LoanCalculator} from'./loanCalculator.js';


let button = document.getElementById("boton");


button.addEventListener("click", (e) =>
{
    //e.preventDefault(true);
    let amount = parseInt(document.getElementById("amount").value);
    let cuotes = parseInt(document.getElementById("cuotes").value);
    let type = document.getElementById("type").value;
    //cuotes = parseInt(cuotes.options[cuotes.selectedIndex]);
    
    let calculator = new LoanCalculator();
    if(amount != null && cuotes != null && type != null)
    {   
        console.log(typeof(cuotes))
        let loan = calculator.calculateLoan(amount, cuotes, type);
        //console.log(loan)

        loan = JSON.stringify(loan);
        localStorage.setItem("loan",loan);
        window.location.href = '../sections/show_data.html';
    }       
})







