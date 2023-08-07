const voltarAncora = document.querySelector('.voltar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        voltarAncora.classList.add('show');
    } else {
        voltarAncora.classList.remove('show');
    }
});
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('branco');
    } else {
        nav.classList.remove('branco');
    }
});