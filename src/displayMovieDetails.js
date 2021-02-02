import getData from './getData.js';

const displayMovieDetails = async (id, element) => {
    console.log(id, element);
    const key = '25141123a6896a890d381900b61e2af6';
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`;
    const backgroundPath = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces`;
    const posterPath = `https://image.tmdb.org/t/p/w600_and_h900_bestv2`;
   
//    const data = await getData(url);
    const data = JSON.parse(localStorage.getItem('movie'));
    

    [data].map(item => {
        element.style.background = `url(${backgroundPath}${item.backdrop_path})`;
        element.innerHTML += `<div class="details-overlay"></div>`;
        const newElement = document.querySelector('.details-overlay');
        newElement.innerHTML += `
    <div class='details-img-wrapper'>
        <img class='details-img' src='${posterPath}${item.poster_path}'>
    </div>
    <div class='details-info-wrapper'>
       <p class='details-title'>${item.original_title}</p>
       <p class='details-date'>${item.release_date} <span class="details-countries">
        ${item.production_countries.map(item=>{return "("+item.iso_3166_1+")"})}</span></p>
        <p> <span class="details-genres">
        ${item.genres.map(item=>{return item.name}).join(' <i class="fas fa-dot-circle"></i> ')}</span></p>
        <p class='details-popularity'>Popularity: ${item.popularity}</p>
        <p class='details-tagline'>${item.tagline}</p>
        <p class='details-description'>${item.overview}</p>
        <span class='details-close'><i class="far fa-times-circle"></i></span>
    </div>
    `
    })
    document.querySelector('.details-wrapper').scrollIntoView();

    const closeBtn = document.querySelector('.details-close');
    closeBtn.addEventListener('click',()=>{
        document.querySelector('.details-wrapper').remove();
    })
}
export default displayMovieDetails;