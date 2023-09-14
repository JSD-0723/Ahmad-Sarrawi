import { getFilterOptions } from "./modules/UI/options.js";
import { filterBy,searchBar,sortBy } from "./modules/UI/viewConstants.js";
import { findTopics } from './modules/searchHandling.js';
import { navigate } from "./modules/navigate.js";




filterBy.addEventListener('change', findTopics);
sortBy.addEventListener('change', findTopics);
searchBar.addEventListener('input', findTopics);


async function init() {
    await getFilterOptions(filterBy);

    await findTopics();
}
await init();


// location.assign('index.html?id=2');
function getCurrentURL() {
  return window.location.href;
}

// Example
const url = getCurrentURL();
// console.log(url);

let params = new URLSearchParams(location.search)

const id = params.get('id');


console.log(params);








