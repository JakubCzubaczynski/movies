import displayWatchList from './displayWatchList.js';
import getData from './getData.js';

const addToWatchList = async (id) => {
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=25141123a6896a890d381900b61e2af6&language=en-US`;

  const data = await getData(url);
  const storage = JSON.parse(localStorage.getItem('watchlist'));

  if (storage && storage.length > 0) {
    let isInStorage = false;
    storage.map((item) => {
      if (item.id === data.id) {
        isInStorage = true;
      }
      return item;
    });
    if (!isInStorage) {
      const join = [...storage, data];
      localStorage.setItem('watchlist', JSON.stringify(join));
    }
  } else {
    localStorage.setItem('watchlist', JSON.stringify([data]));
    console.log('malo');
  }
  displayWatchList();
};
export default addToWatchList;
