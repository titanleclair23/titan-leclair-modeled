// Mobile year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple accordion
document.querySelectorAll('.acc-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});
