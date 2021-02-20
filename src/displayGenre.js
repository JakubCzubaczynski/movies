import getData from './getData.js';
import categorySliderUtils from './categorySliderUtils.js';
const displayGenre = () => {
  // conditionally displaying genres
  const key = '25141123a6896a890d381900b61e2af6';
  let url = '';
  let text = '';

  const displayGenreSlide = async (id) => {
    const imagePath = `https://image.tmdb.org/t/p/w220_and_h330_face`;
    switch (id) {
      case '16':
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&include_adult=false&with_genres=${id}&page=1`;
        text = 'animation';
        break;
      case '27':
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&with_genres=${id}&page=1`;
        text = 'horror';
        break;
      case '35':
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&with_genres=${id}&page=1`;
        text = 'comedy';
        break;
      case '10749':
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&with_genres=${id}&page=1`;
        text = 'romance';
        break;
      case '878':
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&with_genres=${id}&page=1`;
        text = 'sci-fi';
        break;
      case '14':
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&sort_by=popularity.desc&with_genres=${id}&page=1`;
        text = 'fantasy';
        break;
    }
    const data = await getData(url);
    const wrapper = document.querySelector(
      `.single-genre .slider-section-wrapper`
    );

    data.results.map((item) => {
      wrapper.innerHTML += `
      <div data-id='${item.id}' class="item single-genre">
      <img class="item-img" src='${imagePath + item.poster_path}' alt=''>
      
      <p class="item-vote-label"><i class="fas fa-star"></i>${
        item.vote_average
      }</p>
      <p class="item-title-label">${item.title}</p>
      <p class="item-release-label">${item.release_date}</p>
      
      </div>
      `;

      const container = document.querySelector(`.single-genre.container`);

      $('.single-genre .section-title').html(text);
      $(`.single-genre`).css('animation', 'fadein 0.5s linear');

      $(`.single-genre.container`).removeClass('hide');
      container.scrollIntoView();
    });

    categorySliderUtils('single-genre');
  };

  $('.genre').each(function () {
    const id = $(this).attr('data-genre');
    $(this).on('click', function () {
      $(`.single-genre .slider-section-wrapper`).html(' ');
      $('.details-wrapper').hide();
      displayGenreSlide(id);
    });
  });
};
export default displayGenre;

// JS
// genreWrapper.map((item) => {
//   const id = item.getAttribute('data-genre');

//   item.addEventListener('click', () => {
//     document.querySelector(
//       `.single-genre .slider-section-wrapper`
//     ).innerHTML = ''; // RESET SLIDER CONTENT
//     displayGenreSlide(id);
//   });
// });
