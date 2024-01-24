let form = document.getElementById("form-validar");

function validaCampo (valorA, valorB){
    let diferenca = valorB - valorA;
    return diferenca > 0;
}


form.addEventListener("submit", function (e){
    e.preventDefault();

    let formEvalido = false;
    let valorA = document.getElementById("valor-a");
    let valorB = document.getElementById("valor-b");

    formEvalido = validaCampo (valorA.value, valorB.value)
    
    if(formEvalido){
        alert ("Formulário validado com sucesso!!");
        valorA.value = " ";
        valorB.value = " ";    
    } else {
        alert ("Ops! Algo deu errado!! Tente novamente!");
        valorA.value = " ";
        valorB.value = " ";
    }
})