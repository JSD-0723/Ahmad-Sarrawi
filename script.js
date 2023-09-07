const favoritesBar = document.querySelector(".favorites-bottom-section");

document
  .querySelector(".show-favorites-button")
  .addEventListener("click", () => favoritesBar.classList.toggle("invisible"));

const root = document.querySelector(":root");

const lightColors = ["#ffffff", "#f0f9ff", "#dddddd", "#333333"];
const darkColors = ["#1a1a1a", "#282828", "#000000", "#ededed"];

const rootProperties = [
  "--bg_default",
  "--bg_body",
  "--lines-color",
  "--body-text",
];

function toggleDarkMode() {
  const rootStyles = getComputedStyle(root);
  let colors = [];
  rootStyles.getPropertyValue("--bg_default") === "#ffffff"
    ? (colors = darkColors)
    : (colors = lightColors);
  for (i = 0; i < colors.length; i++) {
    root.style.setProperty(rootProperties[i], colors[i]);
    console.log(rootStyles.getPropertyValue(rootProperties[i]));
  }
}

document
  .querySelector(".dark-mode-button")
  .addEventListener("click", toggleDarkMode);


const cardsContainer = document.getElementById("cardsContainer");
const searchBar = document.getElementById("inputBar");
import { fetcher, cardCreator } from "./functions.js";

const filterBy = document.getElementById("filter");

cardsContainer.innerHTML = "Loading Web Topics";
let topicsToShow = [];
let allTopics = [];
let sortedTopics = [];
let filteredTopics = [];
let searchedTopics = [];
window.addEventListener("load", async function () {
  let data = await fetcher();

  if (data) {
    //filling the filter options//
    const categories = new Set();
    for (let item of data) {
      categories.add(item.category);
    }
    for (let item of categories) {
      let option = document.createElement("option");
      option.text = item;
      option.value = item;
      filterBy.add(option);
    }

    cardsContainer.innerHTML = "";
    allTopics = [...data];
    topicsToShow = [...data];

    for (let item of allTopics) {
      cardsContainer.innerHTML += cardCreator(item);
    }
  }
});
// let searchedTerm = "";

searchBar.addEventListener("input", finder);

// searchBar.addEventListener("input", async function (e) {
//   clearTimeout(t);
//   t = setTimeout(() => {
//     searchedTerm = "";
//     searchedTerm = e.target.value;
//     finder()
//     console.log(searchedTerm);
//   }, 1000);
// });

filterBy.addEventListener("change", filterer);
function filterer() {
  const value = filterBy.value;
  if (value == "Default") return topicsToShow;
   const filteredTopics = allTopics.filter(function (item) {
     return item.category == value;
     
   });
  // topicsToShow = filteredTopics;
  cardsContainer.innerHTML = '';
  filteredTopics.forEach(item => {
    cardsContainer.innerHTML += cardCreator(item);
  })
  console.log(value);
  console.log(topicsToShow);
}

// function searcher(value,array) {
//   if (!value.trim()) return array;
//   const searchResult = array.filter(function (item) {
//     if ((item.name + '' + item.topic + ' ' + item.category).includes(value)) {
//       return item;
//   }
//   })
//   return searchResult;
// }

let t;
async function searcher() {
  clearTimeout(t);
  let delayedSearch = new Promise(function (resolve, reject) {
    let searchedTerm;
    t = setTimeout(() => {
      searchedTerm = searchBar.value;
      // console.log(searchedTerm);
       
      resolve(searchedTerm);
    }, 1000);
  
  });
  let result = await delayedSearch;
  
  const searchedTopics = allTopics.filter((item) =>
    (item.name + " " + item.topic + " " + item.category)
      .toLowerCase()
      .includes(result)
  );
  console.log(topicsToShow);
  cardsContainer.innerHTML = '';
  searchedTopics.forEach((item) => {
    cardsContainer.innerHTML += cardCreator(item);
  });
}

// return searchedTerm

async function finder() {
  const searchedTerms = await searcher();
  // console.log(searchedTerms);
}

const str = "i w";
const sub = "i w  ";
// console.log(str.includes(sub));

// console.log(topicsToShow);