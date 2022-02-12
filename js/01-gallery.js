import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divEl = document.querySelector('.js-gallery');




createGallery(galleryItems);
function createGallery(items) {
    const markup = items.map((item) =>
      
        `<div class="gallery__item">
 <a class="gallery__link"
      href="${item.original}"
       >
         <img
           class="gallery__image"
           src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
       />
      </a>
</div>`
  ).join('');
    divEl.innerHTML = markup
};

