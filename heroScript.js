document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const images = [
        'images/hero1.jpg',
        'images/hero2.jpg',
        'images/hero3.jpg'
    ];

    let currentIndex = 0;
    let nextIndex = 1;

    // Crea due elementi di sfondo
    const bgImage1 = document.createElement('div');
    const bgImage2 = document.createElement('div');
    bgImage1.classList.add('background-image', 'active');
    bgImage2.classList.add('background-image');
    bgImage1.style.backgroundImage = `url('${images[currentIndex]}')`;
    bgImage2.style.backgroundImage = `url('${images[nextIndex]}')`;
    heroSection.appendChild(bgImage1);
    heroSection.appendChild(bgImage2);

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        nextIndex = (currentIndex + 1) % images.length;

        if (bgImage1.classList.contains('active')) {
            bgImage2.style.backgroundImage = `url('${images[nextIndex]}')`;
            bgImage2.classList.add('active');
            bgImage1.classList.remove('active');
        } else {
            bgImage1.style.backgroundImage = `url('${images[nextIndex]}')`;
            bgImage1.classList.add('active');
            bgImage2.classList.remove('active');
        }
    }

    // Cambia l'immagine ogni 5 secondi
    setInterval(changeBackgroundImage, 9000);
});