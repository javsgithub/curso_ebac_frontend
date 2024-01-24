let form = document.getElementById("form-validar");

function validaCampo (valorA, valorB){
    diferenca = valorB - valorA;
    return diferenca > 0;
}


form.addEventListener("submit", function (e){
    e.preventDefault();

    let valorA = document.getElementById("valor-a");
    let valorB = document.getElementById("valor-b");

    let diferenca = validaCampo (valorA.value, valorB.value)
    
    if(diferenca){
        alert ("Formulário validado com sucesso!!");
        valorA.value = " ";
        valorB.value = " ";    
    } else {
        alert ("Ops! Algo deu errado!! Tente novamente!");
        valorA.value = " ";
        valorB.value = " ";
    }
})