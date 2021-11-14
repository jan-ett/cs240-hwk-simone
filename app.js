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
    (new Audio("sounds/wrong.wav")).play();
    (new Audio("sounds/lose.wav")).play();

}

//Testing on a starting sequence to play initially
let startSequence = ["R","B","G","R","Y"];
async function playStartSequence() {
    for (i = 0; i < startSequence.length; i++) {
        if (startSequence[i] == "R") {
            document.querySelector("#redSq").classList.add("lightred");
            await secondstoWait(120);
            document.querySelector("#redSq").classList.remove("lightred");
            //(new Audio("sounds/red.wav")).play();
        }
        else if (startSequence[i] == "B") {
            document.querySelector("#blueSq").classList.add("lightblue");
            await secondstoWait(120);
            document.querySelector("#blueSq").classList.remove("lightblue");
            //(new Audio("sounds/blue.wav")).play();
        }
        else if (startSequence[i] == "G") {
            document.querySelector("#greenSq").classList.add("lightgreen");
            await secondstoWait(120);
            document.querySelector("#greenSq").classList.remove("lightgreen");
            //(new Audio("sounds/green.wav")).play();
        }
        else if (startSequence[i] == "Y") {
            document.querySelector("#yellowSq").classList.add("lightyellow");
            await secondstoWait(120);
            document.querySelector("#yellowSq").classList.remove("lightyellow");
            //(new Audio("sounds/yellow.wav")).play();
        }
    }
}

playStartSequence();

function secondstoWait(secondsDelay) {
    return new Promise((resolve) => setTimeout(resolve, secondsDelay));
}
