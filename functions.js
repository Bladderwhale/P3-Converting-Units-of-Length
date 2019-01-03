function changeState(i ,stateNum) { //Global Function (All scripts can access to it) //Forth step@
    console.log(i); //Callback function -(Carries information of what happened)
    console.log(stateNum);
    GameInstance.state.start('state' + stateNum);
};

function addKeyCallback (key, fn , args) { //Global Function (All scripts can access to it) //Third step@
    GameInstance.input.keyboard.addKey(key).onDown.add(fn, null, null, args); //Event listener //Events - Occurance, Listener - parameters/arguments inside the events. 
};

function addChangeStateEventListers() { //Global Function (All scripts can access to it)
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0); //Second step@
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
    addKeyCallback(Phaser.Keyboard.NUMPAD_0, changeState, 10);
    addKeyCallback(Phaser.Keyboard.NUMPAD_1, changeState, 11);
    addKeyCallback(Phaser.Keyboard.NUMPAD_2, changeState, 12);
};

//Preload all the game assets.
function loadAssets() {
    GameInstance.load.video('intro', 'assets/intro.mp4');
    GameInstance.load.image('credits', 'assets/credits.png');
    GameInstance.load.image('board', 'assets/board.png');
    GameInstance.load.image('home','assets/home.png');
    GameInstance.load.image('clipboard','assets/clipboard.png');
    GameInstance.load.image('cloud', 'assets/cloud.png');
    GameInstance.load.image('tick', 'assets/tick.png');
    GameInstance.load.image('cross', 'assets/cross.png');
    GameInstance.load.image('BackgroundNoText', 'assets/1/BackgroundNoText.jpg');
    GameInstance.load.image('button11', 'assets/Button1.png');
    GameInstance.load.image('button22', 'assets/Button2.png');
    GameInstance.load.image('button33', 'assets/Button3.png');
    GameInstance.load.spritesheet('circleanim', 'assets/circleanim.png',580,580,12);

};


function background(state) {
    state.background = GameInstance.add.sprite(0,0,'BackgroundNoText');
    state.background.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY);
    state.background.scale.setTo(1.8755,1.6655);
    state.background.anchor.setTo(0.5,0.5);
}

function home(state) {
    state.home = GameInstance.add.button(GameInstance.world.centerX+500,GameInstance.world.centerY-350,'home');
    state.home.scale.setTo(1.5,1.5);
    state.home.events.onInputDown.add(function(){
        GameInstance.state.start('state1');
    },this);
    state.home.events.onInputOver.add(function(){
        state.home.alpha = 0.7;
    },this)
    state.home.events.onInputOut.add(function(){
        state.home.alpha = 1;
    },this)
}

function drawRect(state) {
    state.drawRoundedRec = GameInstance.add.graphics(0,0);
    state.drawRoundedRec.lineStyle(0, 0x000000);
    state.drawRoundedRec.beginFill(0x008000,0.3);
    state.drawRoundedRec.drawRoundedRect(350,350,178,89);
    state.drawRoundedRec.endFill();
    state.drawRoundedRec.alpha = 0;
    state.numAns = GameInstance.add.text(880,650,'');
    state.numAns.fontSize = 50;
    state.numAns.fontWeight = 'normal';
    state.numAnsTween = GameInstance.add.tween(state.numAns).to({x:380,y:365},1000,Phaser.Easing.Linear.None);
    state.numAnsTween1 = GameInstance.add.tween(state.numAns).to({x:880,y:650},100,Phaser.Easing.Linear.None)
   
}
function drawRect3(state) {
    state.drawRoundedRec = GameInstance.add.graphics(0,0);
    state.drawRoundedRec.lineStyle(0, 0x000000);
    state.drawRoundedRec.beginFill(0x008000,0.3);
    state.drawRoundedRec.drawRoundedRect(350-50,350,178,89);
    state.drawRoundedRec.endFill();
    state.drawRoundedRec.alpha = 0;
    state.drawRoundedRec2 = GameInstance.add.graphics(0,0);
    state.drawRoundedRec2.lineStyle(0, 0x000000);
    state.drawRoundedRec2.beginFill(0x008000,0.3);
    state.drawRoundedRec2.drawRoundedRect(350+250,350,178,89);
    state.drawRoundedRec2.endFill();
    state.drawRoundedRec.alpha = 0;
    state.drawRoundedRec2.alpha = 0;
    state.numAns = GameInstance.add.text(880+220,650,'');
    state.numAns.fontSize = 50;
    state.numAns.fontWeight = 'normal';
    state.numAnsTween = GameInstance.add.tween(state.numAns).to({x:380,y:365},1000,Phaser.Easing.Linear.None);
    state.numAnsTween1 = GameInstance.add.tween(state.numAns).to({x:880+220,y:650},100,Phaser.Easing.Linear.None);
    state.numAns2 = GameInstance.add.text(880+300,650,'');
    state.numAns2.fontSize = 50;
    state.numAns2.fontWeight = 'normal';
    state.numAnsTween2 = GameInstance.add.tween(state.numAns2).to({x:380+275,y:365},1000,Phaser.Easing.Linear.None);
    state.numAnsTween3 = GameInstance.add.tween(state.numAns2).to({x:880+300,y:650},100,Phaser.Easing.Linear.None)
   
}
