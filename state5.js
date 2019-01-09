demo.state5 = function(){};
demo.state5.prototype = {
    questions:{}, draw:{}, total:1, tryAgain:0, timer: null, seconds: 0, boolShowAnswer: false, boolRemoveTween: false,
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
    },
    update:function(){
    }
    
};

