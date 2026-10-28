document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navigation = document.getElementById('navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
      menuToggle.textContent = isOpen ? '×' : '☰';
    });

    navigation.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navigation.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú');
        menuToggle.textContent = '☰';
      });
    });
  }

  const vehicleSelect = document.getElementById('vehiculo');
  document.querySelectorAll('.vehicle-link').forEach(link => {
    link.addEventListener('click', () => {
      if (vehicleSelect) vehicleSelect.value = link.dataset.model;
    });
  });

  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (form && formMessage) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = document.getElementById('nombre').value.trim();
      const character = vehicleSelect.value;
      formMessage.textContent = `¡Gracias, ${name}! Recibimos tu interés por ${character}. Esta es una confirmación de demostración; no se enviaron datos.`;
      form.reset();
    });
  }

  const year = document.getElementById('currentYear');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
