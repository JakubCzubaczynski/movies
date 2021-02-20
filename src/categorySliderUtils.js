import displayMovieDetails from './displayMovieDetails.js';
import displayActorDetails from './displayActorDetails.js';
import displayCategorySlide from './displayCategorySlide.js';
const categorySliderUtils = async (cond) => {
  //SLIDER NEXT/PREV FUNCTIONALITY

  const nextt = document.querySelector(`.${cond} .next-icon-element`);
  nextt.addEventListener('click', () => {
    console.log('klik');
    const wrapper = document.querySelector(`.${cond} .slider-section-wrapper`);
    const width = wrapper.offsetWidth;

    wrapper.scrollLeft += width / 2;
  });
  const prevv = document.querySelector(`.${cond} .prev-icon-element`);
  prevv.addEventListener('click', () => {
    console.log('klik');
    const wrapper = document.querySelector(`.${cond} .slider-section-wrapper`);
    const width = wrapper.offsetWidth;

    wrapper.scrollLeft -= width / 2;
  });

  // DISPLAYING DETAILS
  const items = [...document.querySelectorAll(`.item.${cond},.item-2.${cond}`)];

  items.map((item) => {
    item.addEventListener('click', () => {
      if (document.querySelector('.details-wrapper')) {
        document.querySelector('.details-wrapper').remove();
      }
      let newDiv = document.createElement('div');
      newDiv.classList.add('details-wrapper');
      const parent = document.querySelector(`.${cond}`);
      parent.insertBefore(newDiv, parent.firstChild);

      const id = item.getAttribute('data-id');
      console.log(cond);
      if (cond === 'actors') displayActorDetails(id, newDiv);
      else displayMovieDetails(id, newDiv);
    });
  });
};
export default categorySliderUtils;
