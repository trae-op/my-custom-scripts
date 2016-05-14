

_elementForm.start({
  // element form
  element:document.getElementsByClassName('radio'),

  // class for active element
  classActive:'active'
});

_elementForm.start({
  element:document.getElementsByClassName('checkbox'),
  classActive:'active',

  // default active
  checkbox:true
});

_elementForm.start({
  element:document.getElementsByClassName('select'),
  activeElement:'active'
});