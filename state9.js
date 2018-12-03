demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state9');
         addChangeStateEventListers(); 
    },
    update: function(){}
};