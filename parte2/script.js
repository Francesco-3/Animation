const parole = document.querySelectorAll('#testoAlternato .parole i');
let indice = 0;

function animaParole() {
    // Nasconde tutte le parole
    parole.forEach(parola => parola.classList.remove('mostra'));

    // Mostra la parola corrente
    parole[indice].classList.add('mostra');

    // Passa alla parola successiva
    indice = (indice + 1) % parole.length;

    // Dopo 2 secondi esegue il ciclo successivo
    setTimeout(animaParole, 2000);
}

// Avvia l'animazione dopo il caricamento
window.onload = () => {
    setTimeout(animaParole, 500);
};