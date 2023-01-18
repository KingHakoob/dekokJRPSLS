let bodyTag = document.getElementById("bodyTag");

let playChoice = "";
let maxRound = 0;

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