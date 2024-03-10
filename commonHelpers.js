import{S as v,i as L}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const $=document.querySelector(".gallery"),o=document.querySelector("form"),c=document.querySelector(".loader");function w(){const r="42692774-4141696abcbee76e8cc433895",t="https://pixabay.com/api/",n=o.input.value,u=`${t}?key=${r}&q=${n}&per_page=42&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(u).then(a=>{if(!a.ok)throw new Error("Image error!");return a.json()}).catch(a=>{alert("Error while fetching images from pixabay!")}).then(a=>{const p=a.hits;p.length===0&&L.show({transitionIn:"fadeInLeft",transitionOut:"fadeOutRight",position:"topRight",messageColor:"white",backgroundColor:"rgba(255, 110, 110, 1)",message:"Sorry, there are no images matching your search query. Please try again!"}),$.innerHTML=p.map(({webformatURL:d,tags:f,largeImageURL:g,likes:m,views:h,comments:y,downloads:b})=>`<li class = "gallery-item">
                    <a class="gallery-link" href=${g}> 
                        <img
                        src="${d}" 
                        class="gallery-image"
                        alt="${f}"
                        />
                    </a>
                    <div class="description">
                        <div class="field">
                        <span class="label"><b>Likes</b></span>
                        <span class="value">${m}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Views</b></span>
                        <span class="value">${h}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Comments</b></span>
                        <span class="value">${y}</span>
                        </div>
                        <div  class="field">
                        <span class="label"><b>Downloads</b></span>
                        <span class="value">${b}</span>
                        </div>
                    </div>
                    
                </li>`).join(""),c.classList.add("isInvisible")})}o.addEventListener("submit",r=>{r.preventDefault(),o.input.value!==""?(w(),c.classList.remove("isInvisible"),new v(".gallery a",{captionsData:"alt"}).refresh()):o.input.value===""&&(c.classList.add("isInvisible"),alert("Fill out the search input!"))});
//# sourceMappingURL=commonHelpers.js.map
