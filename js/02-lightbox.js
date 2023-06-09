import { galleryItems } from './gallery-items.js';


// Change code below this line

console.log(galleryItems);
const galItem = document.querySelector('ul.gallery');

function createGallery(items) {
  return items.map(
    item =>	`<li class="gallery__item">
	   <a class="gallery__link" href="${item.original}">
			<img 
			class="gallery__image"
			src="${item.preview}" 
			data-source="${item.original}"
			alt="${item.description}">
		</a>
	</li>`
  ).join("");
}
const addMarkup = createGallery(galleryItems)
galItem.innerHTML = addMarkup;

		let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'  });