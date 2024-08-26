document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

document.getElementById('brightness-slider').addEventListener('input', function() {
    const brightnessValue = this.value;
    document.getElementById('image').style.filter = `hue-rotate(${brightnessValue}deg)`;
    // document.getElementById('image').style.filter = `brightness(${brightnessValue}%)`;
});