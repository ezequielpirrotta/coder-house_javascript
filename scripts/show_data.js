function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
}

let loan = JSON.parse(localStorage.getItem("loan"))

if(loan != null)
{
    let result = document.getElementById("result");
    result.innerHTML = "<h2> Información de tu préstamo: </h2>" ; 
    let paragraph_1 = document.createElement("p");
    paragraph_1.innerText = "Total de préstamo: $" + numberWithCommas(loan.total);
    result.append(paragraph_1);
    let paragraph_2 = document.createElement("p");
    paragraph_2.innerHTML = "Valor de cada cuota: $" + numberWithCommas(loan.total_x_cuotes);
    result.append(paragraph_2);
}
let button = document.getElementById("back_btn"); 


button.addEventListener("click", (e) =>
{
    e.preventDefault();
    Swal.fire({
        title: 'Atención!',
        text: 'Estás seguro que quieres volver? Perderás tus datos del préstamo!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
    }).then((result) => {
        localStorage.clear();
        window.location.href = "../sections/loan_info.html";
    });

})
