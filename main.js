$(document).ready(function(){
    $("#cep").mask("00000-000")
    $("#telefone").mask("(00)00000-0000")
    $("#cpf").mask("000.000.000-00")

    $("form").submit(function(acontecimento){
        if($(this)[0].checkValidity()){
            alert("Formulário enviado com Alegria!")
        } else{
            acontecimento.preventDefault();
        }
    })
})