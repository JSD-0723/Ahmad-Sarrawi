

export function createHeading(item) {
    return item;
}
export function createSubTopicsList(item) {
    let liElement = `<li><span>
                <ion-icon
                name="checkmark-circle-outline"
                class="sub-topics-icon"
                ></ion-icon
                >${item}</span>
              </li>`;
    console.log(liElement);
    return liElement;
}
