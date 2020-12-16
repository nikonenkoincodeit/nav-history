import { updateState, updatedContent } from './main'

const listCategories = document.querySelector('.list-categories');

const searchCategories = (e) => {
    const elem = e.target;
    if (!elem.classList.contains("category")) return
    e.preventDefault();
    let value = elem.getAttribute('data-category');
    updateState(`/category?value=${value}`);
    updatedContent()
}

listCategories.addEventListener('click', searchCategories)