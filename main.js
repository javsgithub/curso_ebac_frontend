$("document").ready(function() {
    
    $("form").on("submit", function(e){
        e.preventDefault();
        insereTarefa();
        limpaCampo();
    })

    function insereTarefa() {
        let nomeDaTarefa = $("input").val();
        const novaLinha = `<li>${nomeDaTarefa}</li>`;
        $(novaLinha).appendTo("ul");
    }
    
    function limpaCampo() {
        nomeDaTarefa = $("input").val(" ");
    }

    $("ul").on("click", "li", function() {
        $(this).toggleClass("feito");
    })    
    
    })


