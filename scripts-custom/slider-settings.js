
var slider = new Slider([
  {
   // class of container for slider
   sliderContainer: 'container-slider',

   // class of container for list slides 
   allSlidesList: 'all-list',

   // delay between playing slider
   timeout: 1000,

   // speed of animation
   speed: 500,

   autoplay: false,

   // control for elements of slider
   controls: {
     arrowsNavigation: {
       classNameBtnNext: 'next',
       classNameBtnPrev: 'prev'
     },
     boxMenu: {
       classNameBox: document.getElementsByClassName('box')[0],
       classNameActive: 'active'
     },
     dotsNavigation: {
       classNameDots: 'dots',
       classNameActive: 'active'
     }
   }
 }
]);

/*
             -API-
=================================

slider.Buttons('< prev/next slide >', < index of slider >);
slider.Buttons('next', 0);
slider.Buttons('prev', 1);

*/