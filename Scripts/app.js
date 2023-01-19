let bodyTag = document.getElementById("bodyTag");

let myModal = document.getElementById("staticBackdrop");

let playChoice = "";
let maxRound = 0;
let currentRound = 0;
let winBreak = 0;
let player1Choice = "";
let player2Choice = "";
let cpuPlaceHolder1 = "";
let cpuPlaceHolder2 = "";
let cpu1Choice = "";
let cpu2Choice = "";
let player1Wins = 0;
let player2Wins = 0;
let cpu1Wins = 0;
let cpu2Wins = 0;

let roundWinScreenTitle = "";
let roundPlayerChoices = "";
let winTitle = "";
let winDetails = "";

TitleScreen();

function GetCPU1() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption").then(
        response => response.text()
    ).then(
        data => {
            cpuPlaceHolder1 = data;
        }
    )
}

function GetCPU2() {
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption").then(
        response => response.text()
    ).then(
        data => {
            cpuPlaceHolder2 = data;
        }
    )
}

function TitleScreen() {
    bodyTag.innerHTML = "";

    let startTitle = document.createElement("h1");
    startTitle.className = "startTitle pulse";
    startTitle.textContent = "Rock, Paper, Scissors, Lizard, Spock!";

    bodyTag.appendChild(startTitle);

    let startButton = document.createElement("button");
    startButton.type = "button";
    startButton.className = "startButton btn";
    startButton.textContent = "Start";
    startButton.addEventListener("click", function () {
        StartScreen();
    });

    let startButtonDiv = document.createElement("div");
    startButtonDiv.className = "startButtonDiv";

    startButtonDiv.appendChild(startButton);
    bodyTag.appendChild(startButtonDiv);
}

function StartScreen() {
    bodyTag.innerHTML = "";

    let startTitle = document.createElement("h1");
    startTitle.className = "startTitle pulse";
    startTitle.textContent = "Rock, Paper, Scissors, Lizard, Spock!";

    bodyTag.appendChild(startTitle);

    let playButton = document.createElement("button");
    playButton.type = "button";
    playButton.className = "playButton btn";
    playButton.textContent = "Play";
    playButton.addEventListener("click", function () {
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
    rulesButton.addEventListener("click", function () {
        RulesScreen();
    });

    let rulesButtonDiv = document.createElement("div");
    rulesButtonDiv.className = "rulesButtonDiv";

    rulesButtonDiv.appendChild(rulesButton);
    bodyTag.appendChild(rulesButtonDiv);

    let backToTitleButton = document.createElement("button");
    backToTitleButton.type = "button";
    backToTitleButton.className = "backToTitleButton btn";
    backToTitleButton.textContent = "Back To Title";
    backToTitleButton.addEventListener("click", function () {
        TitleScreen();
    });

    let backToTitleButtonDiv = document.createElement("div");
    backToTitleButtonDiv.className = "backToTitleButtonDiv";

    backToTitleButtonDiv.appendChild(backToTitleButton);
    bodyTag.appendChild(backToTitleButtonDiv);
}

function RulesScreen() {
    bodyTag.innerHTML = "";

    let ruleTitle = document.createElement("h1");
    ruleTitle.className = "ruleScreenTitle";
    ruleTitle.textContent = "Rules";

    bodyTag.appendChild(ruleTitle);

    let br = document.createElement("br");

    let ruleTxt = document.createElement("p");
    ruleTxt.className = "ruleScreenTxt";
    ruleTxt.textContent = "Scissors cuts Paper \n Paper covers Rock \n Rock crushes Lizard \n Lizard poisons Spock \n Spock smashes Scissors \n Scissors decapitates Lizard \n Lizard eats Paper \n Paper disproves Spock \n Spock vaporizes Rock \n Rock crushes Scissors \n";

    bodyTag.appendChild(ruleTxt);

    let backToStartButton = document.createElement("button");
    backToStartButton.type = "button";
    backToStartButton.className = "ruleBackToStartButton btn pulse";
    backToStartButton.textContent = "Back To Start";
    backToStartButton.addEventListener("click", function () {
        StartScreen();
    });

    let backToStartButtonDiv = document.createElement("div");
    backToStartButtonDiv.className = "ruleBackToStartButtonDiv";

    backToStartButtonDiv.appendChild(backToStartButton);
    bodyTag.appendChild(backToStartButtonDiv);
}

function PlaySelectScreen() {
    bodyTag.innerHTML = "";

    let startTitle = document.createElement("h1");
    startTitle.className = "startTitle pulse";
    startTitle.textContent = "Rock, Paper, Scissors, Lizard, Spock!";

    bodyTag.appendChild(startTitle);

    let twoPlayerButton = document.createElement("button");
    twoPlayerButton.type = "button";
    twoPlayerButton.className = "twoPlayerButton btn";
    twoPlayerButton.textContent = "Player VS Player";
    twoPlayerButton.addEventListener("click", function () {
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
    playeCPUButton.addEventListener("click", function () {
        playChoice = "PvCPU";
        GetCPU1();
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
    twoCPUButton.addEventListener("click", function () {
        playChoice = "CPUvCPU";
        GetCPU1();
        cpu1Choice = cpuPlaceHolder1;
        GetCPU2();
        cpu2Choice = cpuPlaceHolder2;
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
    backToTitleButton.addEventListener("click", function () {
        TitleScreen();
    });

    let backToTitleButtonDiv = document.createElement("div");
    backToTitleButtonDiv.className = "backToTitleButtonDiv backToTitlePlaySelectButtonDiv";

    backToTitleButtonDiv.appendChild(backToTitleButton);
    bodyTag.appendChild(backToTitleButtonDiv);
}

function RoundSelectScreen() {
    bodyTag.innerHTML = "";

    let roundScreenTitle = document.createElement("h1");
    roundScreenTitle.className = "roundScreenTitle";
    roundScreenTitle.textContent = "How Many Rounds?";

    bodyTag.appendChild(roundScreenTitle);

    let bestOf1Btn = document.createElement("button");
    bestOf1Btn.type = "button";
    bestOf1Btn.className = "roundScreenBtns btn";
    bestOf1Btn.textContent = "Best Of 1 Round";
    bestOf1Btn.addEventListener("click", function () {
        maxRound = 1;
        currentRound = 0;
        winBreak = 1;
        if (playChoice === "PvP") { PVPPlayer1Select(); }
        else if (playChoice === "PvCPU") { PVCPUPlayerSelect(); }
        else if (playChoice === "CPUvCPU") { RoundWinScreen(); }
    });

    let bestOf1Div = document.createElement("div");
    bestOf1Div.className = "roundScreenBtnCols col-4";

    bestOf1Div.appendChild(bestOf1Btn);

    let bestOf5Btn = document.createElement("button");
    bestOf5Btn.type = "button";
    bestOf5Btn.className = "roundScreenBtns btn";
    bestOf5Btn.textContent = "Best Of 5 Rounds";
    bestOf5Btn.addEventListener("click", function () {
        maxRound = 5;
        currentRound = 0;
        winBreak = 3;
        if (playChoice === "PvP") { PVPPlayer1Select(); }
        else if (playChoice === "PvCPU") { PVCPUPlayerSelect(); }
        else if (playChoice === "CPUvCPU") { RoundWinScreen(); }
    });

    let bestOf5Div = document.createElement("div");
    bestOf5Div.className = "roundScreenBtnCols col-4";

    bestOf5Div.appendChild(bestOf5Btn);

    let bestOf7Btn = document.createElement("button");
    bestOf7Btn.type = "button";
    bestOf7Btn.className = "roundScreenBtns btn";
    bestOf7Btn.textContent = "Best Of 7 Rounds";
    bestOf7Btn.addEventListener("click", function () {
        maxRound = 7;
        currentRound = 0;
        winBreak = 4;
        if (playChoice === "PvP") { PVPPlayer1Select(); }
        else if (playChoice === "PvCPU") { PVCPUPlayerSelect(); }
        else if (playChoice === "CPUvCPU") { RoundWinScreen(); }
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
    roundScreenBackBtn.addEventListener("click", function () {
        PlaySelectScreen();
    });

    let roundScreenBackBtnDiv = document.createElement("div");
    roundScreenBackBtnDiv.className = "roundScreenBackBtnDiv";

    roundScreenBackBtnDiv.appendChild(roundScreenBackBtn);
    bodyTag.appendChild(roundScreenBackBtnDiv);
}

function PVPPlayer1Select() {
    bodyTag.innerHTML = "";

    let playerSelectTitle = document.createElement("h1");
    playerSelectTitle.className = "playerSelectTitlePVP";
    playerSelectTitle.textContent = "Player 1 Choose, Player 2 Don't Cheat";

    bodyTag.appendChild(playerSelectTitle);

    let player1ChoiceTitle = document.createElement("h3");
    player1ChoiceTitle.className = "playerChoiceTitlesPVP";
    player1ChoiceTitle.textContent = "Player 1:";

    let player1RockBtn = document.createElement("button");
    player1RockBtn.type = "button";
    player1RockBtn.className = "playerOptionsPVP btn";
    player1RockBtn.textContent = "Rock";
    player1RockBtn.addEventListener("click", function () {
        player1Choice = "Rock";
        PVPPlayer2Select();
    });

    let player1PaperBtn = document.createElement("button");
    player1PaperBtn.type = "button";
    player1PaperBtn.className = "playerOptionsPVP btn";
    player1PaperBtn.textContent = "Paper";
    player1PaperBtn.addEventListener("click", function () {
        player1Choice = "Paper";
        PVPPlayer2Select();
    });

    let player1ScissorsBtn = document.createElement("button");
    player1ScissorsBtn.type = "button";
    player1ScissorsBtn.className = "playerOptionsPVP btn";
    player1ScissorsBtn.textContent = "Scissors";
    player1ScissorsBtn.addEventListener("click", function () {
        player1Choice = "Scissors";
        PVPPlayer2Select();
    });

    let player1LizardBtn = document.createElement("button");
    player1LizardBtn.type = "button";
    player1LizardBtn.className = "playerOptionsPVP btn";
    player1LizardBtn.textContent = "Lizard";
    player1LizardBtn.addEventListener("click", function () {
        player1Choice = "Lizard";
        PVPPlayer2Select();
    });

    let player1SpockBtn = document.createElement("button");
    player1SpockBtn.type = "button";
    player1SpockBtn.className = "playerOptionsPVP btn";
    player1SpockBtn.textContent = "Spock";
    player1SpockBtn.addEventListener("click", function () {
        player1Choice = "Spock";
        PVPPlayer2Select();
    });

    let player1SelectDiv = document.createElement("div");
    player1SelectDiv.className = "playerSelectDivPVP col-4";

    player1SelectDiv.appendChild(player1ChoiceTitle);
    player1SelectDiv.appendChild(player1RockBtn);
    player1SelectDiv.appendChild(player1PaperBtn);
    player1SelectDiv.appendChild(player1ScissorsBtn);
    player1SelectDiv.appendChild(player1LizardBtn);
    player1SelectDiv.appendChild(player1SpockBtn);

    let playerSelectSpaceDiv = document.createElement("div");
    playerSelectSpaceDiv.className = "col-4";

    let player2ChoiceTitle = document.createElement("h3");
    player2ChoiceTitle.className = "playerChoiceTitlesPVP";
    player2ChoiceTitle.textContent = "Player 2:";

    let player2Rock = document.createElement("p");
    player2Rock.className = "playerOptionsDeactivePVP";
    player2Rock.textContent = "Rock";

    let player2Paper = document.createElement("p");
    player2Paper.className = "playerOptionsDeactivePVP";
    player2Paper.textContent = "Paper";

    let player2Scissors = document.createElement("p");
    player2Scissors.className = "playerOptionsDeactivePVP";
    player2Scissors.textContent = "Scissors";

    let player2Lizard = document.createElement("p");
    player2Lizard.className = "playerOptionsDeactivePVP";
    player2Lizard.textContent = "Lizard";

    let player2Spock = document.createElement("p");
    player2Spock.className = "playerOptionsDeactivePVP";
    player2Spock.textContent = "Spock";

    let player2SelectDiv = document.createElement("div");
    player2SelectDiv.className = "playerSelectDivPVP col-4";

    player2SelectDiv.appendChild(player2ChoiceTitle);
    player2SelectDiv.appendChild(player2Rock);
    player2SelectDiv.appendChild(player2Paper);
    player2SelectDiv.appendChild(player2Scissors);
    player2SelectDiv.appendChild(player2Lizard);
    player2SelectDiv.appendChild(player2Spock);

    let player1SelectRow = document.createElement("div");
    player1SelectRow.className = "playerSelectRowPVP row";

    player1SelectRow.appendChild(player1SelectDiv);
    player1SelectRow.appendChild(playerSelectSpaceDiv);
    player1SelectRow.appendChild(player2SelectDiv);
    bodyTag.appendChild(player1SelectRow);
}

function PVPPlayer2Select() {
    bodyTag.innerHTML = "";

    let playerSelectTitle = document.createElement("h1");
    playerSelectTitle.className = "playerSelectTitlePVP";
    playerSelectTitle.textContent = "Player 2 Choose, Player 1 Don't Cheat";

    bodyTag.appendChild(playerSelectTitle);

    let player1ChoiceTitle = document.createElement("h3");
    player1ChoiceTitle.className = "playerChoiceTitlesPVP";
    player1ChoiceTitle.textContent = "Player 1:";

    let player1Rock = document.createElement("p");
    player1Rock.className = "playerOptionsDeactivePVP";
    player1Rock.textContent = "Rock";

    let player1Paper = document.createElement("p");
    player1Paper.className = "playerOptionsDeactivePVP";
    player1Paper.textContent = "Paper";

    let player1Scissors = document.createElement("p");
    player1Scissors.className = "playerOptionsDeactivePVP";
    player1Scissors.textContent = "Scissors";

    let player1Lizard = document.createElement("p");
    player1Lizard.className = "playerOptionsDeactivePVP";
    player1Lizard.textContent = "Lizard";

    let player1Spock = document.createElement("p");
    player1Spock.className = "playerOptionsDeactivePVP";
    player1Spock.textContent = "Spock";

    let player1SelectDiv = document.createElement("div");
    player1SelectDiv.className = "playerSelectDivPVP col-4";

    player1SelectDiv.appendChild(player1ChoiceTitle);
    player1SelectDiv.appendChild(player1Rock);
    player1SelectDiv.appendChild(player1Paper);
    player1SelectDiv.appendChild(player1Scissors);
    player1SelectDiv.appendChild(player1Lizard);
    player1SelectDiv.appendChild(player1Spock);

    let playerSelectSpaceDiv = document.createElement("div");
    playerSelectSpaceDiv.className = "col-4";

    let player2ChoiceTitle = document.createElement("h3");
    player2ChoiceTitle.className = "playerChoiceTitlesPVP";
    player2ChoiceTitle.textContent = "Player 2:";

    let player2RockBtn = document.createElement("button");
    player2RockBtn.type = "button";
    player2RockBtn.className = "playerOptionsPVP btn";
    player2RockBtn.textContent = "Rock";
    player2RockBtn.addEventListener("click", function () {
        player2Choice = "Rock";
        RoundWinScreen();
    });

    let player2PaperBtn = document.createElement("button");
    player2PaperBtn.type = "button";
    player2PaperBtn.className = "playerOptionsPVP btn";
    player2PaperBtn.textContent = "Paper";
    player2PaperBtn.addEventListener("click", function () {
        player2Choice = "Paper";
        RoundWinScreen();
    });

    let player2ScissorsBtn = document.createElement("button");
    player2ScissorsBtn.type = "button";
    player2ScissorsBtn.className = "playerOptionsPVP btn";
    player2ScissorsBtn.textContent = "Scissors";
    player2ScissorsBtn.addEventListener("click", function () {
        player2Choice = "Scissors";
        RoundWinScreen();
    });

    let player2LizardBtn = document.createElement("button");
    player2LizardBtn.type = "button";
    player2LizardBtn.className = "playerOptionsPVP btn";
    player2LizardBtn.textContent = "Lizard";
    player2LizardBtn.addEventListener("click", function () {
        player2Choice = "Lizard";
        RoundWinScreen();
    });

    let player2SpockBtn = document.createElement("button");
    player2SpockBtn.type = "button";
    player2SpockBtn.className = "playerOptionsPVP btn";
    player2SpockBtn.textContent = "Spock";
    player2SpockBtn.addEventListener("click", function () {
        player2Choice = "Spock";
        RoundWinScreen();
    });

    let player2SelectDiv = document.createElement("div");
    player2SelectDiv.className = "playerSelectDivPVP col-4";

    player2SelectDiv.appendChild(player2ChoiceTitle);
    player2SelectDiv.appendChild(player2RockBtn);
    player2SelectDiv.appendChild(player2PaperBtn);
    player2SelectDiv.appendChild(player2ScissorsBtn);
    player2SelectDiv.appendChild(player2LizardBtn);
    player2SelectDiv.appendChild(player2SpockBtn);

    let player2SelectRow = document.createElement("div");
    player2SelectRow.className = "playerSelectRowPVP row";

    player2SelectRow.appendChild(player1SelectDiv);
    player2SelectRow.appendChild(playerSelectSpaceDiv);
    player2SelectRow.appendChild(player2SelectDiv);
    bodyTag.appendChild(player2SelectRow);
}

function PVCPUPlayerSelect() {
    cpu1Choice = cpuPlaceHolder1;
    bodyTag.innerHTML = "";

    let playerSelectTitle = document.createElement("h1");
    playerSelectTitle.className = "playerSelectTitlePVCPU";
    playerSelectTitle.textContent = "Human Choose Now";

    bodyTag.appendChild(playerSelectTitle);

    let playerChoiceTitle = document.createElement("h3");
    playerChoiceTitle.className = "playerChoiceTitlePVCPU";
    playerChoiceTitle.textContent = "Player 1:";

    let player1RockBtn = document.createElement("button");
    player1RockBtn.type = "button";
    player1RockBtn.className = "playerOptionsPVCPU btn";
    player1RockBtn.textContent = "Rock";
    player1RockBtn.addEventListener("click", function () {
        player1Choice = "Rock";
        RoundWinScreen();
    });

    let player1PaperBtn = document.createElement("button");
    player1PaperBtn.type = "button";
    player1PaperBtn.className = "playerOptionsPVCPU btn";
    player1PaperBtn.textContent = "Paper";
    player1PaperBtn.addEventListener("click", function () {
        player1Choice = "Paper";
        RoundWinScreen();
    });

    let player1ScissorsBtn = document.createElement("button");
    player1ScissorsBtn.type = "button";
    player1ScissorsBtn.className = "playerOptionsPVCPU btn";
    player1ScissorsBtn.textContent = "Scissors";
    player1ScissorsBtn.addEventListener("click", function () {
        player1Choice = "Scissors";
        RoundWinScreen();
    });

    let player1LizardBtn = document.createElement("button");
    player1LizardBtn.type = "button";
    player1LizardBtn.className = "playerOptionsPVCPU btn";
    player1LizardBtn.textContent = "Lizard";
    player1LizardBtn.addEventListener("click", function () {
        player1Choice = "Lizard";
        RoundWinScreen();
    });

    let player1SpockBtn = document.createElement("button");
    player1SpockBtn.type = "button";
    player1SpockBtn.className = "playerOptionsPVCPU btn";
    player1SpockBtn.textContent = "Spock";
    player1SpockBtn.addEventListener("click", function () {
        player1Choice = "Spock";
        RoundWinScreen();
    });

    let player1SelectDiv = document.createElement("div");
    player1SelectDiv.className = "playerSelectDivPVCPU col-4";

    player1SelectDiv.appendChild(playerChoiceTitle);
    player1SelectDiv.appendChild(player1RockBtn);
    player1SelectDiv.appendChild(player1PaperBtn);
    player1SelectDiv.appendChild(player1ScissorsBtn);
    player1SelectDiv.appendChild(player1LizardBtn);
    player1SelectDiv.appendChild(player1SpockBtn);

    let player1SelectRow = document.createElement("div");
    player1SelectRow.className = "playerSelectRowPVCPU row";

    player1SelectRow.appendChild(player1SelectDiv);
    bodyTag.appendChild(player1SelectRow);
}

function RoundWinScreen() {

    // Probably Should've Used A Switch But I'm In Too Deep - Might Change Later
    if (playChoice === "PvP") {
        if (player1Choice === "Rock") {
            if (player2Choice === "Rock") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Rock Ties With Rock";
            } else if (player2Choice === "Paper") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Paper Covers Rock";
                player2Wins++;
            } else if (player2Choice === "Scissors") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Scissors";
                player1Wins++;
            } else if (player2Choice === "Lizard") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Lizard";
                player1Wins++;
            } else if (player2Choice === "Spock") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Spock Vaporizes Rock";
                player2Wins++;
            }
        } else if (player1Choice === "Paper") {
            if (player2Choice === "Rock") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Paper Covers Rock";
                player1Wins++;
            } else if (player2Choice === "Paper") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Paper Ties With Paper";
            } else if (player2Choice === "Scissors") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Scissors Cuts Paper";
                player2Wins++;
            } else if (player2Choice === "Lizard") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Lizard Eats Paper";
                player2Wins++;
            } else if (player2Choice === "Spock") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Paper Disproves Spock";
                player1Wins++;
            }
        } else if (player1Choice === "Scissors") {
            if (player2Choice === "Rock") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Scissors";
                player2Wins++;
            } else if (player2Choice === "Paper") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Scissors Cuts Paper";
                player1Wins++;
            } else if (player2Choice === "Scissors") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Scissors Ties With Scissors";
            } else if (player2Choice === "Lizard") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Scissors Decapitates Lizard";
                player1Wins++;
            } else if (player2Choice === "Spock") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Spock Smashes Scissors";
                player2Wins++;
            }
        } else if (player1Choice === "Lizard") {
            if (player2Choice === "Rock") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Lizard";
                player2Wins++;
            } else if (player2Choice === "Paper") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Lizard Eats Paper";
                player1Wins++;
            } else if (player2Choice === "Scissors") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Scissors Decapitates Lizard";
                player2Wins++;
            } else if (player2Choice === "Lizard") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Lizard Ties With Lizard";
            } else if (player2Choice === "Spock") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Lizard Poisons Spock";
                player1Wins++;
            }
        } else if (player1Choice === "Spock") {
            if (player2Choice === "Rock") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Spock Vaporizes Rock";
                player1Wins++;
            } else if (player2Choice === "Paper") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Paper Disproves Spock";
                player2Wins++;
            } else if (player2Choice === "Scissors") {
                roundWinScreenTitle = "Player 1 Takes This Round!";
                roundPlayerChoices = "Spock Smashes Scissors";
                player1Wins++;
            } else if (player2Choice === "Lizard") {
                roundWinScreenTitle = "Player 2 Takes This Round!";
                roundPlayerChoices = "Lizard Poisons Spock";
                player2Wins++;
            } else if (player2Choice === "Spock") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Spock Ties With Spock";
            }
        }
    } else if (playChoice === "PvCPU") {
        if (player1Choice === "Rock") {
            if (cpu1Choice === "Rock") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Rock Ties With Rock";
            } else if (cpu1Choice === "Paper") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Paper Covers Rock";
                cpu1Wins++;
            } else if (cpu1Choice === "Scissors") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Rock Crushes Scissors";
                player1Wins++;
            } else if (cpu1Choice === "Lizard") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Rock Crushes Lizard";
                player1Wins++;
            } else if (cpu1Choice === "Spock") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Spock Vaporizes Rock";
                cpu1Wins++;
            }
        } else if (player1Choice === "Paper") {
            if (cpu1Choice === "Rock") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Paper Covers Rock";
                player1Wins++;
            } else if (cpu1Choice === "Paper") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Paper Ties With Paper";
            } else if (cpu1Choice === "Scissors") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Scissors Cuts Paper";
                cpu1Wins++;
            } else if (cpu1Choice === "Lizard") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Lizard Eats Paper";
                cpu1Wins++;
            } else if (cpu1Choice === "Spock") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Paper Disproves Spock";
                player1Wins++;
            }
        } else if (player1Choice === "Scissors") {
            if (cpu1Choice === "Rock") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Rock Crushes Scissors";
                cpu1Wins++;
            } else if (cpu1Choice === "Paper") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Scissors Cuts Paper";
                player1Wins++;
            } else if (cpu1Choice === "Scissors") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Scissors Ties With Scissors";
            } else if (cpu1Choice === "Lizard") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Scissors Decapitates Lizard";
                player1Wins++;
            } else if (cpu1Choice === "Spock") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Spock Smashes Scissors";
                cpu1Wins++;
            }
        } else if (player1Choice === "Lizard") {
            if (cpu1Choice === "Rock") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Rock Crushes Lizard";
                cpu1Wins++;
            } else if (cpu1Choice === "Paper") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Lizard Eats Paper";
                player1Wins++;
            } else if (cpu1Choice === "Scissors") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Scissors Decapitates Lizard";
                cpu1Wins++;
            } else if (cpu1Choice === "Lizard") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Lizard Ties With Lizard";
            } else if (cpu1Choice === "Spock") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Lizard Poisons Spock";
                player1Wins++;
            }
        } else if (player1Choice === "Spock") {
            if (cpu1Choice === "Rock") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Spock Vaporizes Rock";
                player1Wins++;
            } else if (cpu1Choice === "Paper") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Paper Disproves Spock";
                cpu1Wins++;
            } else if (cpu1Choice === "Scissors") {
                roundWinScreenTitle = "The Human Takes This Round!";
                roundPlayerChoices = "Spock Smashes Scissors";
                player1Wins++;
            } else if (cpu1Choice === "Lizard") {
                roundWinScreenTitle = "The CPU Takes This Round!";
                roundPlayerChoices = "Lizard Poisons Spock";
                cpu1Wins++;
            } else if (cpu1Choice === "Spock") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Spock Ties With Spock";
            }
        }
    } else if (playChoice === "CPUvCPU") {
        if (cpu1Choice === "Rock") {
            if (cpu2Choice === "Rock") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Rock Ties With Rock";
            } else if (cpu2Choice === "Paper") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Paper Covers Rock";
                cpu2Wins++;
            } else if (cpu2Choice === "Scissors") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Scissors";
                cpu1Wins++;
            } else if (cpu2Choice === "Lizard") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Lizard";
                cpu1Wins++;
            } else if (cpu2Choice === "Spock") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Spock Vaporizes Rock";
                cpu2Wins++;
            }
        } else if (cpu1Choice === "Paper") {
            if (cpu2Choice === "Rock") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Paper Covers Rock";
                cpu1Wins++;
            } else if (cpu2Choice === "Paper") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Paper Ties With Paper";
            } else if (cpu2Choice === "Scissors") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Scissors Cuts Paper";
                cpu2Wins++;
            } else if (cpu2Choice === "Lizard") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Lizard Eats Paper";
                cpu2Wins++;
            } else if (cpu2Choice === "Spock") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Paper Disproves Spock";
                cpu1Wins++;
            }
        } else if (cpu1Choice === "Scissors") {
            if (cpu2Choice === "Rock") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Scissors";
                cpu2Wins++;
            } else if (cpu2Choice === "Paper") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Scissors Cuts Paper";
                cpu1Wins++;
            } else if (cpu2Choice === "Scissors") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Scissors Ties With Scissors";
            } else if (cpu2Choice === "Lizard") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Scissors Decapitates Lizard";
                cpu1Wins++;
            } else if (cpu2Choice === "Spock") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Spock Smashes Scissors";
                cpu2Wins++;
            }
        } else if (cpu1Choice === "Lizard") {
            if (cpu2Choice === "Rock") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Rock Crushes Lizard";
                cpu2Wins++;
            } else if (cpu2Choice === "Paper") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Lizard Eats Paper";
                cpu1Wins++;
            } else if (cpu2Choice === "Scissors") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Scissors Decapitates Lizard";
                cpu2Wins++;
            } else if (cpu2Choice === "Lizard") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Lizard Ties With Lizard";
            } else if (cpu2Choice === "Spock") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Lizard Poisons Spock";
                cpu1Wins++;
            }
        } else if (cpu1Choice === "Spock") {
            if (cpu2Choice === "Rock") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Spock Vaporizes Rock";
                cpu1Wins++;
            } else if (cpu2Choice === "Paper") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Paper Disproves Spock";
                cpu2Wins++;
            } else if (cpu2Choice === "Scissors") {
                roundWinScreenTitle = "CPU 1 Takes This Round!";
                roundPlayerChoices = "Spock Smashes Scissors";
                cpu1Wins++;
            } else if (cpu2Choice === "Lizard") {
                roundWinScreenTitle = "CPU 2 Takes This Round!";
                roundPlayerChoices = "Lizard Poisons Spock";
                cpu2Wins++;
            } else if (cpu2Choice === "Spock") {
                roundWinScreenTitle = "It's A Tie!";
                roundPlayerChoices = "Spock Ties With Spock";
            }
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
    if (playChoice === "PvP") { roundScore.textContent = player1Wins + " : " + player2Wins; }
    else if (playChoice === "PvCPU") { roundScore.textContent = player1Wins + " : " + cpu1Wins; }
    else if (playChoice === "CPUvCPU") { roundScore.textContent = cpu1Wins + " : " + cpu2Wins; }

    bodyTag.appendChild(roundScore);

    let nextRoundButton = document.createElement("button");
    nextRoundButton.type = "button";
    nextRoundButton.className = "nextRoundBtn btn pulse";
    if (currentRound < maxRound && player1Wins < winBreak && player2Wins < winBreak && cpu1Wins < winBreak && cpu2Wins < winBreak) { nextRoundButton.textContent = "Next Round"; }
    else { nextRoundButton.textContent = "That's Game"; }
    nextRoundButton.addEventListener("click", function () {
        currentRound++;
        if (currentRound < maxRound && player1Wins < winBreak && player2Wins < winBreak && cpu1Wins < winBreak && cpu2Wins < winBreak) {
            if (playChoice === "PvP") { PVPPlayer1Select(); }
            else if (playChoice === "PvCPU") {
                PVCPUPlayerSelect();
                GetCPU1();
            } else if (playChoice === "CPUvCPU") {
                GetCPU1();
                cpu1Choice = cpuPlaceHolder1;
                GetCPU2();
                cpu2Choice = cpuPlaceHolder2;
                RoundWinScreen();
            }

        } else {
            WinScreen();
        }
    });

    let nextRoundButtonDiv = document.createElement("div");
    nextRoundButtonDiv.className = "nextRoundDiv";

    nextRoundButtonDiv.appendChild(nextRoundButton);
    bodyTag.appendChild(nextRoundButtonDiv);

}

function WinScreen() {
    bodyTag.innerHTML = "";

    if (playChoice === "PvP") {
        if (player1Wins > player2Wins) {
            winTitle = "Player 1 Wins!";
            winDetails = "As He Should";
        } else if (player1Wins < player2Wins) {
            winTitle = "Player 2 Wins!";
            winDetails = "Next Time, They Get To Be Player 1"
        } else {
            winTitle = "It Was A Tie!";
            winDetails = "You Both Are Either Really Good Or Really Bad";
        }
    } else if (playChoice === "PvCPU") {
        if (player1Wins > cpu1Wins) {
            winTitle = "The Human Wins!";
            winDetails = "They Out-Lucked The Robot";
        } else if (player1Wins < cpu1Wins) {
            winTitle = "The CPU Wins!";
            winDetails = "Next Time, Just Be Better"
        } else {
            winTitle = "It Was A Tie!";
            winDetails = "What's The Different Between Man And Machine?";
        }
    } else if (playChoice === "CPUvCPU") {
        if (cpu1Wins > cpu2Wins) {
            winTitle = "CPU1 Wins!";
            winDetails = "Clearly He Is Superior";
        } else if (cpu1Wins < cpu2Wins) {
            winTitle = "CPU2 Wins!";
            winDetails = "They Like To Be Called CPUA"
        } else {
            winTitle = "It Was A Tie?";
            winDetails = "How Did This Happen?";
        }
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
    if (playChoice === "PvP") { finalScore.textContent = player1Wins + " : " + player2Wins; }
    else if (playChoice === "PvCPU") { finalScore.textContent = player1Wins + " : " + cpu1Wins; }
    else if (playChoice === "CPUvCPU") { finalScore.textContent = cpu1Wins + " : " + cpu2Wins; }


    bodyTag.appendChild(finalScore);

    let winBackToStartBtn = document.createElement("button");
    winBackToStartBtn.type = "button";
    winBackToStartBtn.className = "winBackToStartBtn btn pulse";
    winBackToStartBtn.textContent = "Back To Start";
    winBackToStartBtn.addEventListener("click", function () {
        player1Wins = 0;
        player2Wins = 0;
        cpu1Wins = 0;
        cpu2Wins = 0;
        StartScreen();
    });

    let winBackToStartBtnDiv = document.createElement("div");
    winBackToStartBtnDiv.className = "winBackToStartBtnDiv";

    winBackToStartBtnDiv.appendChild(winBackToStartBtn);
    bodyTag.appendChild(winBackToStartBtnDiv);
}