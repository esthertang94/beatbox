/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
        /* new Audio is js way to load an audio file. So, in script.js, when we "called"
        ** "Beat", we are just coming into this constructor. It only gets loaded when it
        ** is asked to do "new audio", which is a built-in js constructor. If we just 
        ** do = audioSrc, this.audio is merely strings of the directory (".asset/..mp3")
        */
    }

    playBeat = () => {
        this.audio.currentTime = 0;
        // this is to set the time for new beat as 0 everytime we press a new beat while
        // the previous beat is still playing. Otherwise, need to wait till first beat
        // finishes playing
        this.audio.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        //this.setATransitionEndListener();
        // Naz told us to put this here but I put it in triggerBeat
    }

    setATransitionEndListener = () => {
        this.element.addEventListener('transitionend', () => {
            this.deselect();
            // this is saying, when setATransitionEndListener is triggered, the event listener
            // is based on transition end. And what I wanna do when transition end is within a 
            // function in here (which doens't have a name), do this.deselect();
        });
    };
    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
        // note, outside the constructor we can't just call "color" or "keyCode"
    }
    

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent"; 
        this.element.style.boxShadow = "none"; // both are their default
    }
}


