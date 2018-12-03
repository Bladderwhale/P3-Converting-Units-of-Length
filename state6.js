var check = 0;
var qns = 0;
demo.state6 = function(){};
/**
 * @type {Phaser.State}
 */
demo.state6.prototype = {resistors:{}, firstTable:{}, secondTable:{}, thirdTable:{}, forthTable:{}, bandNum: "1st", bandColor: "red.", word1: null, word2: null, btnLearnExample: null, btnPractice: null,
    preload: function(){loadAssets(this);},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state5');
        addChangeStateEventListers();
        //Background
        background(this);
    },
    update: function(){
    //console.log("What is value of input: " + input2.value);
    //console.log("What is value of qns: " + qns);
    //console.log("What is the value of check: " + check)
    //console.log("What is the value of getAnswers: " + getAnswers(3,"red").hints2);
    }
    
};

