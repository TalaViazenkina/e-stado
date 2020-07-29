export default () => {
  const labelList = document.querySelectorAll('label');
  if (!labelList.length) {
    return;
  }

  function passFocus(item) {
    const input = item.querySelector('input');

    if (input) {
      input.addEventListener('focus', () => item.classList.add('focused'));
      input.addEventListener('blur', () => item.classList.remove('focused'));
    }
  }

  labelList.forEach((label) => passFocus(label));

}
