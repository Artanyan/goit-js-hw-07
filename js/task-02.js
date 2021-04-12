const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const productElement = document.querySelector('#ingredients');

const product = ingredient => {
  
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
};

const elements = ingredients.map(product);
productElement.append(...elements);
    
    console.log(productElement);
