




export function renderTopics(dataArray, parent, callback) {
  parent.innerHTML = "";
  dataArray.forEach((item) => parent.innerHTML+=callback(item));
}
