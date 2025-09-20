document.addEventListener('DOMContentLoaded', () => {
  // Rok v pätičke
  document.getElementById('year').textContent = new Date().getFullYear();

  // prvky
  const helloBtn = document.getElementById('hello-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const form = document.getElementById('contact-form');

  // reakcia na kliknutie
  helloBtn.addEventListener('click', () => {
    alert('Ahoj! Klikol si na tlačidlo.');
  });

  // prepínač témy
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // odoslanie formulára
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    alert(`Ďakujeme, ${name || 'návštevník'}!`);
  });
});

