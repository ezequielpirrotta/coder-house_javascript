
let loans = document.getElementById("least_loans");
let button = document.getElementById("boton");


loans.innerHTML = "<h2> Tus préstamos: </h2>" ;

button.addEventListener("click", (e) =>
{
    fetch("../assets/save_loans.json")
    .then((response) => response.text())
    .then((result) => {
        loans = JSON.parse(result);
        if(Object.keys(loans).length == 0)
        {
            loans = {};
            //console.log(result);
        }
        
    });
    window.location.href = '../sections/loan_info.html';
           
})