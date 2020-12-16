import { updateState, updatedContent } from './main'

let btn = document.querySelector('#btn-product');

let showProduct = (e) => {
    e.preventDefault();
    let value = e.target.getAttribute('data-product');
    console.log(value);
    updateState(`/goods?value=${value}`);
    updatedContent()
}

btn.addEventListener('click', showProduct)