let userScore = 0,
    computerScore = 0;

const userScore_span = document.getElementById("user-score"),
    computerScore_span = document.getElementById("computer-score"),
    scoreBoard_div = document.querySelector(".score-board"),
    result_div = document.querySelector(".result p"),
    rock_div = document.querySelector("#r"),
    paper_div = document.getElementById("p"),
    scissors_div = document.getElementById("s"),
    rock_img = document.querySelector("#r img"),
    paper_img = document.querySelector("#p img"),
    scissors_img = document.querySelector("#s img");

    document.addEventListener("DOMContentLoaded", ()=>{
        alert("WELCOME. GAME TO 10 POINTS. GOOD LUCK!🍀")
    })


    function getComputerChoice(){
        const choices = ['r', 'p', 's'];
        let randomNumber = Math.floor(Math.random() * choices.length);
        return choices[randomNumber];
    }

    function convertToWord(letter){
        if(letter === "r") return "Rock🗿";
        if(letter === "p") return "Paper🧻";
        if(letter === "s") return "Scissors✂️";
    }

    function game(userChoice){
        const computerChoice = getComputerChoice();
        switch(userChoice + computerChoice){
            case "rs":
            case "pr":
            case "sp":
                win(userChoice, computerChoice);
                break;

            case "ps":
            case "rp":
            case "sr":
                lose(userChoice, computerChoice);
                break;

            case "pp":
            case "rr":
            case "ss":
                draw(userChoice, computerChoice);
                break;
        }
    }

    function main(){

        rock_div.addEventListener('click', () => {game("r");});
        

        paper_div.addEventListener('click', () => {game("p")});

        
        scissors_div.addEventListener('click', () => {game("s")});
   
    }


    main();





function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerText = userScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUser + " beats " + convertToWord(computerChoice) + smallComputer + ". You won!🔥";

    let newObj = transformation(userChoice);
    newObj.classList.add("green-glow");
    newObj.style.border = "4px solid #4dcc7d";
    console.log(newObj);

    setTimeout(()=>{
        newObj.classList.remove("green-glow");
        newObj.style.border = "4px solid white"
    }, 1000);

    if(userScore >= 10){
        alert("USER WON⚔️");
        userScore = 0;
        computerScore = 0;
        userScore_span.innerText = userScore;
        computerScore_span.innerText = computerScore;
    }
};


function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerText = computerScore;
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUser + " loses to... " + convertToWord(computerChoice) + smallComputer + ". You lost!💩";

    let newObj = transformation(userChoice);
    newObj.classList.add("red-glow");
    newObj.style.border = "4px solid #fc121b";
    console.log(newObj);

    setTimeout(()=>{
        newObj.classList.remove("red-glow");
        newObj.style.border = "4px solid white"
    }, 1000);

    if(computerScore >= 10){
        alert("COMPUTER WON⚔️");
        userScore = 0;
        computerScore = 0;
        userScore_span.innerText = userScore;
        computerScore_span.innerText = computerScore;
    }
};


function draw(userChoice, computerChoice){
    const smallUser = "user".fontsize(3).sub();
    const smallComputer = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUser + " equal to... " + convertToWord(computerChoice) + smallComputer + ". DRAW!";

    let newObj = transformation(userChoice);
    newObj.classList.add("grey-glow");
    newObj.style.border = "4px solid #999";
    console.log(newObj);

    setTimeout(()=>{
        newObj.classList.remove("grey-glow");
        newObj.style.border = "4px solid white"
    }, 1000);
};


function transformation(userChoice){
    if(userChoice == "r") return userChoice = rock_img;
    if(userChoice == "p") return userChoice = paper_img;
    if(userChoice == "s") return userChoice = scissors_img;
}


