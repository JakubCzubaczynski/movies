import categorySliderUtils from './categorySliderUtils.js';
import getData from './getData.js';
const addToWatchList = async (id) => {
  window.localStorage.setItem(id, id);
  console.log('klik bookmark');
};
export default addToWatchList;
