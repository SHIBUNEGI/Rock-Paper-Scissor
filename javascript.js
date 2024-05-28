let userscore=0;
let compscore=0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userscore");
const compScorePara=document.querySelector("#compscore");
const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const draw=()=>{
    console.log("game was draw");
    msg.innerText="Game Was Draw. Play Again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("you win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScorePara.innerText=compscore;
        console.log("you lose");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"? false:true;
        }else{
            compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }  
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
