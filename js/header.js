// Criando a Função do Menu Hamburguer //
const navSlide = function(ev) {
    const menuBurger = document.querySelector('.menu-burger'); // Pegando as 3 divs do menu Hamburguer
    const nav = document.querySelector('.nav-links'); // Pegando todos os links do menu
    const navLinks = document.querySelectorAll('.nav-links li') // Pegando a lista de links numa array
    menuBurger.addEventListener('click',function(ev){ // Adicionando Evendo de Click ao icone do menu

        nav.classList.toggle('nav-ativa')
        navLinks.forEach((link,index) => { // Fazendo um loop para pegar cada link do nav e passando para link
            index = navLinks.length; // Atribuindo a variavel index o tamanho da array navLinks
            if (link.style.animation){ // Se tiver a propriedade
                link.style.animation = ''; // Zera
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/8}s`; // Adiciona
            }
        });
        menuBurger.classList.toggle('rotacao'); // Adiciona a classe rotação para que qnd o click seja feito, as barras virem x
    });
}
// Finalizando e Executando a Função do Menu Hamburguer //
navSlide();