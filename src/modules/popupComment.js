 async function popupComment(id) {
    const response = await fetch('https://api.tvmaze.com/search/shows?i=:');
      const data = await response.json();

      const firstSection = document.querySelector("header");
const tvShow = document.createElement('div');
tvShow.className = 'popupShow';

const closeIcon = document.createElement("a");
  closeIcon.className = "show-popup-close-icon fa fa-times";
  tvShow.appendChild(closeIcon);

  const div = document.createElement("div");
  div.className = "popupShow-img-container";
  meal.appendChild(div);

  const img = document.createElement("img");
  img.src = `${data[0].show}`;
  div.appendChild(img);

  firstSection.appendChild(tvShow);
}
export default popupComment;