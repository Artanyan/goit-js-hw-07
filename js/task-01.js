const categoryEl = document.querySelector ('ul#categories');

    console.log(`В списке ${categoryEl.children.length} категории.`);

categoryEl.querySelectorAll('.item').forEach(element => {
    console.log(`Категория: ${element.querySelector('h2').textContent}
    Количество элементов:${element.querySelector('ul').children.length}`);
});