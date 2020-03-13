let numSquares = 6;
let colours = [];
let pickedColour;
let squares = document.querySelectorAll(".square");
let colourDisplay = document.querySelector("#colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    // mode buttons event listeners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // if (this.textContent === "Easy") {
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab colour of clicked square
            let clickedColour = this.style.backgroundColor;
            // compare it to pickedColour
            if (clickedColour === pickedColour) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play again?"
                changeColours(clickedColour)
                h1.style.backgroundColor = pickedColour;
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try again!"
            }
        });
    }
}

function reset() {
    // generate all new colours
    colours = generateRandomColours(numSquares);
    // pick a new random colour from array
    pickedColour = pickColour();
    // change colourDisplay to match picked Colour
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
    // change colour of squares depending on how many there are
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
            // and hide the others if necessary
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
};

resetButton.addEventListener("click", function () {
    reset();
})

function changeColours(colour) {
    // loop through all squares
    for (let i = 0; i < colours.length; i++) {
        // change each colour to match given colour
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    // pick a random number
    let random = Math.floor(Math.random() * colours.length)
    // use that number to access element from the array at that index
    return colours[random];
}

function generateRandomColours(num) {
    // make an array
    let arr = [];
    // add num random colours to array
    for (let i = 0; i < num; i++) {
        // get random colour and push it into array
        arr.push(randomColour());
    }
    // return that array
    return arr;
}

function randomColour() {
    // pick a "red" from 0 to 255
    let r = Math.floor(Math.random() * 256)
    // pick a "green" from 0 to 255
    let g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 to 255
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}