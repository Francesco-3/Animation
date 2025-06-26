const parole = document.querySelectorAll('#testoAlternato .parole i');
let indice = 0;

const animaParole = function() {
    parole.forEach(parola => parola.classList.remove('mostra'));

    parole[indice].classList.add('mostra');
    indice = (indice + 1) % parole.length;
    setTimeout(animaParole, 2000);
}

window.onload = () => {
    setTimeout(animaParole, 500);
};