const toggleButton = document.querySelector('.toggleButton');
const body = document.querySelector('body');

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
});

function toggleAnswer() {
  const button = document.getElementById("answer-button");
  const answer = document.getElementById("answer");
  if (answer.classList.contains("card__answer-hidden")) {
    answer.classList.remove("card__answer-hidden");
    button.innerHTML = "Hide Answer";
  } else {
    answer.classList.add("card__answer-hidden");
    button.innerHTML = "Show Answer";
  }
}