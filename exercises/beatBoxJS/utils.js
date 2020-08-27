/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }
    play() {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode) {
        this.color = color;
        this.keyCode = keyCode;
        this.element = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setKeyupListener();

        // this.setTransitionListener();
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML() {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select() {
        this.element.style.boxShadow = `0 0 10px ${this.color}`;
        this.element.style.backgroundColor = this.color;
    };

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect() {
        this.element.style.boxShadow = "none";
        this.element.style.backgroundColor = "transparent";
    }

    setKeyupListener() {
        document.addEventListener("keyup", (event) => {
            if (event.keyCode == this.keyCode) {
                this.deselect();
            }
        });
    }

    /**
     * rozwiązanie z video
     */
    // setTransitionListener() {
    //     document.addEventListener("transitionend", (event) => {
    //         this.deselect();
    //     });
    // }
}