demo.state7 = function(){};
demo.state7.prototype = {resistors:{r2:null}, n: 0, qnsNum:[1],
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
