

let loan = JSON.parse(localStorage.getItem("loan"))
//console.log(typeof(loan.total))
if(loan != null)
{
    let result = document.getElementById("result");
    result.innerHTML = "<h2> Your loan data: </h2>" ; 
    let paragraph_1 = document.createElement("p");
    paragraph_1.innerText = "Total loan: " + loan.total;
    result.append(paragraph_1);
    let paragraph_2 = document.createElement("p");
    paragraph_2.innerHTML = "Value of each cuote: " + loan.total_x_cuotes;
    result.append(paragraph_2);
}
let button = document.getElementById("back_btn"); 

button.addEventListener("click", (e) =>
{
    let result = prompt("Estás seguro que quieres volver? Perderás tu datos del préstamo!")
    if(result != null)
    {
        if(loan !=null)
        {
            localStorage.clear();
        }
        window.location.href = "../index.html";
    }
})
