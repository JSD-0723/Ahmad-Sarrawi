


export function createDetailsInfo(item) {
    
    const detailsInfo = `
          <h2>${item.category}</h2>
          <h1>${item.topic}</h1>
          <div class="rating-container">
            <ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon
            ><ion-icon name="star"></ion-icon
              ><ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </div>
            <p>
              ${item.description}
            </p>
          `;

return detailsInfo

}