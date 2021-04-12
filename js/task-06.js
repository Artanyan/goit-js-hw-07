const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', checkInput);

function checkInput(e) {

  const numberEvent = e.target.value.length;
  const numberRef = Number(inputRef.getAttribute('data-length'));
  
  numberEvent === numberRef
    ? (inputRef.className = 'valid')
    : (inputRef.className = 'invalid');
  if (numberEvent === 0) {
    inputRef.className = '';
  }
}