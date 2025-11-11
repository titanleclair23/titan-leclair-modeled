// Mobile year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle mobile menu
const burger = document.querySelector('.tl-burger');
const menu = document.querySelector('.tl-menu');

if (burger) {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
}
