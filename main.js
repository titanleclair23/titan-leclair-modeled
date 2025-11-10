// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple mobile nav toggle (if you want to expand later)
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) toggle.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
