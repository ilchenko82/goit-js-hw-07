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
galItem.addEventListener('click', imageClick)


function imageClick(evt){
	stopDefaultAction(evt);

	if(evt.target.nodeName !== "IMG") {
		return
	}

const newSample = basicLightbox.create(`
			<img width="800" height="600" src="${evt.target.dataset.source}">
		`);
		newSample.show();
	
		galItem.addEventListener('keydown', (evt)=> 
		{ if (evt.code === "Escape") {
		newSample.close()
			}
		}
		)}
	
		function stopDefaultAction(evt) {
			evt.preventDefault();
		};



