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
};


function background(state) {
    state.background = GameInstance.add.sprite(0,0,'board');
    state.background.position.setTo(GameInstance.world.centerX,GameInstance.world.centerY);
    state.background.scale.setTo(1.5,1.5);
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