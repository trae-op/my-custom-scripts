
// object with settings for element position
new MoveElement([{

  // container in which element can move
  container: document.getElementsByClassName('container-dragenddrop')[0],

  // element which can move not leaving from container
  element: document.getElementsByClassName('move-dragenddrop')[0],

  // start position
  showPosition: function(obj) {
    elementPosition('dragenddrop-all', 'X => ' + obj.x + '; Y => ' + obj.y);
  },

  // events for element position
  events: function(obj) {
    notBeyond('dragenddrop-all', 'X => ' + obj.x + '; Y => ' + obj.y, obj, function() {

      // mousedown/touchstart
      if (obj.checkEvent === 'start') {
        elementPosition('dragenddrop-all', 'X => ' + obj.x + '; Y => ' + obj.y);
      }
      // mousemove/touchmove
      if (obj.checkEvent === 'move') {
        elementPosition('dragenddrop-all', 'X => ' + obj.x + '; Y => ' + obj.y);
      }
      // mouseup/touchend
      if (obj.checkEvent === 'stop') {
        elementPosition('dragenddrop-all', 'X => ' + obj.x + '; Y => ' + obj.y);
      }
    });
  }
}, {
container: document.getElementsByClassName('container-dragenddrop')[1],
element: document.getElementsByClassName('move-dragenddrop')[1],

// if only for x-axis
positionAxis: 'x',
showPosition: function(obj) {
  elementPosition('dragenddrop-x', 'X => ' + obj.x)
},
events: function(obj) {
  notBeyond('dragenddrop-x', 'X => ' + obj.x, obj, function() {
    if (obj.checkEvent === 'start') {
      elementPosition('dragenddrop-x', 'X => ' + obj.x);
    }
    if (obj.checkEvent === 'move') {
      elementPosition('dragenddrop-x', 'X => ' + obj.x);
    }
    if (obj.checkEvent === 'stop') {
      elementPosition('dragenddrop-x', 'X => ' + obj.x);
    }
  });
}
}, {
container: document.getElementsByClassName('container-dragenddrop')[2],
element: document.getElementsByClassName('move-dragenddrop')[2],

// if only for y-axis
positionAxis: 'y',
showPosition: function(obj) {
  elementPosition('dragenddrop-y', 'Y => ' + obj.y);
},
events: function(obj) {
  notBeyond('dragenddrop-x', 'Y => ' + obj.y, obj, function() {
    if (obj.checkEvent === 'start') {
      elementPosition('dragenddrop-y', 'Y => ' + obj.y);
    }
    if (obj.checkEvent === 'move') {
      elementPosition('dragenddrop-y', 'Y => ' + obj.y);
    }
    if (obj.checkEvent === 'stop') {
      elementPosition('dragenddrop-y', 'Y => ' + obj.y);
    }
  });
}
}]);

// position element
function elementPosition(element, value) {
  document.getElementById(element).textContent = value;
}

// element will not go beyond
function notBeyond(element, value, obj, callBack) {
  var widthContainer = (obj.widthContainer - obj.widthElement);
  var heightContainer = (obj.heightContainer - obj.heightElement);
  if (obj.x <= 0 || obj.y <= 0) {
    if (obj.element.style) {
      if (parseInt(obj.element.style.left) <= 0) {
        obj.x = 0;
        obj.element.style.left = 0;
      }
      if (parseInt(obj.element.style.top) <= 0) {
        obj.y = 0;
        obj.element.style.top = 0;
      }
    }
    elementPosition(element, value);
  }
  if (obj.x >= widthContainer || obj.y >= heightContainer) {
    if (obj.x >= widthContainer) {
      obj.x = widthContainer;
      obj.element.style.left = widthContainer + 'px';
    }
    if (obj.y >= heightContainer) {
      obj.y = heightContainer;
      obj.element.style.top = heightContainer + 'px';
    }
  } else {
    callBack();
  }
}