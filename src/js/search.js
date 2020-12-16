import { updateState, updatedContent } from './main'

let search = document.querySelector('#search');
let btn = document.querySelector('#btn');

let searchProduct = (e) => {
    e.preventDefault();
    let value = search.value;
    if (!value) return
    updateState(`/search?value=${value}`);
    updatedContent()
}

btn.addEventListener('click', searchProduct)


