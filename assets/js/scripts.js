console.log('scripts loaded');
/*
We are going to create an event listener to listen when we press a key
*/
function playSound(e){
    /* Checking the event we can see that theres one property that we can use, and that is keyCode, e.keyCode returns the code of the key we are pressing so we can use it to create
    owr dom selector.
    We create a constant sound, and thats when we are going to create our selector. */
    const audio = document.querySelector('audio[data-key=' + '"' + e.keyCode + '"'),
    key = document.querySelector('.key[data-key=' + '"' + e.keyCode + '"');
    if(!audio){
        return // If theres no sound attached to that key we are leaving the event.
    };
    audio.currentTime = 0; // We set the currentTime to 0 so everytime we press a key it starts.
    audio.play(); // we call the audio tag play Method to play the sound
    key.classList.add('playing'); //we add playing class to the key we pressed
    console.log(key)
}
const keys = document.querySelectorAll('.key');
keys.forEach(function(e){
    e.addEventListener('transitionend', function(e){
        if(e.propertyName !== "transform"){
            return //We make sure to show only properties with a propertyName transform
        }
        this.classList.remove('playing');
    });
})
window.addEventListener('keydown', playSound);

