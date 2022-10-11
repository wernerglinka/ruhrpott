/* global window, document, localStorage */

import barba from "@barba/core";
import barbaCSS from "@barba/css";
// Note that when using BarbaCSS the leave() and enter() hook are not executed.
// Only the before- and after- hooks are executed.
barba.use(barbaCSS);

import loadResponsiveImage from "./modules/load-responsive-image";
import navigation from "./modules/navigation";
import slides from "./modules/slides";
import scrollToTarget from "./modules/scroll-to-target";
import logos from "./modules/logos";
import richLists from "./modules/rich-lists";

function initPage() {
  
  barba.init({
    transitions: [
      {
        // "home" is used in the transition class attribute.
        name: "home",
        once() {},
      },
      {
        // "fade" is used in the transition class attribute.
        name: "fade",
        to: {
          namespace: ["barbaPage"],
        },
        beforeLeave(data) {},
        leave() {},
        afterLeave() {
          navigation.init();
        },
        enter() {},
      },
    ],
  });
  
  navigation.init();
  loadResponsiveImage.init();
  slides.init();
  scrollToTarget.init();
  logos.init();
  richLists.init();
}

window.addEventListener("load", function() {
  initPage();
});
