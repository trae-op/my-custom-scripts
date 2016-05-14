
_validation.start({
  // id form
  form: document.getElementById('form-send'),

  // [types-element-form, element-form, false/callback, callback]
  /*
    types-element-form:
      element contains type (text, email, checkbox, radio)

    element-form:
      element form with an id

    callback:
      if use callback
      separate display message about error

    more once callback:
      for correction message about error

    false:
      optional field
  */
  checkElems:[
    ['text',document.getElementById('name')],
    ['email',document.getElementById('e-mail')],
    ['phone',document.getElementById('phone')],
    ['text',document.getElementById('description-text'),
      function(e) {
        e.style.border='1px solid blue';
      }, 
      function(e) {
        e.style.border=0;
      }
    ],
    ['select',document.getElementById('select')],
    ['radio',document.getElementById('radio')],
    ['radio',document.getElementById('radio2')],
    ['checkbox',document.getElementById('checkbox')]
  ],

  // if not the correct data for all elements form message about error
  startError:function(e){
    e.style.border='1px solid red';
  },
  // for all elements form correction about error
  endError:function(e){
    e.style.border=0;
  },

  // if all correction data then return results as array
  sendData:function(data){
    var lastResult = '[\n';
    var resultForm = document.getElementById('result-form');
    data.forEach(function(resData, index) {
      lastResult += ' '+resData[0]+' => '+resData[1]+',\n';
    });
    resultForm.innerHTML = lastResult + ']';
  }
});