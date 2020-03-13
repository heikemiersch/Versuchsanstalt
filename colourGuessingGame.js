let colours = generateRandomColours(6);

// [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]

let squares = document.querySelectorAll(".square");
let pickedColour = pickColour();
let colourDisplay = document.querySelector("#colourDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let numSquares = 6;

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (let i = 0; i < squares.length; i++) {
        if (colours[i]) {
            squares[i].style.background = colours[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colours = generateRandomColours(numSquares);
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colours[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function () {
    // generate all new colours
    colours = generateRandomColours(numSquares);
    // pick a new random colour from array
    pickedColour = pickColour();
    // change colourDisplay to match picked Colour
    colourDisplay.textContent = pickedColour;
    this.textContent = "New Colours";

    messageDisplay.textContent = "";
    // change colour of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.background = "#steelblue";
})

colourDisplay.textContent = pickedColour;

for (let i = 0; i < squares.length; i++) {
    // add initial colours to squares
    squares[i].style.backgroundColor = colours[i];
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

    })
}

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