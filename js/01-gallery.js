import { galleryItems } from './gallery-items.js';
// Change code below this line

const divEl = document.querySelector('.gallery');


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
    divEl.insertAdjacentHTML('beforeend', markup);
};

divEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  if (event.target.tagName !== 'IMG') {
    return;
  }
  event.preventDefault();

  modalShow(event.target.dataset.source);
}

function modalShow(src) {
  const  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`
  );
  instance.show();
}

