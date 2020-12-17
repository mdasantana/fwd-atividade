function selector(ev){
    return document.querySelector(ev);
};
function selectorAll(ev){
    return document.querySelectorAll(ev);
}

const btnHardSkills = selector('#btn-hard-skill');
const btnSoftSkills = selector('#btn-soft-skill');
const divHardSkill = selector('#hard-skills');
const divSoftSkill = selector('#soft-skills');

function mostrar(objeto, botaoPrincipal){

    objeto.classList.remove('ocultar-skills');
    //ficar com bg-color amarela
    botaoPrincipal.style.backgroundColor='rgba(245, 188, 0, .8)';
    botaoPrincipal.style.border='2px solid rgba(255, 255, 255, .8)';
    botaoPrincipal.style.color='rgba(255, 255, 255, .8)';

}

function ocultar(objeto, botaoSecundario){

    objeto.classList.add('ocultar-skills');
    //tirar o bg-color
    botaoSecundario.style.backgroundColor='transparent';
    botaoSecundario.style.color='rgba(245, 188, 0, .8)';
    botaoSecundario.style.border='2px solid rgba(245, 188, 0, .8)';

}

btnHardSkills.addEventListener('click', function(ev){
    mostrar(divHardSkill, btnHardSkills);
    ocultar(divSoftSkill, btnSoftSkills)
});

btnSoftSkills.addEventListener('click', function(ev){
    mostrar(divSoftSkill, btnSoftSkills);
    ocultar(divHardSkill, btnHardSkills);
});