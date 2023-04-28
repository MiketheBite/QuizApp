const toggleButton = document.querySelector('.toggleButton');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
});
