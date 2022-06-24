'use strict';
const label_clock = document.querySelector('.clock');
setInterval(() => {
  const day = new Date();
  const option = {
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
  };

  const country = navigator.language;

  label_clock.textContent = new Intl.DateTimeFormat(country, option).format(day);
}, 1000);

label_clock.style.color = '#fff';
