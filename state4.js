demo.state4 = function(){};
demo.state4.prototype = {
    resistors:{}, firstTable:{}, secondTable:{}, thirdTable:{}, forthTable:{},
    preload: function(){loadAssets();},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state4');
        addChangeStateEventListers();
        
        //Background
        background(this);
    },
    update: function(){
    }
};