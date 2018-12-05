demo.state2 = function(){};
demo.state2.prototype = {
    questions:{}, draw:{},
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        //Background
        background(this);
        //Home
        home(this);
        this.metre = this.randomNumbers().metreProperty;
        this.cm = this.randomNumbers().cmProperty;
        this.correctAns = (this.metre * 100) + this.cm;  
        //Questions
        this.questions.q0 = GameInstance.add.text(GameInstance.world.centerX-400,GameInstance.world.centerY-300,"");
        this.questions.q0.setText("What is " + this.metre + " m " + this.cm +" cm "+ "in centimetres? ");
        this.questions.q0.fontWeight = 'normal';
        this.questions.q0.fontSize = 50;
        this.questions.q0.addColor('#ff0000',7);
        this.questions.q0.addColor('#000000',17);
        this.questions.q0.addFontWeight('bold',7)
        this.questions.q0.addFontWeight('normal',17);
        console.log("What is the correct metre: "+ this.correctAns);
        //Input
        this.input0 = GameInstance.add.inputField(GameInstance.world.centerX-400, GameInstance.world.centerY-150, {
            font: '70px Arial',
            fill: '#212121',
            fontWeight: 'bold',
            width: 160,
            height: 70,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
            max: 9999,
            type: PhaserInput.InputType.number
        });


        //Button
        this.draw.b0 = GameInstance.add.graphics(0,0);
        this.draw.b0.lineStyle(1,0x150E88,1);
        this.draw.b0.beginFill(1,0x150E88,);

    },
    update:function(){
    },
    randomNumbers: function(){
        let metre = (Math.floor(Math.random()*9)+1);
        let cm = (Math.floor(Math.random()*50)+10);
        
     
        return {metreProperty:metre, cmProperty:cm}
    }
    
};
