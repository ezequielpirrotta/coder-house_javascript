import {LoanCalculator} from './loanCalculator.js';


let button_go = document.getElementById("boton_simular");
let button_back = document.getElementById("boton_volver");

button_go.addEventListener("click", (e) =>
{
    let amount = parseInt(document.getElementById("amount").value);
    let cuotes = parseInt(document.getElementById("cuotes").value);
    let type = document.getElementById("type").value;

    let calculator = new LoanCalculator();
    if(!isNaN(amount) && cuotes != null && type != null)
    {   
        let loan = calculator.calculateLoan(amount, cuotes, type);
        loan = JSON.stringify(loan);
        localStorage.setItem("loan",loan);
        window.location.href = '../sections/show_data.html';
    }
    if(isNaN(amount))
    {
        Swal.fire({
            title: 'No puedes calcular un préstamo sin el monto!!',
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__backInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutUp'
            }
        })
    }       
})

button_back.addEventListener("click", (e) => 
{
    window.location.href = '../index.html';
})