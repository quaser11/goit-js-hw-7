import { galleryItems } from "./gallery-items.js";
// Change code below this line
const imagesList = document.querySelector(".gallery");

imagesList.addEventListener("click", getLargeImageUrl);
function makeImgMarkup(obj) {
  return obj
    .map((image) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        loading="lazy"
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt=${image.description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

function appendImages(list) {
  return (list.innerHTML = makeImgMarkup(galleryItems));
}
appendImages(imagesList);

function getLargeImageUrl(e) {
  e.preventDefault();

  checkOnImg(e);

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}">
`);

  instance.show();

  document.body.addEventListener("keydown", onClose, { once: true });

  function onClose(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }

  function checkOnImg(e) {
    if (e.target.nodeName != "IMG") {
      return;
    }
  }
}
