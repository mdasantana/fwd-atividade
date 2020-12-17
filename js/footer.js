function selector(ev){
    return document.querySelector(ev)
};

var camposOk;
const nome = selector('#nome');
const assunto = selector('#assunto');
const email = selector('#email');
const mensagem = selector('#mensagem');
const btnFormulario = selector('#btn-contato');
const formularioContato = selector('.form');

function validarVazio(campo){
    if(campo.value.trim() == ""){
        camposOk = false;
        campo.style.border="1px solid red";
        campo.style.backgroundColor="rgba(255,115,114,.3)";
    }else{
        camposOk = true;
        campo.style="none";
    } 
};


/* VALIDANDO INFORMAÇÕES */
nome.addEventListener('keyup', function(ev){
    validarVazio(nome);
});
assunto.addEventListener('keyup', function(ev){
    validarVazio(assunto);
});
email.addEventListener('keyup', function(ev){
    validarVazio(email);
});
mensagem.addEventListener('keyup', function(ev){
    validarVazio(mensagem);
});
/* VALIDANDO INFORMAÇÕES */

formularioContato.addEventListener("submit",function(event){

    switch (camposOk) {
        case true:
            alert("Agradeço o contato, "+nome.value+". Assim que analisar, retorno o contato");
            break;
        default:
            event.preventDefault();
        alert("Todos os campos devem ser preenchidos!");
            break;
    }
});
