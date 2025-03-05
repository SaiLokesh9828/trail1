const choices = document.querySelectorAll(".choice");
const Messagedisplay = document.getElementById("message");
const userchoicedisplay=document.getElementById("user-choice");
const computerchoicedisplay = document.getElementById("computer-choice");
const displaywinner = document.getElementById("winner");

const options = ['rock','paper','scissors'];

function getwinner (userchoice,computerChoice) {
    if (userchoice==computerChoice) {
        return "It's a tie !";
    } else if ((userchoice == "rock" && computerChoice=="scissors")||
                (userchoice=="paper" && computerChoice=="rock") ||
                (userchoice=="scissors" && computerChoice=="paper")
                ) {
                    return "You won!"
                }
     else {
        return "You Lose!"
     }
    }

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        const userChoice=choice.id;
        userchoicedisplay.innerHTML= `You Chose: ${userChoice}`;
        const computerChoice=options[Math.floor(Math.random()*3)];
        computerchoicedisplay.innerHTML=`Computer chose : ${computerChoice}`;
        winner = getwinner(userChoice,computerChoice);
        displaywinner.innerHTML= winner;
    });
});
