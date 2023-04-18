import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const imagesToPaste = galleryItems.map(item => {
    const { preview, original, description } = item;

  return  `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
      
}
)
galleryRef.insertAdjacentHTML("beforeend", imagesToPaste.join(''))

