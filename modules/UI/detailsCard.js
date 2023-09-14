



export function createDetailsCard(topic) {
    
const detailsCard = `<div class="details-card" id="detailsCard">
              <div class="details-image-banner">
                <img src="assets/images/${topic.image}" />
              </div>
              <div class="details-card-info">
                <span class="details-card-title ">
                  <span  class="dotted-text" >${topic.topic}</span> <span id="by-span" class="dotted-text">by</span>
                  <span  id="details-card-author">${topic.name}</span>
                </span>
                <div class="add-favourite-box">
                  <p>Interested about this topic?</p>
                  <button>
                    Add to Favourites <ion-icon name="heart-outline"></ion-icon>
                  </button>
                  <span>Unlimited Credits</span>
                </div>
              </div>
            </div>`;


    return detailsCard
}