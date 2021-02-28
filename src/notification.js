const notification = (cond) => {
  if (cond === 'add') $('.notification-wrapper p').html('Added to watchlist');
  else if (cond === 'remove')
    $('.notification-wrapper p').html('Removed from watchlist');
  $('.notification')
    .show()
    .delay(3000)
    .queue(function (next) {
      $(this).hide();
      next();
    });
};
export default notification;
