const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', checkInput);

function checkInput(e) {

  const numberEvent = e.target.value.length;
  const numberEl = Number(inputEl.getAttribute('data-length'));
  
  numberEvent === numberEl
    ? (inputEl.className = 'valid')
    : (inputEl.className = 'invalid');
  if (numberEvent === 0) {
    inputEl.className = '';
  }
}