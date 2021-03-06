export default () => {
  const form = document.querySelector('.quiz-form form');
  if (!form) {
    return;
  }

  const questionList = form.querySelectorAll('.question');
  const stepList = form.querySelectorAll('.quiz-form__progress-step');
  if (!questionList.length) {
    return;
  }

  let currentQuestion;

  function resetQuiz() {
    if (currentQuestion) {
      currentQuestion.classList.add('hidden');
    }
    currentQuestion = questionList[0];
    currentQuestion.classList.remove('hidden');
    stepList.forEach((step) => step.classList.remove('quiz-form__progress-step--done'));
    stepList[0].classList.add('quiz-form__progress-step--done');
  }

  function changeDisabled(button, inputList) {
    if (inputList.length) {
      inputList.forEach(function(input) {
        if (input.checked) {
          button.disabled = false;
        }
        input.addEventListener('input', () => {
          if (input.value) {
            button.disabled = false;
          }
        });

      });
    }
  }

  function toggleQuestion(i) {
    currentQuestion.classList.add('hidden');
    currentQuestion = questionList[i + 1];
    currentQuestion.classList.remove('hidden');

    if (stepList[i + 1]) {
      stepList[i + 1].classList.add('quiz-form__progress-step--done');
    }
  }

  function toggleContactData(item, submitButton) {
    const inputRadioList = item.querySelectorAll('.question__answer-list input');
    const phoneBlock = item.querySelector('.question__personal-data--phone');
    const emailBlock = item.querySelector('.question__personal-data--email');
    if (!inputRadioList.length || !phoneBlock || !emailBlock) {
      return;
    }

    const phoneInput = phoneBlock.querySelector('input');
    const emailInput = emailBlock.querySelector('input');

    inputRadioList.forEach((input) => input.addEventListener('change', function() {
      if (input.checked) {
        if (input.value === 'email') {
          phoneBlock.classList.add('hidden');
          if (phoneInput.value) {
            phoneInput.value = null;
            phoneInput.parentNode.classList.remove('invalid');
            submitButton.disabled = true;
          }
          emailBlock.classList.remove('hidden');
        } else {
          emailBlock.classList.add('hidden');
          if (emailInput.value) {
            emailInput.value = null;
            emailInput.parentNode.classList.remove('invalid');
            submitButton.disabled = true;
          }
          phoneBlock.classList.remove('hidden');
        }
      }
    }));
  }

  questionList.forEach((item, i) => {
    if (i !== questionList.length - 1) {
      const button = item.querySelector('button');
      const inputList = item.querySelectorAll('input');
      changeDisabled(button, inputList);
      button.addEventListener('click', () => toggleQuestion(i));
    } else {
      const submitButton = item.querySelector('button[type=submit]');
      const inputTextList = item.querySelectorAll('.question__personal-data input');
      changeDisabled(submitButton, inputTextList);

      toggleContactData(item, submitButton);

    }
  });

  form.reset();
  resetQuiz();
}
