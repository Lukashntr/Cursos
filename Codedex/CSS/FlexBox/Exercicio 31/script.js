document.querySelectorAll('.card-flip').forEach(carta => {
  carta.addEventListener('click', () => {
    carta.classList.toggle('virada'); // precisa bater com o CSS
  });
});
