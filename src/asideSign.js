import formController from './formController.js';
const asideSign = () => {
  $('.sign-close').on('click', function () {
    $('.aside-sign').css('display', 'none');
  });
  $('.signin-wrapper').on('click', function () {
    $('.aside-sign').css('display', 'block');
  });
  formController();
};
export default asideSign;
