import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('form');
const loader = document.querySelector('.loader');

function getImages() {
    const key = '42692774-4141696abcbee76e8cc433895';
    const BASE_URL = 'https://pixabay.com/api/';
    const q = form.input.value;
    const image_type = 'photo';
    const orientation = 'horizontal';
    const safesearch = 'true';
    const per_page = 42;
    const LINK = `${BASE_URL}?key=${key}&q=${q}&per_page=${per_page}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`;
    return fetch(LINK)
        .then(response => {
            if (!response.ok) {
            throw new Error('Image error!')
            }
            return response.json()
        })
        .catch(error => {
            alert('Error while fetching images from pixabay!')
        })  
        .then(data => {
            const images = data.hits;
            if (images.length === 0) {
                iziToast.show({
                    transitionIn: 'fadeInLeft',
                    transitionOut: 'fadeOutRight',
                    position: 'topRight',
                    messageColor: 'white',
                    backgroundColor: 'rgba(255, 110, 110, 1)',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                })
            };
            gallery.innerHTML = images.map(({ webformatURL, tags, largeImageURL, likes, views, comments, downloads }) => {
                return `<li class = "gallery-item">
                    <a class="gallery-link" href=${largeImageURL}> 
                        <img
                        src="${webformatURL}" 
                        class="gallery-image"
                        alt="${tags}"
                        />
                    </a>
                    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${likes}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${views}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${comments}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${downloads}</span>
                        </div>
                    </div>
                    
                </li>`
            }).join("");
             loader.classList.add("isInvisible");
        })
  
};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.input.value !== "") {
        getImages();
        loader.classList.remove("isInvisible");
        const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });
        lightbox.refresh();
    } else if (form.input.value === "") {
        loader.classList.add("isInvisible");
        alert("Fill out the search input!");
    };
});




// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const gallery = document.querySelector(".gallery");
// const form = document.querySelector(".form");


// const key = '42692774-4141696abcbee76e8cc433895';
// const BASE_URL = 'https://pixabay.com/api/';
// const q = form.input.value;
// const image_type = 'photo';
// const orientation = 'horizontal';
// const safesearch = 'true';
// const per_page = 40;

// function getImages() {
    
//     return fetch(`${BASE_URL}?key=${key}&q=${q}&per_page=${per_page}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`)
//     .then(response => {
//             if (!response.ok) {
//             throw new Error('Image error!')
//             }
//             return response.json()
//         })
//         .catch(error => {
//             alert('Error while fetching images from pixabay!')
//         }) 
// } 

// getImages().then(data => {
//     const images = data.hits;
//     if (images.length === 0) {
//         iziToast.show({
//             transitionIn: 'fadeInLeft',
//             transitionOut: 'fadeOutRight',
//             position: 'topRight',
//             messageColor: 'white',
//             backgroundColor: 'rgba(255, 110, 110, 1)',
//             message: 'Sorry, there are no images matching your search query. Please try again!'
//         })
//     };

//     gallery.innerHTML= images.map(({ webformatURL, tags, largeImageURL, likes, views, comments, downloads }) => {
//             return `<li class = "gallery-item">
//                     <a class="gallery-link" href=${largeImageURL}> 
//                         <img
//                         src="${webformatURL}" 
//                         class="gallery-image"
//                         alt="${tags}"
//                         />
//                     </a>
//                     <label>Likes</label>
//                         <p>${likes}</p>
//                     <label>Views</label>
//                         <p>${views}</p>
//                     <label>Comments</label>
//                         <p>${comments}</p>
//                     <label>Downloads</label>
//                         <p>${downloads}</p>
//                 </li>`
//         }).join("")
// });

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     getImages();   
    
// })
// const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt' });