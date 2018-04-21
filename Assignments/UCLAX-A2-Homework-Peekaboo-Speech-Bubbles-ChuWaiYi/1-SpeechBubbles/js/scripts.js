/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log('This is only seen by us');

// wait for page to load before we try and use the speechbubbles
window.onload = function() {

    // grabing speechbubbles and assigning to a handle (variable)
    var speechbubbles = document.querySelectorAll('.img.bubble');
    console.log(speechbubbles[0]);
    // console.log(bubbles[1]);
    // console.log(bubbles[2]);
    // console.log(bubbles[3]);

// bubbles manegement
    speechbubbles[0].addEventListener('mouseover', function(){
        console.log('Ouch you mouseovered me.');
        speechbubbles[0].classList.toggle('on')

        speechbubbles[0].src ='./img/speech_bott_movie.png';
    });
    speechbubbles[0].addEventListener('mouseout', function(){
        console.log('Ouch you mouseoutted me.');

        speechbubbles[0].src ='./img/speech_bott_movie.png';

    });

    //     speechbubbles[1].addEventListener('click', function(){
    //     console.log('Ouch you clicked me.');
    //     speechbubbles[1].classList.toggle('on');
    // });
    // speechbubbles[1].addEventListener('mouseover', function(){
    //     console.log('Ouch you mouseovered me.');
    //
    //     speechbubbles[1].src ='./img/speech_bott_comic.png';
    // });
    // speechbubbles[1].addEventListener('mouseout', function(){
    //     console.log('Ouch you mouseoutted me.');
    //
    //     speechbubbles[1].src ='./img/speech_bott_comic.png';
    //
    // });
    //
    //     speechbubbles[2].addEventListener('click', function(){
    //     console.log('Ouch you clicked me.');
    //     speechbubbles[2].classList.toggle('on');
    // });
    // speechbubbles[2].addEventListener('mouseover', function(){
    //     console.log('Ouch you mouseovered me.');
    //
    //     speechbubbles[2].src ='./img/speech_bott_story.png';
    // });
    // speechbubbles[2].addEventListener('mouseout', function(){
    //     console.log('Ouch you mouseoutted me.');
    //
    //     speechbubbles[2].src ='./img/speech_bott_story.png';
    //
    // });




};  //this is where window load ends
