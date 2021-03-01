import displayMovieDetails from './displayMovieDetails.js';
import displayActorDetails from './displayActorDetails.js';
const categorySliderUtils = async (cond) => {
  //SLIDER NEXT/PREV FUNCTIONALITY
  let position = 0;
  const element = document.querySelector(`.${cond} .slider-section-wrapper`);
  const maxScrollLeft = element.scrollWidth - element.clientWidth;
  console.log(cond, element.scrollWidth);
  console.log(element.clientWidth);

  if (element.scrollWidth === element.clientWidth) {
    $(`.${cond} .next-icon-element`).hide();
    $(`.${cond} .prev-icon-element`).hide();
    console.log('chowam');
  } else {
    $(`.${cond} .next-icon-element`).show();
    $(`.${cond} .prev-icon-element`).show();
    console.log('nie chowam');
  }

  $(`.${cond} .next-icon-element`).on('click', function () {
    if (position + 400 < maxScrollLeft && position >= 0) {
      position += 400;
      console.log(position);
      $(`.${cond} .slider-section-wrapper`).scrollLeft(position);
    }
    if (position + 400 > maxScrollLeft) {
      position = maxScrollLeft;
      console.log(position);
      $(`.${cond} .slider-section-wrapper`).scrollLeft(maxScrollLeft);
    }
  });

  $(`.${cond} .prev-icon-element`).on('click', function () {
    if (position <= maxScrollLeft && position - 400 >= 0) {
      position -= 400;
      console.log(position);
      $(`.${cond} .slider-section-wrapper`).scrollLeft(position);
    }
    if (position - 400 < 0) {
      position = 0;
      console.log(position, 'pozycja na zero');
      $(`.${cond} .slider-section-wrapper`).scrollLeft(position);
    }
  });

  // DISPLAYING DETAILS
  $(`.item.${cond},.item-2.${cond}`).each(function () {
    $(this).on('click', function () {
      if ($('.details-wrapper')) $('.details-wrapper').remove();

      let newDiv = document.createElement('div');
      newDiv.classList.add('details-wrapper');

      $(`.${cond}.container`).prepend(newDiv);
      const id = $(this).attr('data-id');

      if (cond === 'actors') displayActorDetails(id, newDiv);
      else displayMovieDetails(id, newDiv);
    });
  });
};
export default categorySliderUtils;

// SAME BUT WITH JS

// const items = [...document.querySelectorAll(`.item.${cond},.item-2.${cond}`)];

// items.map((item) => {
//   item.addEventListener('click', () => {
//     if (document.querySelector('.details-wrapper')) {
//       document.querySelector('.details-wrapper').remove();
//     }
//     let newDiv = document.createElement('div');
//     newDiv.classList.add('details-wrapper');
//     const parent = document.querySelector(`.${cond}`);
//     parent.insertBefore(newDiv, parent.firstChild);

//     const id = item.getAttribute('data-id');
//     console.log(cond);
//     if (cond === 'actors') displayActorDetails(id, newDiv);
//     else displayMovieDetails(id, newDiv);
//   });
// });

// const nextt = document.querySelector(`.${cond} .next-icon-element`);
// nextt.addEventListener('click', () => {
//   console.log('klik');
//   const wrapper = document.querySelector(`.${cond} .slider-section-wrapper`);
//   const width = wrapper.offsetWidth;
//   console.log(wrapper.offsetWidth);
//   wrapper.scrollLeft += width / 2;
//   console.log(wrapper.scrollLeft);
// });

// const prevv = document.querySelector(`.${cond} .prev-icon-element`);
// prevv.addEventListener('click', () => {
//   console.log('klik');
//   const wrapper = document.querySelector(`.${cond} .slider-section-wrapper`);
//   const width = wrapper.offsetWidth;

//   wrapper.scrollLeft -= width / 2;
//   console.log(wrapper.scrollLeft);
// });
