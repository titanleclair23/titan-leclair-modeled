// mobile nav
const toggle = document.querySelector('.nav-toggle');
const list = document.querySelector('.nav-list');
if (toggle && list){
  toggle.addEventListener('click', ()=> list.classList.toggle('show'));
}

// copyright year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
