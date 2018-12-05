demo.state2 = function(){};
demo.state2.prototype = {
    questions:{}, draw:{}, total:0, tryAgain:0,
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
            font: '60px Arial',
            fill: '#212121',
            fontWeight: 'normal',
            width: 160,
            height: 70,
            padding: 8,
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 6,
            max: 9999,
            type: PhaserInput.InputType.number
        });

        //Board
        this.clipboard = GameInstance.add.sprite(400,300,'clipboard');
        this.clipboard.alpha = 1;
        //Button
        this.draw.btnCheck = GameInstance.add.graphics(0,0);
        this.draw.btnCheck.lineStyle(1,0x150E88,1);
        this.draw.btnCheck.beginFill(0xC5DEFD, 1);
        this.draw.btnCheck.drawRect(520,500,150,70);
        this.draw.btnCheck.endFill();
        this.txtCheck = GameInstance.add.text(555,520,"Check");
        this.draw.btnCheck.inputEnabled = true;
        this.draw.btnCheck.events.onInputOver.add(function(){
            this.draw.btnCheck.input.useHandCursor = true;
            this.draw.btnCheck.alpha = 0.7;
        },this);
        this.draw.btnCheck.events.onInputOut.add(function(){
            this.draw.btnCheck.alpha = 1;
        },this);
        this.draw.btnCheck.events.onInputDown.add(function(){
            console.log("BtnCheck first layer");
            console.log("CorrectAns: "+ this.correctAns);
            console.log("UserAns: " + this.input0.value);
            if (this.input0.value == this.correctAns && this.total < 5) {
                console.log("Next button appeared.");
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnNext.visible = true;
                this.txtNext.visible = true;
            }
            else if (this.input0.value != this.correctAns && this.input0.value != 0) {
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnTryAgain.visible = true;
                this.txtTryAgain.visible = true;

                if (this.tryAgain == 1) {
                    this.draw.btnNext.visible = false;
                    this.txtNext.visible = false;
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.draw.btnShowAnswer.visible = true;
                    this.txtShowAnswer.visible = true;
                }
            }
        },this);
        //Next
        this.draw.btnNext = GameInstance.add.graphics(0,0);
        this.draw.btnNext.lineStyle(1,0x150E88,1);
        this.draw.btnNext.beginFill(0xC5DEFD, 1);
        this.draw.btnNext.drawRect(1000,800,150,70);
        this.draw.btnNext.endFill();
        this.txtNext = GameInstance.add.text(1045,820,"Next");
        this.draw.btnNext.inputEnabled = true;
        this.draw.btnNext.visible = false;
        this.txtNext.visible = false;
        this.draw.btnNext.events.onInputOver.add(function(){
            this.draw.btnNext.input.useHandCursor = true;
            this.draw.btnNext.alpha = 0.7;
        },this);
        this.draw.btnNext.events.onInputOut.add(function(){
            this.draw.btnNext.alpha = 1;
        },this);
        this.draw.btnNext.events.onInputDown.add(function(){
            console.log("BtnCheck first layer");
            console.log("CorrectAns: "+ this.correctAns);
            console.log("UserAns: " + this.input0.value);
            if (this.input0.value == this.correctAns && this.total < 5) 
            {
                console.log("User got it correct");
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
                this.draw.btnCheck.visible = true;
                this.txtCheck.visible = true;
                //
                this.metre = this.randomNumbers().metreProperty;
                this.cm = this.randomNumbers().cmProperty;
                this.correctAns = (this.metre * 100) + this.cm;  
                this.questions.q0.setText("What is " +  this.metre + " m " + this.cm  +" cm "+ "in centimetres? ");
                this.total++;
                this.input0.setText("");
                console.log("Questions: " + this.total + "/5");
            }

        },this);
         //Try again.
         this.draw.btnTryAgain = GameInstance.add.graphics(0,0);
         this.draw.btnTryAgain.lineStyle(1,0x150E88,1);
         this.draw.btnTryAgain.beginFill(0xC5DEFD, 1);
         this.draw.btnTryAgain.drawRect(1000,800,150,70);
         this.draw.btnTryAgain.endFill();
         this.txtTryAgain = GameInstance.add.text(1015,820,"Try Again");
         this.draw.btnTryAgain.inputEnabled = true;
         this.draw.btnTryAgain.visible = false;
         this.txtTryAgain.visible = false;
         this.draw.btnTryAgain.events.onInputOver.add(function(){
             this.draw.btnTryAgain.input.useHandCursor = true;
             this.draw.btnTryAgain.alpha = 0.7;
         },this);
         this.draw.btnTryAgain.events.onInputOut.add(function(){
             this.draw.btnTryAgain.alpha = 1;
         },this);
         this.draw.btnTryAgain.events.onInputDown.add(function(){
             console.log("User got it correct");
            this.draw.btnTryAgain.visible = false;
            this.txtTryAgain.visible = false;
            this.draw.btnCheck.visible = true;
            this.txtCheck.visible = true;
            this.tryAgain++;
        },
        this);

        //ShowAnswer
        this.draw.btnShowAnswer = GameInstance.add.graphics(0,0);
        this.draw.btnShowAnswer.lineStyle(1,0x150E88,1);
        this.draw.btnShowAnswer.beginFill(0xC5DEFD, 1);
        this.draw.btnShowAnswer.drawRect(1000,800,200,70);
        this.draw.btnShowAnswer.endFill();
        this.txtShowAnswer = GameInstance.add.text(1015,820,"Show Answer");
        this.draw.btnShowAnswer.inputEnabled = true;
        this.draw.btnShowAnswer.visible = false;
        this.txtShowAnswer.visible = false;
        this.draw.btnShowAnswer.events.onInputOver.add(function(){
            this.draw.btnShowAnswer.input.useHandCursor = true;
            this.draw.btnShowAnswer.alpha = 0.7;
        },this);
        this.draw.btnShowAnswer.events.onInputOut.add(function(){
            this.draw.btnShowAnswer.alpha = 1;
        },this);
        this.draw.btnShowAnswer.events.onInputDown.add(function(){
            console.log("User got it correct");
           this.draw.btnShowAnswer.visible = false;
           this.txtShowAnswer.visible = false;
           this.draw.btnNext.visible = true;
           this.txtNext.visible = true;
       },
       this);

    },
    update:function(){
    },
    randomNumbers: function(){
        let metre = (Math.floor(Math.random()*9)+1);
        let cm = (Math.floor(Math.random()*50)+10);
        
     
        return {metreProperty:metre, cmProperty:cm}
    }
    
};
