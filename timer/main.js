let input = document.querySelector("input");
let countdown = document.querySelector("span");


input.addEventListener("change", function () {
    console.log(input.value);
    countdown.textContent = input.value;
})

function activateCountdown() {
    let seconds = document.querySelector("#countdown").textContent;
    // console.log("clicked GO");
    let lala = setInterval(function () {
        seconds--;
        // console.log(lala);
        document.querySelector("#countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(lala);
    }, 1000)
}