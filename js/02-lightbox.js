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
          alt="${description}"
          loading="lazy"
        />
      </a>
    </li>`
      
}
)
galleryRef.insertAdjacentHTML("beforeend", imagesToPaste.join(''))
const option = {
  captionsData: 'alt',
captionDelay: 250,
}

const bigImg = new SimpleLightbox('.gallery a', option);


