var imageDials = document.querySelectorAll('div.choices img');
var linkTheme = document.querySelector('link.theme');

console.log(imageDials);
console.log(imageDials[0].dataset.theme);
console.log(imageDials[1].dataset.theme);
console.log(imageDials[2].dataset.theme);

//for Each
imageDials.forEach(function(item){
  item.addEventListener('click', function(){
  console.log('you clicked me!!');
  //no matter which one it is on, turn them all off
  imageDials[0].classList.remove('chosen');
  imageDials[1].classList.remove('chosen');
  imageDials[2].classList.remove('chosen');
  // add to the chosen one
  item.classList.add('chosen');

  var whichTheme = item.dataset.theme;
  linkTheme.href = whichTheme;
  });

});


//
// //dial 0
// imageDials[0].addEventListener('click', function(){
//   console.log('you clicked me!');
//
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//   imageDials[2].classList.remove('chosen');
//
//   imageDials[0].classList.add('chosen');
//
//   var whichTheme = imageDials[0].dataset.theme;
//   // document.querySelector('link.theme').href = whichTheme;
//   linkTheme.href = whichTheme;
//   //before using linktheme,you need to grab the element,querySelector, no all
//
// });
//
// //dial 1
// imageDials[1].addEventListener('click', function(){
//   console.log('you clicked me!!');
//   //no matter which one it is on, turn them all off
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//   imageDials[2].classList.remove('chosen');
//   // add to the chosen one
//   imageDials[1].classList.add('chosen');
//
//   var whichTheme = imageDials[1].dataset.theme;
//   document.querySelector('link.theme').href = whichTheme;
//   // linkTheme.href = whichTheme;
//
// });
//
//
// //dial 2
//
// imageDials[2].addEventListener('click', function(){
//   console.log('you clicked me!!');
//   imageDials[0].classList.remove('chosen');
//   imageDials[1].classList.remove('chosen');
//   imageDials[2].classList.remove('chosen');
//   imageDials[2].classList.add('chosen');
//
//   var whichTheme = imageDials[2].dataset.theme;
//   // document.querySelector('link.theme').href = whichTheme;
//   linkTheme.href = whichTheme;
//
// });
