import displayWatchList from './displayWatchList.js';
import notification from './notification.js';

const removeFromWatchlist = async (id) => {
  const storage = JSON.parse(localStorage.getItem('watchlist'));

  if (storage && storage.length > 0) {
    const newStorage = storage.filter((item) => {
      if (item.id != id) {
        return item;
      }
    });
    console.log(newStorage);

    localStorage.setItem('watchlist', JSON.stringify(newStorage));

    notification('remove');
  }
  displayWatchList();
};
export default removeFromWatchlist;
