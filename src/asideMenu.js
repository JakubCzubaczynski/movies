const asideMenu = () => {
  $(document).ready(function () {
    $('.menu-wrapper').on('click', function () {
      $('.aside-menu').removeClass('animation-out');
      $('.aside-menu').addClass('animation-in');
      $('.aside-menu').css('display', 'block');
      $('.aside-menu').css('top', '0');
    });

    $('.menu-close').on('click', function () {
      $('.aside-menu').removeClass('animation-in');
      $('.aside-menu').addClass('animation-out');
      $('.aside-menu').css('top', '-200%');
      //   $('.ul-menu').css('display', 'none');
    });
    $('.fa-angle-up').on('click', function () {
      $('.ul-menu').removeClass('show').addClass('hidden');
      $(this).removeClass('show').addClass('hidden');
      $(this).siblings('.fa-angle-down').removeClass('hidden').addClass('show');
    });

    $('.fa-angle-down').on('click', function () {
      $('.ul-menu').removeClass('show').addClass('hidden');
      $('.fa-angle-up').removeClass('show').addClass('hidden');
      $('.fa-angle-down').removeClass('hidden').addClass('show');

      $(this).siblings('.ul-menu').removeClass('hidden').addClass('show');
      $(this).removeClass('show').addClass('hidden');
      $(this).siblings('.fa-angle-up').removeClass('hidden').addClass('show');
    });
    $(window).on('resize', function () {
      if (window.innerWidth > 678) {
        $('.ul-menu').removeClass('show hidden');
        $('.fa-angle-down, .fa-angle-up').removeClass('show hidden');
        console.log('duze okno');
      }
    });
  });
};
export default asideMenu;
