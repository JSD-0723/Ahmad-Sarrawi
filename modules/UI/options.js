
import fetcher from "../fetchAPI.js";


export function options(item) {
    const option = document.createElement("option");
    option.text = item;
    option.value = item;
    return option;
}


export async function getFilterOptions(parent) {
  let categories = new Set();
  await fetcher(`list`).then((data) =>
    data.forEach((item) => {
      categories.add(item.category);
    })
  );

  categories.forEach((item) => {
      parent.appendChild(options(item));
  });

}