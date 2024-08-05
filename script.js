let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

// Animação para h1
const animateH1 = () => {
    let i = 0;
    const text = h1.textContent;
    const animationInterval = setInterval(() => {
        h1.textContent = text.substring(0, i + 1);
        i++;
        if (i > text.length) {
            clearInterval(animationInterval);
        }
    }, 50); // Ajuste a velocidade da animação
};

// Animação para h2
const animateH2 = () => {
    let i = 0;
    const text = h2.textContent;
    const animationInterval = setInterval(() => {
        h2.textContent = text.substring(0, i + 1);
        i++;
        if (i > text.length) {
            clearInterval(animationInterval);
        }
    }, 50); // Ajuste a velocidade da animação
};

// Chamar as animações
animateH1();
animateH2();

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.itens-cardapio')

elements.forEach((element) => myObserver.observe(element))