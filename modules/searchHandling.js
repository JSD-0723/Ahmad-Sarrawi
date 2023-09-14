import { cardsContainer, filterBy,searchBar,sortBy,topicsNumber } from "./UI/viewConstants.js";
import fetcher from "./fetchAPI.js";
import { renderTopics } from "./UI/render.js";
import { cardCreator } from "./UI/card.js";



function filterer(topics) {
  const value = filterBy.value;
  
  if (value == "Default") {
    return topics;
  }
  const filteredTopics = topics.filter(function (item) {
    return item.category == value;
  });
  return filteredTopics;
}


let t;
async function searchTopics() {
  clearTimeout(t);
  let delayedSearch = new Promise(function (resolve, reject) {
    let searchedTerm;
    t = setTimeout(() => {
      searchedTerm = searchBar.value;

      resolve(searchedTerm);
    }, 300);
  });
  let result = await delayedSearch;

  return fetcher(`list?phrase=${result}`);
}


async function sortTopics(topics) {
  const order = sortBy.value;

  let sortedTopics = [...topics].sort(function (a, b, value = order) {
    return a[value] < b[value] ? -1 : a[value] > b[value] ? 1 : 0;
  });
  return sortedTopics;
}


function showNumberOfTopics(data) {

    if (!data) {
       
        cardsContainer.innerHTML = '';
        topicsNumber.innerText = 'Loading Topics';
    }
   if(data) topicsNumber.innerText = `"${data.length}" Web Topics Found`;
    
}





export async function findTopics() {
    showNumberOfTopics()
  await searchTopics()
    .then((data) => filterer(data))
    .then((data) => sortTopics(data))
      .then((data) => {
        renderTopics(data, cardsContainer, cardCreator);
        showNumberOfTopics(data);
        
      });
    
    
}