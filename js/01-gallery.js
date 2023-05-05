import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  })
  .join("");

gallery.innerHTML += markup;

gallery.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  checkOnImg(evt.target.nodeName);

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);

  instance.show();

  gallery.addEventListener("keydown", onClose);

  function onClose(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  function checkOnImg(target) {
    if (target !== "IMG") {
      return;
    }
  }
}
