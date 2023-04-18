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

galleryRef.addEventListener('click', hendleClickOnImage);

const bigImg = basicLightbox.create(`
   <img
          class="gallery__image"
          src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg"
          data-source=""
          alt="test"
        />
`);
function hendleClickOnImage(event) {
    event.preventDefault();
    if (!event.target.nodeName === 'IMG') return;

    const bigImg = basicLightbox.create(`
        <img
          src="${event.target.dataset.source}"
          alt="${event.target.alt}"
        />
`);
    bigImg.show();

}
