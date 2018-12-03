demo.state1 = function() {}
demo.state1.prototype = { 
    preload: function(){
        loadAssets();
        
    },
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state1");
        addChangeStateEventListers(); 
        //Background
        background(this);
    },
    update: function(){
    }
}