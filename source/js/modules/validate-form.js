export default () => {
  const form = document.querySelector('.quiz-form form');
  if (!form) {
    return;
  }

  const phoneBlock = form.querySelector('.question__personal-data--phone');
  const emailBlock = form.querySelector('.question__personal-data--email');

  const phoneLabel = form.querySelector('.question__personal-data--phone label');
  const emailLabel = form.querySelector('.question__personal-data--email label');

  if (!phoneLabel || !emailLabel || !phoneBlock || !emailBlock) {
    return;
  }

  const phoneInput = phoneLabel.querySelector('input');
  const emailInput = emailLabel.querySelector('input');

  if (!phoneInput || !emailInput) {
    return;
  }

  const emailPattern = new RegExp('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})', 'i');
  const phoneLength = 17;

  function checkTelIsInvalid() {
    return phoneInput.value.trim().length < phoneLength;
  }

  function checkEmailIsInvalid() {
    return !emailPattern.test(emailInput.value);
  }

  function resetError(input) {
    input.addEventListener('focus', () => {
      input.parentNode.classList.remove('invalid');
    });
  }

  function onSubmitForm(evt) {
    evt.preventDefault();
    if (!phoneBlock.classList.contains('hidden')) {
      if (checkTelIsInvalid()) {
        phoneLabel.classList.add('invalid');
        return;
      }
    }
    if (!emailBlock.classList.contains('hidden')) {
      if (checkEmailIsInvalid()) {
        emailLabel.classList.add('invalid');
        return;
      }
    }
  }

  form.addEventListener('submit', onSubmitForm);
  resetError(phoneInput);
  resetError(emailInput);
};
