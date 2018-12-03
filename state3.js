demo.state3 = function(){};
demo.state3.prototype = {resistors:{},
    preload: function(){},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state3');
        addChangeStateEventListers();
        //Background
        background(this);
    },
    update: function(){
    }
};