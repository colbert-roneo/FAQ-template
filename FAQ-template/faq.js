function myFunction() {
  // Collapse all answers
  const answers = document.querySelectorAll('.collapse');
  answers.forEach((answer) => {
    answer.classList.remove('show');
  });
}

// Add event listeners to each question button
const questionButtons = document.querySelectorAll('.btn');
questionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Collapse all answers
    myFunction();
    // Show the corresponding answer
    const answerId = button.getAttribute('data-bs-target');
    const answer = document.querySelector(answerId);
    answer.classList.add('show');
  });
});