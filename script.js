/**
 * TODO: Create a keydown listener to track what keys are hit
 * TODO: Create a Beat class to represent the beat object in utils.js
 * TODO: Complete triggerBeat() to play upon the press of a,s,d,f,g,h,j,k,l
 * TODO: Button pt1: Initialize color and element values
 * TODO: Button pt2: Set button color upon initialization | Initialize button in beats["65"]
 * TODO: Button pt3: Complete select function to set the color and shadow of button upon pressing
 * TODO: Button pt4: Call the select() function upon key press ;)
 * TODO: Button pt5: Add transition for button selection (see CSS .button)
 * TODO: Button pt6: Remove the button style upon transition end | Use deselect function
 * 3 methods available for pt6:
 * (i) remove style on keyup
 * (ii) wait a certain amount of time after select function
 * (iii) transition end. Basically activate deselect when transition for select is done
 * TODO: Complete all button instances with the following colors
 * TODO: Add background image
 * First 3: #00fffe
 * 4,5,6,7: #FF00FF
 * 8, 9: #FFFFFF
 */

 /* the following "beats" is akin to setting new user in module 7 example.
 ** Here, we initialize what is 65, 83, 68... by using the class called
 ** "Beat"
 */
let beats = {
    "65": {
        beat: new Beat("./assets/Piano Chord 331.mp3"),
        button: new Button("#00fffe", 65),
    },
    "83": {
        beat: new Beat("./assets/Piano Chord 209.mp3"),
        button: new Button("#00fffe", 83),
    },
    "68": {
        beat: new Beat("./assets/Piano Chord 208.mp3"),
        button: new Button("#00fffe", 68),
    },
    "70": {
        beat: new Beat("./assets/Drum Sticks Hit 3.mp3"),
        button: new Button("#FF00FF", 70),
    },
    "71": {
        beat: new Beat("./assets/Drum Snare Roll.mp3"),
        button: new Button("#FF00FF", 71),
    },
    "72": {
        beat: new Beat("./assets/PREL Musical 57.mp3"),
        button: new Button("#FF00FF", 72),
    },
    "74": {
        beat: new Beat("./assets/Cymbal Suspended 2.mp3"),
        button: new Button("#FF00FF", 74),
    },
    "75": {
        beat: new Beat("./assets/Musical Compos 33.mp3"),
        button: new Button("#FFFFFF", 75),
    },
    "76": {
        beat: new Beat("./assets/Musical Orches 4.mp3"),
        button: new Button("#FFFFFF", 76),
    }
}

/**
 * Function to play the beat upon a press of key
 * HINT: use the keyCode
 */
triggerBeat = (keyCode) => {      // previously it was event when there's only 'keydown' listener
    //const keyCode = event.keyCode;
    if (keyCode in beats) {
        beats[keyCode].beat.playBeat();
        beats[keyCode].button.select();
        /** note, outside the class, in order to call function, we have to include all the "parent
         * directory, ie beats[keyCode].button. Whereas if we're in the class itself, the directory
         * shortens to just this. */

        beats[keyCode].button.setATransitionEndListener(); 

        // beats[keyCode].button.deselect();
        // cannot call inside here coz it happens too fast that the effect of select() is not seen

    }
}

/**
 * Keydown listener to fire triggerBeat function
 * HINT: Log the keyCode of the key
 */

 // keydown event listener
document.addEventListener('keydown', (event) => { // previously ('keydown', triggerBeat)
    let keyCode = event.keyCode
    triggerBeat(keyCode);
})

// alternatively, user can use click to activate 
document.querySelectorAll('.beat').forEach(item =>{
    /** use quesrySelector to grab by class, only this works with .forEach. Here, we use
     *  loop to add listener to each button (note, this is automatically initialised without)
     *  having to click */

    item.addEventListener('click', (event) => {
    /** note, for any kind of eventListener, we can grab the item (denoted event here) to
     *  access its attributes for use. Here, target.id contains the id of the element clicked
    console.log(event)*/
    let keyCode = event.target.id;
    triggerBeat(keyCode);
    })
})
    

// this is how we would access the beat "65" colour after it is initialised. Remember, "beats"
// is a dictionary so starting with 75.button won't work
// console.log(beats[75].button.color);
