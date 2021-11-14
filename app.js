//Changes the border of the blue button accordingly
let blue = document.querySelector("#blueSq");
blue.addEventListener("mouseover", () => {
    document.querySelector("#blueSq").classList.add("hover");
});

blue.addEventListener("mouseout", () => {
    document.querySelector("#blueSq").classList.remove("hover");
});

//Causes the blue button to light up and play the corresponding sound when clicked
blue.addEventListener("mousedown", () => {
    document.querySelector("#blueSq").classList.add("lightblue");
    incorrectGuess();
});
blue.addEventListener("mouseup", () => {
    document.querySelector("#blueSq").classList.remove("lightblue");
    (new Audio("sounds/blue.wav")).play();
});

//Changes the border of the red button accordingly
let red = document.querySelector("#redSq");
red.addEventListener("mouseover", () => {
    document.querySelector("#redSq").classList.add("hover");
});
red.addEventListener("mouseout", () => {
    document.querySelector("#redSq").classList.remove("hover");
});

//Causes the red button to light up and play the corresponding sound when clicked
red.addEventListener("mousedown", () => {
    document.querySelector("#redSq").classList.add("lightred");
});
red.addEventListener("mouseup", () => {
    document.querySelector("#redSq").classList.remove("lightred");
    (new Audio("sounds/red.wav")).play();
});

//Changes the border of the yellow button accordingly
let yellow = document.querySelector("#yellowSq");
yellow.addEventListener("mouseover", () => {
    document.querySelector("#yellowSq").classList.add("hover");
});
yellow.addEventListener("mouseout", () => {
    document.querySelector("#yellowSq").classList.remove("hover");
});

//Causes the yellow button to light up and play the corresponding sound when clicked
yellow.addEventListener("mousedown", () => {
    document.querySelector("#yellowSq").classList.add("lightyellow");
});
yellow.addEventListener("mouseup", () => {
    document.querySelector("#yellowSq").classList.remove("lightyellow");
    (new Audio("sounds/yellow.wav")).play();
});

//Changes the border of the green button accordingly
let green = document.querySelector("#greenSq");
green.addEventListener("mouseover", () => {
    document.querySelector("#greenSq").classList.add("hover");
});
green.addEventListener("mouseout", () => {
    document.querySelector("#greenSq").classList.remove("hover");
});

//Causes the green button to light up and play the corresponding sound when clicked
green.addEventListener("mousedown", () => {
    document.querySelector("#greenSq").classList.add("lightgreen");
});
green.addEventListener("mouseup", () => {
    document.querySelector("#greenSq").classList.remove("lightgreen");
    (new Audio("sounds/green.wav")).play();
});

/**
 * Updates the background color to hot pink and updates the message to indicate that the game is over.
 * wrong and lose sounds are played accordingly.
 */
function incorrectGuess() {
    document.querySelector("body").style.backgroundColor = "#FF69B4";
    document.querySelector("#status").innerHTML = "Incorrect! You lose!";
    (new Audio("sounds/wrong.wav")).play(); //need to fix these sounds to play in the correct order
    (new Audio("sounds/lose.wav")).play();

}

//Testing on a starting sequence to play initially
let startSequence = ["R","G","R","B","G","R","Y"]; //stores the start sequnce
let solutionSequence = ["R","G","Y"]; //stores solution sequence for given rounds


let numberOfRounds = 0; //stores the number of rounds given by the user
let roundNumber = 0;

//reads in the number of rounds selected by thte user
let roundInput = document.querySelector("#rounds");
roundInput.addEventListener("input", () => {
    numberOfRounds = roundInput.value;
});

//creates a game of Simone when the "Play Simone!" button is clicked
let game = document.querySelector("#play");
game.addEventListener("click", () => {
    async function playStartSequence() {
        for (i = 0; i < startSequence.length; i++) {
            //checks to see if the sequence is Red
            if (startSequence[i] == "R") {
                document.querySelector("#redSq").classList.add("lightred");
                (new Audio("sounds/red.wav")).play();
                await secondstoWait(120);
                document.querySelector("#redSq").classList.remove("lightred");
            }
            //checks to see if the sequence is Blue
            else if (startSequence[i] == "B") {
                document.querySelector("#blueSq").classList.add("lightblue");
                (new Audio("sounds/blue.wav")).play();
                await secondstoWait(120);
                document.querySelector("#blueSq").classList.remove("lightblue");
            }
            //checks to see if the sequence is Green
            else if (startSequence[i] == "G") {
                document.querySelector("#greenSq").classList.add("lightgreen");
                (new Audio("sounds/green.wav")).play();
                await secondstoWait(120);
                document.querySelector("#greenSq").classList.remove("lightgreen");
            }
            //checks to see if the sequence is Yellow
            else if (startSequence[i] == "Y") {
                document.querySelector("#yellowSq").classList.add("lightyellow");
                (new Audio("sounds/yellow.wav")).play();
                await secondstoWait(120);
                document.querySelector("#yellowSq").classList.remove("lightyellow");
            }
        }
    }
    playStartSequence();

    async function playSimone() {

    }
    playSimone();
});

/**
 * Delay lighting up of button and sound played
 * @param {number} secondsDelay 
 * @returns a promise object that resolves a delay
 */
function secondstoWait(secondsDelay) {
    return new Promise((resolve) => setTimeout(resolve, secondsDelay));
}
