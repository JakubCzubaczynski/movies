import addToWatchList from './addToWatchList.js';
import displayMovieDetails from './displayMovieDetails.js';
import removeFromWatchlist from './removeFromWatchlist.js';
import categorySliderUtils from './categorySliderUtils.js';
const bookmarkUtils = () => {
  $('.bookmark-on').on('click', function () {
    const id = $(this).attr('data-bookmark-id');
    let newDiv = document.createElement('div');
    newDiv.classList.add('details-wrapper');

    $('.details-wrapper').remove();
    $(`.watchlist.container`).prepend(newDiv);
    $(this).removeClass('bookmark-on');
    $(this).addClass('bookmark-off');

    addToWatchList(id);
    displayMovieDetails(id, newDiv);
  });

  $('.bookmark-off').on('click', function () {
    const id = $(this).attr('data-bookmark-id');
    $(this).removeClass('bookmark-off');
    $(this).addClass('bookmark-on');

    removeFromWatchlist(id);

    $('.details-wrapper').remove();
  });
};
export default bookmarkUtils;
