import{S as f,i as g}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function m(r,t){return fetch(`https://pixabay.com/api/?key=42692774-4141696abcbee76e8cc433895&q=${r}&page=${t}&per_page=15&image_type=photo&orientation=horizontal&safesearch=true`).then(n=>{if(!n.ok)throw new Error("Image error!");return n.json()}).catch(n=>{alert("Error while fetching images from pixabay!")})}function y(r){const t=r.map(({webformatURL:a,tags:o,largeImageURL:e,likes:s,views:i,comments:u,downloads:n})=>`<li class = "gallery-item">
                    <a class="gallery-link" href=${e}>
                        <img
                        src="${a}"
                        class="gallery-image"
                        alt="${o}"
                        />
                    </a>
                    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${s}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${i}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${u}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${n}</span>
                        </div>
                    </div>
                    
                </li>`).join("");d.insertAdjacentHTML("beforeend",t),h.refresh()}const h=new f(".gallery a",{captionsData:"alt"}),b=document.querySelector(".form"),c=document.querySelector(".loader"),d=document.querySelector(".gallery");let p,l;b.addEventListener("submit",async r=>{try{c.classList.remove("isInvisible"),r.preventDefault(),d.innerHTML="",l=r.target.elements.query.value.split(" ").join("+"),p=1,l==""&&(alert("Fill out the search input!"),c.classList.add("isInvisible"));const a=await m(l,p);l!=""&&(y(a.hits),c.classList.add("isInvisible")),a.hits==""&&g.show({transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(255, 110, 110, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}catch(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map
