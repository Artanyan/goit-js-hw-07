const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;
console.log (counterValue);

const  decrement = () => { 
    counterValue -= 1;
    valueEl.textContent = counterValue;
    console.log(valueEl.textContent);
};

const  increment = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
    console.log(valueEl.textContent);
};


decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);



