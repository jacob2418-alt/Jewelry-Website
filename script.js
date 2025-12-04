document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.dataset.open = String(!expanded);
    });
  }

  // Contact form validation
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMessage');
  if (form && formMsg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        formMsg.textContent = 'Please fill out all fields before submitting.';
        formMsg.classList.remove('visually-hidden');
        formMsg.style.color = 'red';
      } else {
        formMsg.textContent = 'Thank you! Your message has been sent (demo).';
        formMsg.classList.remove('visually-hidden');
        formMsg.style.color = 'green';
        form.reset();
      }
    });
  }

  // Services: dynamic gallery
  const addBtn = document.getElementById('addImageBtn');
  const gallery = document.querySelector('.gallery-container');
  if (addBtn && gallery) {
    const queue = [
      ['https://via.placeholder.com/150x150?text=Earrings', 'Earrings'],
      ['https://via.placeholder.com/150x150?text=Ring+2', 'Ring 2'],
      ['https://via.placeholder.com/150x150?text=Necklace+2', 'Necklace 2']
    ];
    addBtn.addEventListener('click', () => {
      const next = queue.shift();
      if (!next) {
        addBtn.disabled = true;
        addBtn.textContent = 'All images added';
        return;
      }
      const [src, alt] = next;
      const img = document.createElement('img');
      img.src = src; img.alt = alt; img.width = 150; img.height = 150;
      gallery.appendChild(img);
    });
  }

  // FAQ accordion
  document.querySelectorAll('.accordion').forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const panel = document.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.hidden = !panel.hidden;
    });
  });
});
