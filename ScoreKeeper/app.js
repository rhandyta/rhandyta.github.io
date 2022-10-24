const p1 = {
    score: 0,
    button: document.querySelector("#p1Btn"),
    display: document.querySelector("#p1DisplayScore"),
};
const p2 = {
    score: 0,
    button: document.querySelector("#p2Btn"),
    display: document.querySelector("#p2DisplayScore"),
};

const stringGoal = ["G", "O", "A", "L"];
const stringMiss = ["M", "I", "S", "S"];
const resetBtn = document.querySelector("#reset");
const maxScore = document.querySelector("#playingto");
const goal = document.querySelectorAll("i");

let winningScore = 3;
let isGameOver = false;

maxScore.addEventListener("change", (e) => {
    winningScore = parseInt(e.target.value);
    reset();
});

function updateScore(player, opponent) {
    if (!isGameOver) {
        let randScore = Math.floor(Math.random() * 10) + 1;
        count();
        setTimeout(() => {
            if (randScore >= 7) {
                for (let i = 0; i < stringGoal.length; i++) {
                    goal[i].setAttribute("data-final", `${stringGoal[i]}`);
                    goal[i].setAttribute("class", `goal`);
                }
                player.score += 1;
                if (player.score === winningScore) {
                    isGameOver = true;
                    player.display.style.color = "rgb(50, 150, 50)";
                    opponent.display.style.color = "#E83434";
                    player.button.disabled = true;
                    opponent.button.disabled = true;
                } else {
                    p1.button.disabled = false;
                    p2.button.disabled = false;
                }
                player.display.textContent = player.score;
            } else {
                for (let i = 0; i < stringGoal.length; i++) {
                    goal[i].setAttribute("data-final", `${stringMiss[i]}`);
                    goal[i].setAttribute("class", `miss`);
                }
                p1.button.disabled = false;
                p2.button.disabled = false;
                return false;
            }
        }, 1000);
    }
}

function buttonOff() {
    p2.button.disabled = true;
    p1.button.disabled = true;
}

p1.button.addEventListener("click", function (e) {
    buttonOff();
    updateScore(p1, p2);
});
p2.button.addEventListener("click", function (e) {
    buttonOff();
    updateScore(p2, p1);
});

function result() {}

resetBtn.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for (let i of goal) {
        i.setAttribute("class", "resultNone");
    }
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.style.color = "#463f3d";
        p.button.disabled = false;
    }
}

function count() {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var string = numbers + letters;
    var allCounters = document.querySelectorAll(".counter > i");

    allCounters.forEach(function (el) {
        duration = 1000 + Array.from(allCounters).indexOf(el) * 1000;
        var interval = setInterval(function () {
            //console.log(duration);
            if (duration > 0) {
                el.innerText = string.charAt(Math.random() * string.length);
                duration = duration - 50;
            } else {
                clearInterval(interval);
                el.innerText = el.getAttribute("data-final");
            }
        }, 50);
    });
}
