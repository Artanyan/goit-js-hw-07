const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

rangeEl.addEventListener('input', handleInputRange);

function handleInputRange(e) {
  
  console.log((textEl.style.fontSize = e.currentTarget.value + 'px'));
}
