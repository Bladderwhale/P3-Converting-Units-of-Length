demo.state2 = function(){};
demo.state2.prototype = {
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