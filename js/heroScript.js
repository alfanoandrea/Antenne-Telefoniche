document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const gifUrl = 'images/hero.gif'; // Percorso della tua GIF

    // Crea un elemento di sfondo
    const bgImage = document.createElement('div');
    bgImage.classList.add('background-image', 'active');
    bgImage.style.backgroundImage = `url('${gifUrl}')`;
    bgImage.style.backgroundSize = 'cover'; // Assicura che la GIF copra l'intera sezione
    bgImage.style.backgroundPosition = 'center'; // Centra la GIF
    heroSection.appendChild(bgImage);
});