const titleEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', inputUser);

function inputUser(event) {
  if (event.target.value) {
    console.log(event.target.value);
    
    return (titleEl.textContent = event.target.value);
  }
  return (titleEl.textContent = 'незнакомец');
}

