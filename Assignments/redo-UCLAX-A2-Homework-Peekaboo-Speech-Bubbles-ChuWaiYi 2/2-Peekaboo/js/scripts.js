/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/

console.log('only us can see it');

window.onload = function() {
  var items = document.querySelectorAll('.item');

  console.log(items);
  console.log(items[0]);

  items[0].eddEventListener('mouseover', function(){
    console.log('ouch you mouseovered me');
    item[0].classList.toggle.('on');
  });



};
