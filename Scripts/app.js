let bodyTag = document.getElementById("bodyTag");

let playChoice = "";
let maxRound = 0;
let currentRound = 0;
let player1Choice = "";
let player2Choice = "";
let cpu1Choice = "";
let cpu2Choice = "";
let player1Wins = 0;
let player2Wins = 0;

let roundWinScreenTitle = "";
let roundPlayerChoices = "";
let winTitle = "";
let winDetails = "";

TitleScreen();

function TitleScreen(){
    bodyTag.innerHTML = "";

    let startTitle = document.createElement("h1");
    startTitle.className = "startTitle pulse";
    startTitle.textContent = "Rock, Paper, Scissors, Lizard, Spock!";

    bodyTag.appendChild(startTitle);

    let startButton = document.createElement("button");
    startButton.type = "button";
    startButton.className = "startButton btn";
    startButton.textContent = "Start";
    startButton.addEventListener("click", function(){
        StartScreen();
    });

    let startButtonDiv = document.createElement("div");
    startButtonDiv.className = "startButtonDiv";

    startButtonDiv.appendChild(startButton);
    bodyTag.appendChild(startButtonDiv);
}

function StartScreen(){
    bodyTag.innerHTML = "";

    let startTitle = document.createElement("h1");
    startTitle.className = "startTitle pulse";
    startTitle.textContent = "Rock, Paper, Scissors, Lizard, Spock!";

    bodyTag.appendChild(startTitle);

    let playButton = document.createElement("button");
    playButton.type = "button";
    playButton.className = "playButton btn";
    playButton.textContent = "Play";
    playButton.addEventListener("click", function(){
        PlaySelectScreen();
    });

    let playButtonDiv = document.createElement("div");
    playButtonDiv.className = "playButtonDiv";

    playButtonDiv.appendChild(playButton);
    bodyTag.appendChild(playButtonDiv);

    let rulesButton = document.createElement("button");
    rulesButton.type = "button";
    rulesButton.className = "rulesButton btn";
    rulesButton.textContent = "Rules";
    rulesButton.addEventListener("click", function(){
    
    });

    let rulesButtonDiv = document.createElement("div");
    rulesButtonDiv.className = "rulesButtonDiv";

    rulesButtonDiv.appendChild(rulesButton);
    bodyTag.appendChild(rulesButtonDiv);

    let backToTitleButton = document.createElement("button");
    backToTitleButton.type = "button";
    backToTitleButton.className = "backToTitleButton btn";
    backToTitleButton.textContent = "Back To Title";
    backToTitleButton.addEventListener("click", function(){
        TitleScreen();
    });

    let backToTitleButtonDiv = document.createElement("div");
    backToTitleButtonDiv.className = "backToTitleButtonDiv";

    backToTitleButtonDiv.appendChild(backToTitleButton);
    bodyTag.appendChild(backToTitleButtonDiv);
}

function PlaySelectScreen(){
    bodyTag.innerHTML = "";

    let startTitle = document.createElement("h1");
    startTitle.className = "startTitle pulse";
    startTitle.textContent = "Rock, Paper, Scissors, Lizard, Spock!";

    bodyTag.appendChild(startTitle);

    let twoPlayerButton = document.createElement("button");
    twoPlayerButton.type = "button";
    twoPlayerButton.className = "twoPlayerButton btn";
    twoPlayerButton.textContent = "Player VS Player";
    twoPlayerButton.addEventListener("click", function(){
    playChoice = "PvP";
        RoundSelectScreen();
    });

    let twoPlayerButtonDiv = document.createElement("div");
    twoPlayerButtonDiv.className = "twoPlayerButtonDiv";

    twoPlayerButtonDiv.appendChild(twoPlayerButton);
    bodyTag.appendChild(twoPlayerButtonDiv);

    let playeCPUButton = document.createElement("button");
    playeCPUButton.type = "button";
    playeCPUButton.className = "playerCPUButton btn";
    playeCPUButton.textContent = "Player VS CPU";
    playeCPUButton.addEventListener("click", function(){
    playChoice = "PvCPU";
        RoundSelectScreen();
    });

    let playerCPUButtonDiv = document.createElement("div");
    playerCPUButtonDiv.className = "playerCPUButtonDiv";

    playerCPUButtonDiv.appendChild(playeCPUButton);
    bodyTag.appendChild(playerCPUButtonDiv);

    let twoCPUButton = document.createElement("button");
    twoCPUButton.type = "button";
    twoCPUButton.className = "twoCPUButton btn";
    twoCPUButton.textContent = "CPU VS CPU";
    twoCPUButton.addEventListener("click", function(){
    playChoice = "CPUvCPU";
        RoundSelectScreen();
    });

    let twoCPUButtonDiv = document.createElement("div");
    twoCPUButtonDiv.className = "twoCPUButtonDiv";

    twoCPUButtonDiv.appendChild(twoCPUButton);
    bodyTag.appendChild(twoCPUButtonDiv);

    let backToTitleButton = document.createElement("button");
    backToTitleButton.type = "button";
    backToTitleButton.className = "backToTitleButton btn";
    backToTitleButton.textContent = "Back To Title";
    backToTitleButton.addEventListener("click", function(){
        TitleScreen();
    });

    let backToTitleButtonDiv = document.createElement("div");
    backToTitleButtonDiv.className = "backToTitleButtonDiv backToTitlePlaySelectButtonDiv";

    backToTitleButtonDiv.appendChild(backToTitleButton);
    bodyTag.appendChild(backToTitleButtonDiv);
}

function RoundSelectScreen(){
    bodyTag.innerHTML = "";

    let roundScreenTitle = document.createElement("h1");
    roundScreenTitle.className = "roundScreenTitle";
    roundScreenTitle.textContent = "How Many Rounds?";

    bodyTag.appendChild(roundScreenTitle);

    let bestOf1Btn = document.createElement("button");
    bestOf1Btn.type = "button";
    bestOf1Btn.className = "roundScreenBtns btn";
    bestOf1Btn.textContent = "Best Of 1 Round";
    bestOf1Btn.addEventListener("click", function(){
        maxRound = 1;
        currentRound = 0;
        Player1Select();
    });

    let bestOf1Div = document.createElement("div");
    bestOf1Div.className = "roundScreenBtnCols col-4";

    bestOf1Div.appendChild(bestOf1Btn);

    let bestOf5Btn = document.createElement("button");
    bestOf5Btn.type = "button";
    bestOf5Btn.className = "roundScreenBtns btn";
    bestOf5Btn.textContent = "Best Of 5 Rounds";
    bestOf5Btn.addEventListener("click", function(){
        maxRound = 5;
        currentRound = 0;
        Player1Select();
    });

    let bestOf5Div = document.createElement("div");
    bestOf5Div.className = "roundScreenBtnCols col-4";

    bestOf5Div.appendChild(bestOf5Btn);

    let bestOf7Btn = document.createElement("button");
    bestOf7Btn.type = "button";
    bestOf7Btn.className = "roundScreenBtns btn";
    bestOf7Btn.textContent = "Best Of 7 Rounds";
    bestOf7Btn.addEventListener("click", function(){
        maxRound = 7;
        currentRound = 0;
        Player1Select();
    });

    let bestOf7Div = document.createElement("div");
    bestOf7Div.className = "roundScreenBtnCols col-4";

    bestOf7Div.appendChild(bestOf7Btn);

    let roundScreenRow = document.createElement("div");
    roundScreenRow.className = "roundScreenBtnRow row";

    roundScreenRow.appendChild(bestOf1Div);
    roundScreenRow.appendChild(bestOf5Div);
    roundScreenRow.appendChild(bestOf7Div);
    bodyTag.appendChild(roundScreenRow);

    let roundScreenBackBtn = document.createElement("button");
    roundScreenBackBtn.type = "button";
    roundScreenBackBtn.className = "roundScreenBackBtn btn";
    roundScreenBackBtn.textContent = "Back";
    roundScreenBackBtn.addEventListener("click", function(){
        PlaySelectScreen();
    });

    let roundScreenBackBtnDiv = document.createElement("div");
    roundScreenBackBtnDiv.className = "roundScreenBackBtnDiv";

    roundScreenBackBtnDiv.appendChild(roundScreenBackBtn);
    bodyTag.appendChild(roundScreenBackBtnDiv);
}

function Player1Select(){
    bodyTag.innerHTML = "";

    let playerSelectTitle = document.createElement("h1");
    playerSelectTitle.className = "playerSelectTitle";
    playerSelectTitle.textContent = "Player 1 Choose, Player 2 Don't Cheat";

    bodyTag.appendChild(playerSelectTitle);

    let player1ChoiceTitle = document.createElement("h3");
    player1ChoiceTitle.className = "playerChoiceTitles";
    player1ChoiceTitle.textContent = "Player 1:";

    let player1RockBtn = document.createElement("button");
    player1RockBtn.type = "button";
    player1RockBtn.className = "playerOptions btn";
    player1RockBtn.textContent = "Rock";
    player1RockBtn.addEventListener("click", function(){
        player1Choice = "Rock";
        Player2Select();
    });

    let player1PaperBtn = document.createElement("button");
    player1PaperBtn.type = "button";
    player1PaperBtn.className = "playerOptions btn";
    player1PaperBtn.textContent = "Paper";
    player1PaperBtn.addEventListener("click", function(){
        player1Choice = "Paper";
        Player2Select();
    });

    let player1ScissorsBtn = document.createElement("button");
    player1ScissorsBtn.type = "button";
    player1ScissorsBtn.className = "playerOptions btn";
    player1ScissorsBtn.textContent = "Scissors";
    player1ScissorsBtn.addEventListener("click", function(){
        player1Choice = "Scissors";
        Player2Select();
    });

    let player1LizardBtn = document.createElement("button");
    player1LizardBtn.type = "button";
    player1LizardBtn.className = "playerOptions btn";
    player1LizardBtn.textContent = "Lizard";
    player1LizardBtn.addEventListener("click", function(){
        player1Choice = "Lizard";
        Player2Select();
    });

    let player1SpockBtn = document.createElement("button");
    player1SpockBtn.type = "button";
    player1SpockBtn.className = "playerOptions btn";
    player1SpockBtn.textContent = "Spock";
    player1SpockBtn.addEventListener("click", function(){
        player1Choice = "Spock";
        Player2Select();
    });

    let player1SelectDiv = document.createElement("div");
    player1SelectDiv.className = "playerSelectDiv col-4";

    player1SelectDiv.appendChild(player1ChoiceTitle);
    player1SelectDiv.appendChild(player1RockBtn);
    player1SelectDiv.appendChild(player1PaperBtn);
    player1SelectDiv.appendChild(player1ScissorsBtn);
    player1SelectDiv.appendChild(player1LizardBtn);
    player1SelectDiv.appendChild(player1SpockBtn);

    let playerSelectSpaceDiv = document.createElement("div");
    playerSelectSpaceDiv.className = "col-4";

    let player2ChoiceTitle = document.createElement("h3");
    player2ChoiceTitle.className = "playerChoiceTitles";
    player2ChoiceTitle.textContent = "Player 2:";

    let player2Rock = document.createElement("p");
    player2Rock.className = "playerOptionsDeactive";
    player2Rock.textContent = "Rock";

    let player2Paper = document.createElement("p");
    player2Paper.className = "playerOptionsDeactive";
    player2Paper.textContent = "Paper";

    let player2Scissors = document.createElement("p");
    player2Scissors.className = "playerOptionsDeactive";
    player2Scissors.textContent = "Scissors";

    let player2Lizard = document.createElement("p");
    player2Lizard.className = "playerOptionsDeactive";
    player2Lizard.textContent = "Lizard";

    let player2Spock = document.createElement("p");
    player2Spock.className = "playerOptionsDeactive";
    player2Spock.textContent = "Spock";

    let player2SelectDiv = document.createElement("div");
    player2SelectDiv.className = "playerSelectDiv col-4";

    player2SelectDiv.appendChild(player2ChoiceTitle);
    player2SelectDiv.appendChild(player2Rock);
    player2SelectDiv.appendChild(player2Paper);
    player2SelectDiv.appendChild(player2Scissors);
    player2SelectDiv.appendChild(player2Lizard);
    player2SelectDiv.appendChild(player2Spock);

    let player1SelectRow = document.createElement("div");
    player1SelectRow.className = "playerSelectRow row";

    player1SelectRow.appendChild(player1SelectDiv);
    player1SelectRow.appendChild(playerSelectSpaceDiv);
    player1SelectRow.appendChild(player2SelectDiv);
    bodyTag.appendChild(player1SelectRow);
}

function Player2Select() {
    bodyTag.innerHTML = "";

    let playerSelectTitle = document.createElement("h1");
    playerSelectTitle.className = "playerSelectTitle";
    playerSelectTitle.textContent = "Player 2 Choose, Player 1 Don't Cheat";

    bodyTag.appendChild(playerSelectTitle);

    let player1ChoiceTitle = document.createElement("h3");
    player1ChoiceTitle.className = "playerChoiceTitles";
    player1ChoiceTitle.textContent = "Player 1:";

    let player1Rock = document.createElement("p");
    player1Rock.className = "playerOptionsDeactive";
    player1Rock.textContent = "Rock";

    let player1Paper = document.createElement("p");
    player1Paper.className = "playerOptionsDeactive";
    player1Paper.textContent = "Paper";

    let player1Scissors = document.createElement("p");
    player1Scissors.className = "playerOptionsDeactive";
    player1Scissors.textContent = "Scissors";

    let player1Lizard = document.createElement("p");
    player1Lizard.className = "playerOptionsDeactive";
    player1Lizard.textContent = "Lizard";

    let player1Spock = document.createElement("p");
    player1Spock.className = "playerOptionsDeactive";
    player1Spock.textContent = "Spock";

    let player1SelectDiv = document.createElement("div");
    player1SelectDiv.className = "playerSelectDiv col-4";

    player1SelectDiv.appendChild(player1ChoiceTitle);
    player1SelectDiv.appendChild(player1Rock);
    player1SelectDiv.appendChild(player1Paper);
    player1SelectDiv.appendChild(player1Scissors);
    player1SelectDiv.appendChild(player1Lizard);
    player1SelectDiv.appendChild(player1Spock);

    let playerSelectSpaceDiv = document.createElement("div");
    playerSelectSpaceDiv.className = "col-4";

    let player2ChoiceTitle = document.createElement("h3");
    player2ChoiceTitle.className = "playerChoiceTitles";
    player2ChoiceTitle.textContent = "Player 2:";

    let player2RockBtn = document.createElement("button");
    player2RockBtn.type = "button";
    player2RockBtn.className = "playerOptions btn";
    player2RockBtn.textContent = "Rock";
    player2RockBtn.addEventListener("click", function(){
        player2Choice = "Rock";
        RoundWinScreen();
    });

    let player2PaperBtn = document.createElement("button");
    player2PaperBtn.type = "button";
    player2PaperBtn.className = "playerOptions btn";
    player2PaperBtn.textContent = "Paper";
    player2PaperBtn.addEventListener("click", function(){
        player2Choice = "Paper";
        RoundWinScreen();
    });

    let player2ScissorsBtn = document.createElement("button");
    player2ScissorsBtn.type = "button";
    player2ScissorsBtn.className = "playerOptions btn";
    player2ScissorsBtn.textContent = "Scissors";
    player2ScissorsBtn.addEventListener("click", function(){
        player2Choice = "Scissors";
        RoundWinScreen();
    });

    let player2LizardBtn = document.createElement("button");
    player2LizardBtn.type = "button";
    player2LizardBtn.className = "playerOptions btn";
    player2LizardBtn.textContent = "Lizard";
    player2LizardBtn.addEventListener("click", function(){
        player2Choice = "Lizard";
        RoundWinScreen();
    });

    let player2SpockBtn = document.createElement("button");
    player2SpockBtn.type = "button";
    player2SpockBtn.className = "playerOptions btn";
    player2SpockBtn.textContent = "Spock";
    player2SpockBtn.addEventListener("click", function(){
        player2Choice = "Spock";
        RoundWinScreen();
    });

    let player2SelectDiv = document.createElement("div");
    player2SelectDiv.className = "playerSelectDiv col-4";

    player2SelectDiv.appendChild(player2ChoiceTitle);
    player2SelectDiv.appendChild(player2RockBtn);
    player2SelectDiv.appendChild(player2PaperBtn);
    player2SelectDiv.appendChild(player2ScissorsBtn);
    player2SelectDiv.appendChild(player2LizardBtn);
    player2SelectDiv.appendChild(player2SpockBtn);

    let player2SelectRow = document.createElement("div");
    player2SelectRow.className = "playerSelectRow row";

    player2SelectRow.appendChild(player1SelectDiv);
    player2SelectRow.appendChild(playerSelectSpaceDiv);
    player2SelectRow.appendChild(player2SelectDiv);
    bodyTag.appendChild(player2SelectRow);
}

function RoundWinScreen() {
    if(player1Choice === "Rock"){
        if(player2Choice === "Rock"){
            roundWinScreenTitle = "It's A Tie!";
            roundPlayerChoices = "Rock Ties With Rock";
        }else if(player2Choice === "Paper"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Paper Covers Rock";
            player2Wins++;
        }else if(player2Choice === "Scissors"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Rock Crushes Scissors";
            player1Wins++;
        }else if(player2Choice === "Lizard"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Rock Crushes Lizard";
            player1Wins++;
        }else if(player2Choice === "Spock"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Spock Vaporizes Rock";
            player2Wins++;
        }
    }else if (player1Choice === "Paper"){
        if(player2Choice === "Rock"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Paper Covers Rock";
            player1Wins++;
        }else if(player2Choice === "Paper"){
            roundWinScreenTitle = "It's A Tie!";
            roundPlayerChoices = "Paper Ties With Paper";
        }else if(player2Choice === "Scissors"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Scissors Cuts Paper";
            player2Wins++;
        }else if(player2Choice === "Lizard"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Lizard Eats Paper";
            player2Wins++;
        }else if(player2Choice === "Spock"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Paper Disproves Spock";
            player1Wins++;
        }
    }else if (player1Choice === "Scissors"){
        if(player2Choice === "Rock"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Rock Crushes Scissors";
            player2Wins++;
        }else if(player2Choice === "Paper"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Scissors Cuts Paper";
            player1Wins++;
        }else if(player2Choice === "Scissors"){
            roundWinScreenTitle = "It's A Tie!";
            roundPlayerChoices = "Scissors Ties With Scissors";
        }else if(player2Choice === "Lizard"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Scissors Decapitates Lizard";
            player1Wins++;
        }else if(player2Choice === "Spock"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Spock Smashes Scissors";
            player2Wins++;
        }
    }else if (player1Choice === "Lizard"){
        if(player2Choice === "Rock"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Rock Crushes Lizard";
            player2Wins++;
        }else if(player2Choice === "Paper"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Lizard Eats Paper";
            player1Wins++;
        }else if(player2Choice === "Scissors"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Scissors Decapitates Lizard";
            player2Wins++;
        }else if(player2Choice === "Lizard"){
            roundWinScreenTitle = "It's A Tie!";
            roundPlayerChoices = "Lizard Ties With Lizard";
        }else if(player2Choice === "Spock"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Lizard Poisons Spock";
            player1Wins++;
        }
    }else if (player1Choice === "Spock"){
        if(player2Choice === "Rock"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Spock Vaporizes Rock";
            player1Wins++;
        }else if(player2Choice === "Paper"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Paper Disproves Spock";
            player2Wins++;
        }else if(player2Choice === "Scissors"){
            roundWinScreenTitle = "Player 1 Takes This Round!";
            roundPlayerChoices = "Spock Smashes Scissors";
            player1Wins++;
        }else if(player2Choice === "Lizard"){
            roundWinScreenTitle = "Player 2 Takes This Round!";
            roundPlayerChoices = "Lizard Poisons Spock";
            player2Wins++;
        }else if(player2Choice === "Spock"){
            roundWinScreenTitle = "It's A Tie!";
            roundPlayerChoices = "Spock Ties With Spock";
        }
    }

    bodyTag.innerHTML = "";

    let roundWinTitle = document.createElement("h1");
    roundWinTitle.className = "roundWinTitle";
    roundWinTitle.textContent = roundWinScreenTitle;

    bodyTag.appendChild(roundWinTitle);

    let roundWinDetails = document.createElement("h1");
    roundWinDetails.className = "roundWinDetails";
    roundWinDetails.textContent = roundPlayerChoices;

    bodyTag.appendChild(roundWinDetails);

    let roundScore = document.createElement("h1");
    roundScore.className = "roundScore";
    roundScore.textContent = player1Wins + " : " + player2Wins;

    bodyTag.appendChild(roundScore);

    let nextRoundButton = document.createElement("button");
    nextRoundButton.type = "button";
    nextRoundButton.className = "nextRoundBtn btn pulse";
    nextRoundButton.textContent = "Next Round";
    nextRoundButton.addEventListener("click", function(){
        currentRound++;
        if(currentRound < maxRound){
            Player1Select();
        }else{
            WinScreen();
        }
    });

    let nextRoundButtonDiv = document.createElement("div");
    nextRoundButtonDiv.className = "nextRoundDiv";

    nextRoundButtonDiv.appendChild(nextRoundButton);
    bodyTag.appendChild(nextRoundButtonDiv);

}

function WinScreen(){
    bodyTag.innerHTML = "";

    if(player1Wins > player2Wins) { 
        winTitle = "Player 1 Wins!"; 
        winDetails = "As He Should";
    } else if(player1Wins < player2Wins) { 
        winTitle = "Player 2 Wins!"; 
        winDetails = "Next Time, They Get To Be Player 1"
    } else { 
        winTitle = "It Was A Tie!"; 
        winDetails = "You Both Are Either Really Good Or Really Bad";
    }



    let winScreenTitle = document.createElement("h1");
    winScreenTitle.className = "winScreenTitle";
    winScreenTitle.textContent = winTitle;

    bodyTag.appendChild(winScreenTitle);

    let winScreenDetails = document.createElement("h1");
    winScreenDetails.className = "winScreenDetails";
    winScreenDetails.textContent = winDetails;

    bodyTag.appendChild(winScreenDetails);

    let finalScore = document.createElement("h1");
    finalScore.className = "finalScore";
    finalScore.textContent = player1Wins + " : " + player2Wins;

    bodyTag.appendChild(finalScore);

    let winBackToStartBtn = document.createElement("button");
    winBackToStartBtn.type = "button";
    winBackToStartBtn.className = "winBackToStartBtn btn pulse";
    winBackToStartBtn.textContent = "Back To Start";
    winBackToStartBtn.addEventListener("click", function(){
        StartScreen();
    });

    let winBackToStartBtnDiv = document.createElement("div");
    winBackToStartBtnDiv.className = "winBackToStartBtnDiv";

    winBackToStartBtnDiv.appendChild(winBackToStartBtn);
    bodyTag.appendChild(winBackToStartBtnDiv);
}
