

_wheel.Initialize(function(object) {
  return [
    {
      element: document.getElementById('wheel'),

      // delay between interval 50ms
      delay: 50,

      // range of counter from 0 to -500
      range: 'from (0) to (-500)',

      // event wheel to bottom
      wheelBottom: function(obj) {
        rotateElement(-(obj.counter * 50));
      },

      // event wheel to top
      wheelTop: function(obj) {
        rotateElement(-(obj.counter * 50));
      }
    }
  ];
});

// start script
_wheel.Start(_wheel.AllData);

// for rotation of element
function rotateElement(value) {
  var div = document.getElementById('move');
  div.style.webkitTransform = 'rotate('+value+'deg)'; 
  div.style.mozTransform    = 'rotate('+value+'deg)'; 
  div.style.msTransform     = 'rotate('+value+'deg)'; 
  div.style.oTransform      = 'rotate('+value+'deg)'; 
  div.style.transform       = 'rotate('+value+'deg)';  
}