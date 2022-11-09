
let loans = document.getElementById("least_loans");
let button = document.getElementById("boton");


loans.innerHTML = "<h2> Préstamos de ejemplo: </h2>" ;
fetch("../assets/save_loans.json")
    .then((response) => response.text())
    .then((result) => {
        result = JSON.parse(result);
        for(let loan in result)
        {
            let new_div = document.createElement("div");
            new_div.innerHTML =  ` <h3> Fecha: ${result[loan].date}</h3>  
                                   <p> Valor original: $ ${result[loan].original_value}</p>
                                   <p> Valor total: $ ${result[loan].total} </p>
                                   <p> Valor por cuota: $ ${result[loan].total_x_cuotes} </p>
                                   <p> Tipo de préstamo: ${result[loan].type} </p>
                                                                        `
            loans.append(new_div);
        }
        
    });
button.addEventListener("click", (e) =>
{ 
    window.location.href = '../sections/loan_info.html'; 
})