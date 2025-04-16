// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

galleryListEl.insertAdjacentHTML('beforeend', markupImages(galleryItems));

function markupImages (arr) {
    return arr.map(({preview, original, description}) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`).join('');
}

new SimpleLightbox('.gallery a', 
    { 
        captionDelay: 250,
        animationSpeed: 250,
        captionsData: 'alt',
    });
