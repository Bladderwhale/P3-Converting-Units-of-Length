demo.state2 = function(){};
demo.state2.prototype = {
    resistors: {},
    
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        //Background
        background(this);
    },
    update:function(){
    }
    
};
