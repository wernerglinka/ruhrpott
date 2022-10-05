/* global window, document */

// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
// import Swiper and modules styles
import 'swiper/css/bundle';

/**
 * Manage carousels
 * @params {*} none
 * @return {function} initializes a carousel
 */
 const carousel = (function() {
  const init = () => {
    const swiper = new Swiper('.swiper', {
      //loop: true,
      //autoplay: {
      //  delay: 2500,
      //  disableOnInteraction: false,
      //},
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      preventClicks: true,
      preventClicksPropagation: true,
      preventInteractionOnTransition: true,
      shortSwipes: false
    });
  };

  return { init };
})();

export default carousel;
