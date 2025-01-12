document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const gifUrl = 'images/hero.gif';
    const bgImage = document.createElement('div');
    bgImage.classList.add('background-image', 'active');
    bgImage.style.backgroundImage = `url('${gifUrl}')`;
    bgImage.style.backgroundSize = 'cover';
    bgImage.style.backgroundPosition = 'center';
    heroSection.appendChild(bgImage);
});