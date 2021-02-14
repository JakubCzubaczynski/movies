import getData from './getData.js';

const displayActorDetails = async (id, element) => {
  const key = '25141123a6896a890d381900b61e2af6';
  const urlPerson = `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`;
  const posterPath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2`;

  const data = await getData(urlPerson);

  console.log(data);

  element.innerHTML += `<div class="details-overlay"></div>`;
  const newElement = document.querySelector('.details-overlay');
  newElement.innerHTML += `
    <div class='details-img-wrapper'>
        <img class='details-img' src='${posterPath}${data.profile_path}'>
    </div>
    <div class='details-info-wrapper'>
       <p class='details-title'>${data.name}</p>
       <p class='details-date'>${data.birthday}</p>
      
        <p class='details-popularity'>${data.place_of_birth}</p>
        
        <p class='details-description'>${data.biography}</p>
        <span class='details-close'><i class="far fa-times-circle"></i></span>
    </div>
    `;

  document.querySelector('.details-wrapper').scrollIntoView();

  const closeBtn = document.querySelector('.details-close');
  closeBtn.addEventListener('click', () => {
    document.querySelector('.details-wrapper').remove();
  });
};
export default displayActorDetails;
