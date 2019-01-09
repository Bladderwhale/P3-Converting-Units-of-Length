demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){

    },
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log('state7');
        addChangeStateEventListers();
        //Background
        background(this);


    },
    update: function(){

    }
}
