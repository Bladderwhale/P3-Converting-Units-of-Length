var check = 0;
var qns = 0;
var asd = 0xA0522D
var timer;
var total = 0;
demo.state5 = function () { };
/**
 * @type {Phaser.State}
 */

demo.state5.prototype = {
    preload: function () { loadAssets(this); },
    create: function () {
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state5');
        addChangeStateEventListers();
        //Background
        background(this);
    },
    update: function () {
    },
}

