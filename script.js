

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


  console.log(location);
  
   const params = new URLSearchParams(window.location.search);
console.log(params.has('id'));
   console.log(params.get("id"));


 