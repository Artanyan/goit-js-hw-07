const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const element = document.querySelector('#ingredients');

const product = ingredient => {
  
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
};

const elements = ingredients.map(product);
    element.append(...elements);
    
    console.log(element);
