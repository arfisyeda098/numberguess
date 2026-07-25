let randomNum = Math.floor(Math.random() * 10) + 1;
let attempts = 5;
let gameActive = true;

let btn = document.getElementById("guessBtn");
let restartBtn = document.getElementById("restartBtn2");

btn.addEventListener("click", function () {
    if (!gameActive) return;

    let input = document.getElementById("userInput");
    let guess = parseInt(input.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        document.getElementById("message").innerText = "Enter number 1-10!";
        return;
    }

    input.value = "";

    
    if (guess === randomNum) {
        document.body.style.background = "linear-gradient(135deg, #00c853, #b2ff59)";

        let message = document.getElementById("message");
        message.innerText = "🎉 YOU WIN!";
        message.style.fontSize = "28px";
        message.style.fontWeight = "bold";

        
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });

        
        document.getElementById("winSound").play();

        btn.disabled = true;
        restartBtn.classList.remove("hidden");
        gameActive = false;

    } 
    else {
        attempts--;
        document.getElementById("attemptsLeft").innerText = attempts;

        if (attempts === 0) {
            document.body.style.background = "linear-gradient(135deg, #000000, #434343)";

            document.getElementById("message").innerText =
                "💀 Game Over! Number was " + randomNum;

            document.getElementById("loseSound").play();

            btn.disabled = true;
            restartBtn.classList.remove("hidden");
            gameActive = false;

        } 
        else if (guess < randomNum) {
            document.getElementById("message").innerText = "Too Low 📉";
        } 
        else {
            document.getElementById("message").innerText = "Too High 📈";
        }
    }
});

restartBtn.addEventListener("click", function () {
    randomNum = Math.floor(Math.random() * 10) + 1;
    attempts = 5;
    gameActive = true;

    document.body.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
    document.getElementById("message").innerText = "";
    document.getElementById("attemptsLeft").innerText = 5;
    document.getElementById("userInput").value = "";

    btn.disabled = false;
    restartBtn.classList.add("hidden");
});