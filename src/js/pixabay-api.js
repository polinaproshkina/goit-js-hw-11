export default async function getImages(searchQuery, currentPage) {
    const key = '42692774-4141696abcbee76e8cc433895';
    const BASE_URL = 'https://pixabay.com/api/';
    const image_type = 'photo';
    const orientation = 'horizontal';
    const safesearch = 'true';
    const perPage = 15;
   return fetch(`${BASE_URL}?key=${key}&q=${searchQuery}&page=${currentPage}&per_page=${perPage}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Image error!')
            }
            return response.json()
        })
        .catch(error => {
            alert('Error while fetching images from pixabay!')
        })  
};