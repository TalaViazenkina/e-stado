import IMask from 'imask';

export default () => {
  const phoneInput = document.querySelector('input[type=tel]');
  if (!phoneInput) {
    return;
  }

  const phoneMask = new IMask(phoneInput, {
    mask: '+{375}(00)000-00-00',
  });
}
