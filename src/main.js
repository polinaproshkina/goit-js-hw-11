import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImages from './js/pixabay-api';
import galleryMarkUp from './js/render-functions';

export const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });

const searchform = document.querySelector(".form");
const loader = document.querySelector(".loader");
export const gallery = document.querySelector(".gallery");

let currentPage;
let searchQuery;

searchform.addEventListener('submit', async (event) => {
    try {
        loader.classList.remove("isInvisible");
        event.preventDefault();
        gallery.innerHTML = "";
        const query = (event.target.elements.query.value).split(" ");
        searchQuery = query.join("+");
        currentPage = 1;

        if (searchQuery == "") {
            alert("Fill out the search input!");
            loader.classList.add("isInvisible");
        }
        const images = await getImages(searchQuery, currentPage);
        if (searchQuery != "") {
    
            galleryMarkUp(images.hits);
            loader.classList.add("isInvisible");

        }
        if (images.hits == "") {
            iziToast.show({
                transitionIn: 'fadeInLeft',
                transitionOut: 'fadeOutRight',
                position: 'topRight',
                messageColor: 'white',
                backgroundColor: 'rgba(255, 110, 110, 1)',
                message: 'Sorry, there are no images matching your search query. Please try again!'
            })
        }  

    }  catch (error) {
        console.log(error);
  }
});




