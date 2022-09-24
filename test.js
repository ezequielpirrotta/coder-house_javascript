function getAgeMayority(age)
{
    let result;
    if(age >= 18)
    {
        result = "mayor";
    }
    else
    {
        result = "menor";
    }
    return result;
}

let input = prompt("Ingrese su edad");
let ageMayority = getAgeMayority(input);
alert("Esta persona es " + ageMayority + " de edad.");