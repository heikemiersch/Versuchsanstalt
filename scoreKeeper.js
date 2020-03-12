let p1Btn = document.querySelector("#p1");
let p2Btn = document.querySelector("#p2");
let resetBtn = document.querySelector("#reset");
let p1 = document.querySelector("#p1score");
let p2 = document.querySelector("#p2score");
let input = document.querySelector("input");
let playingTo = document.querySelector("p span");
let gameOver = false;
let winningScore = "";

let p1Score = 0;
let p2Score = 0;

// i guess the first two could be drier if i lopped through the buttons and let the function
// work of both of these

p1Btn.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            p1.classList.add("winner");
            gameOver = true;
        }
        p1.textContent = p1Score;
    }
});

p2Btn.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2.classList.add("winner");
            gameOver = true;
        }
        p2.textContent = p2Score;
    }
});

resetBtn.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1.textContent = p1Score;
    p2.textContent = p2Score;
    p1.classList.remove("winner");
    p2.classList.remove("winner");
    gameOver = false;
};

input.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    playingTo.textContent = this.value;
    reset();
});