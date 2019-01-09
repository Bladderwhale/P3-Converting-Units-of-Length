demo.state6 = function(){};
demo.state6.prototype = {
    questions:{}, draw:{}, total:1, tryAgain:0, timer: null, seconds: 0, boolShowAnswer: false, boolRemoveTween: false, numCheck: 0,
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state3");
        addChangeStateEventListers();

    },
    update:function(){
    }
    
};
