
let response;
let arrayOfCards = [];
 async function fetcher () {
    try {
        response = await fetch("https://tap-web-1.herokuapp.com/topics/list");

        let data = await response.json();
        response = await data;
        return data;

        
    } catch (error) {
        console.log(error);
    } finally {
        if (response.ok) {
        }
    }
};

function cardCreator(item) {
  return `<a class="card" href="details.html">
      <div class="image-banner">
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
      </div>
    </a>`;
}





export { fetcher, cardCreator, };
