let userScore = 0;
let userComputer = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreNum = document.querySelector("#user-score");
let compScoreNum = document.querySelector("#comp-score");




const genCompChoice = () =>{
    // rock ,paper,scissors
    const options = ["rock","paper","scissors"];
    const randomIendx = Math.floor(Math.random() * 3);
    return options[randomIendx]
};




const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        //true
        userScore++;
        userScoreNum.innerText = userScore;
        msg.innerText = `you win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        userComputer++;
        compScoreNum.innerText = userComputer;
        msg.innerText = `you lose ! ${compChoice} beats  your   ${userChoice}`;
        msg.style.backgroundColor = "crimson";
    }
}



const playGame = (userChoice,) =>{
    // console.log("your choice was click",userChoice)
    // generate computer choices ->modular way of programming
    const compChoice = genCompChoice()
    // console.log("computer choice was click",compChoice)
    if(userChoice === compChoice){
        msg.innerText = "Draw";
        msg.style.backgroundColor = "gold";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
        // paper,scissors
        userWin = compChoice === "paper" ? false : true;
        }else if(userChoice == "paper"){
            // rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    });
});
