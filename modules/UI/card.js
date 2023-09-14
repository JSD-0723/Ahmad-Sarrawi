import { navigate } from "../navigate.js";

export function cardCreator(item, callback) {
  const card = `<a class="card" href ="details.html?id=${item.id}"> <div class="image-banner">
        <img src="./assets/images/${item.image}" alt="HTML logo" />
      </div>
      <div class="card-details">
        <span class="category-name">${item.category}</span>
        <h3>${item.topic}</h3>
        <div class="rating-container">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>
        <span class="author-name">${item.name}</span>
      </div></a>`;

  return card;
}

// const card = document.createElement("a");
// card.classList.add("card");
// card.addEventListener("click", callback.bind(this, item.id));
// card.innerHTML = `<div  class="image-banner">
//         <img src="./assets/images/${item.image}" alt="HTML logo" />
//       </div>
//       <div class="card-details">
//         <span class="category-name">${item.category}</span>
//         <h3>${item.topic}</h3>
//         <div class="rating-container">
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star"></ion-icon>
//           <ion-icon name="star-outline"></ion-icon>
//         </div>
//         <span class="author-name">${item.name}</span>
//       </div>`;
