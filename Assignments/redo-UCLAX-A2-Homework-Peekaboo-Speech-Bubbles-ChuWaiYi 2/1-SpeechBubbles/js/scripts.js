/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log('This is only seen by us');

// wait for page to load before we try and use the bubbles
window.onload = function() {

    // grabing bubbles and assigning to a handle (variable)
    var bubbles = document.querySelectorAll('.bubble');

    console.log(bubbles)
    console.log(bubbles[0]);
    console.log(bubbles[1]);
    console.log(bubbles[2]);
    console.log(bubbles[3]);

// bubbles manegement
    bubbles[0].addEventListener('click', function(){
        console.log('Ouch you clicked me.');
        bubbles[0].classList.toggle('on');
    });
    bubbles[0].addEventListener('mouseover', function(){
        console.log('Ouch you mouseovered me.');

        bubbles[0].src ='./img/speech_bott_movie.png';
    });
    bubbles[0].addEventListener('mouseout', function(){
        console.log('Ouch you mouseoutted me.');

        bubbles[0].src ='./img/speech_bott_movie.png';

    });

        bubbles[1].addEventListener('click', function(){
        console.log('Ouch you clicked me.');
        bubbles[1].classList.toggle('on');
    });
    bubbles[1].addEventListener('mouseover', function(){
        console.log('Ouch you mouseovered me.');

        bubbles[1].src ='./img/speech_bott_comic.png';
    });
    bubbles[1].addEventListener('mouseout', function(){
        console.log('Ouch you mouseoutted me.');

        bubbles[1].src ='./img/speech_bott_comic.png';

    });

        bubbles[2].addEventListener('click', function(){
        console.log('Ouch you clicked me.');
        bubbles[2].classList.toggle('on');
    });
    bubbles[2].addEventListener('mouseover', function(){
        console.log('Ouch you mouseovered me.');

        bubbles[2].src ='./img/speech_bott_story.png';
    });
    bubbles[2].addEventListener('mouseout', function(){
        console.log('Ouch you mouseoutted me.');

        bubbles[2].src ='./img/speech_bott_story.png';

    });




};  //this is where window load ends
