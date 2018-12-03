/**
 * Empty object for all the state.
 */
var demo = {};

/**
 * Add in 3 property as a function in the demo.state0
 */
demo.state0 = function(){}; //Make the property a global function.

/**
 * @type {Phaser.State}
 */
demo.state0.prototype = {
    total: 0,
    credits: {},

    init: function()
    {
        console.log(1500, 1000, GameInstance)
        GameInstance.add.plugin(PhaserInput.Plugin);
                
        //Testing purposes for frameAPI
        GameInstance.canvas.id = "mainCanvas";
        scalingCanvasWindow(1500, 1000, this);
        //cursorUpdate(this.dots, 2, 2, this);
        //updateInputBoxPosition(11,"mainCanvas",0,0,800,600,true,this);
    },
    preload: function(){
        loadAssets();
    },
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state0');
        addChangeStateEventListers(); //Local - First step@
        //windowScaling();
        //GameInstance.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        //Creation of timer
        var timer = GameInstance.time.create(false);
        timer.loop(2000, this.updateCounter, this);
        timer.start();
        
        //Add video after loadedAssets();
        var video = GameInstance.add.video('intro');
        video.addToWorld(GameInstance.world.centerX, GameInstance.world.centerY, 0.5, 0.5, 1.5, 1.5);
        video.play(false);
        
        //Add credits after loadedAssets();
        var credits = this.credits = this.add.sprite(GameInstance.world.centerX,GameInstance.world.centerY, 'credits');
        
        credits.anchor.x = 0.5;
        credits.anchor.y = 0.5;
        credits.scale.x = 1.5;
        credits.scale.y = 1.5;
        credits.alpha = 0;
    },
    update: function(){
        //console.log("total: " + total);
        /**
         * @type {Phaser.Sprite}
         */
        var credits = this.credits;
        if (this.total > 1) {
            credits.alpha = 1;
        }
        if (this.total > 2) {
            GameInstance.state.start('state1');
        }
    
    },

    updateCounter: function() {
        this.total++;
    }
};

                       
