const slides1 = document.querySelectorAll('#carrossel-item-1');
const slides2 = document.querySelectorAll('#carrossel-item-2');
const slides3 = document.querySelectorAll('#carrossel-item-3');

const btnProximo1 = document.querySelector('#carrossel-button-proximo1');
const btnAnterior1 = document.querySelector('#carrossel-button-anterior1');
const btnProximo2 = document.querySelector('#carrossel-button-proximo2');
const btnAnterior2 = document.querySelector('#carrossel-button-anterior2');
const btnProximo3 = document.querySelector('#carrossel-button-proximo3');
const btnAnterior3 = document.querySelector('#carrossel-button-anterior3');

let indexSlideProx = 0;
let indexSlideAnt = 2;

function proximo(botao, indexSlide, objeto, tamArray){

    botao.addEventListener('click', function(ev){
        indexSlide++;
        objeto.forEach(slide => {
            slide.classList.remove('carrossel-item-visivel');
        });
        if(indexSlide>tamArray){
            indexSlide = 0;
            objeto[indexSlide].classList.add('carrossel-item-visivel');
        }else{
            objeto[indexSlide].classList.add('carrossel-item-visivel');
        }
    });

}
function anterior(botao, indexSlide, objeto, tamArray){
    botao.addEventListener('click', function(ev){
        indexSlide--;
        objeto.forEach(slide => {
            slide.classList.remove('carrossel-item-visivel');
        });
        if(indexSlide<tamArray){
            indexSlide = 2;
            objeto[indexSlide].classList.add('carrossel-item-visivel');
        }else{
            objeto[indexSlide].classList.add('carrossel-item-visivel');
        }
    })
}
proximo(btnProximo1, indexSlideProx, slides1, 4);
anterior(btnAnterior1, indexSlideAnt, slides1, 0);
proximo(btnProximo2, indexSlideProx, slides2, 4);
anterior(btnAnterior2, indexSlideAnt, slides2, 0);
proximo(btnProximo3, indexSlideProx, slides3, 4);
anterior(btnAnterior3, indexSlideAnt, slides3, 0);