demo.state2 = function(){};
demo.state2.prototype = {
    questions:{}, draw:{}, total:1, tryAgain:0, timer: null, seconds: 0, boolShowAnswer: false, boolRemoveTween: false,
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state2");
        addChangeStateEventListers();
        //Timer
        this.timer = GameInstance.time.create(false);
        this.timer.loop(2000,function(){this.seconds++},this);
        //this.timer.start();
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

        //
        this.measurement = GameInstance.add.text(550,365,"cm");
        this.measurement.fontSize = 50;
        this.measurement.fontWeight = 'normal';

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
            if (this.input0.value == this.correctAns && this.total <= 5) {
                console.log("Next button appeared.");
                //Timer
                this.timer.start();
                this.timer.resume();
                //
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnNext.visible = true;
                this.txtNext.visible = true;
                //2nd way of tween chaining
                this.tween0.onComplete.add(function(){
                    this.tween4.start(); //Lines
                    this.tween5.start(); //Lines
                    
                },this);
                this.tween4.onComplete.add(function(){
                    this.tween1.start();
                    this.tween2.start();
                },this);
                this.tween1.onComplete.add(function(){
                    this.tween6.start();
                    this.tween7.start();
                },this);
                this.tween6.onComplete.add(function(){
                    this.tween3.start();
                },this);
                this.tween0.start();
                console.log(this.tween0);

                this.tick.alpha = 1;

                if (this.total == 5) {
                    this.draw.btnSegment.visible = true;
                    this.txtSegment.visible = true;
                    this.draw.desc.visible = true;
                    this.desc.visible = true;
                }
               
            }
            else if (this.input0.value != this.correctAns && this.input0.value != 0) {
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnTryAgain.visible = true;
                this.txtTryAgain.visible = true;
                console.log("What is value of this.tryAgain: " + this.tryAgain);

                if (this.input0.value < 100) {
                    this.word.setText(this.metre + "  m  " + this.cm + "  cm  ");
                    this.tween8.start();
                    this.tween9.start();
                    this.tween10.start();
                    this.tween111.start();
                    this.cross.alpha = 1;
                }
                else if (this.input0.value > 100) {
                    this.text00.setText(this.metre + " m " + this.cm + " cm ");
                    this.text11.setText(this.metre + " m ");
                    this.text22.setText(this.cm + " cm ");
                    this.tween44.start(); //Lines
                    this.tween55.start(); //Lines
                    this.tween11.start();
                    this.tween22.start();
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    this.cloudtxt0.setText("1 m = 100 cm" + "\n" + this.metre + " m = " + this.metre*100 + " cm");
                    this.cloud.alpha = 1;
                    this.cloudtxt0.alpha = 1;

                    this.cross.alpha = 1;
                }
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
            this.cross.alpha = 0;
            this.tick.alpha = 0;
           
            if (this.input0.value == this.correctAns && this.total < 5 && this.seconds >= 2 || this.boolShowAnswer == true && this.total < 5 && this.seconds >= 2) 
            {
                console.log("User got it correct");
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
                this.draw.btnCheck.visible = true;
                this.txtCheck.visible = true; 
                //Changing the questions if user got it correct upon clicking btnNext
                this.metre = this.randomNumbers().metreProperty;
                this.cm = this.randomNumbers().cmProperty;
                this.correctAns = (this.metre * 100) + this.cm;  
                this.questions.q0.setText("What is " +  this.metre + " m " + this.cm  +" cm "+ "in centimetres? ");
                this.total++;
                this.input0.setText("");
                console.log("Questions: " + this.total + "/5");
                //Changing the texts for the tween
                this.text0.setText(this.metre + " m " + this.cm + " cm ");
                this.text1.setText(this.metre + " m ");
                this.text2.setText(this.cm + " cm ");
                this.text3.setText(this.correctAns+ " cm ");
                this.text0.alpha = 0;
                this.text1.alpha = 0;
                this.text2.alpha = 0;
                this.text3.alpha = 0;
                this.line0.alpha = 0;
                this.line2.alpha = 0;
                this.line3.alpha = 0;
                this.line4.alpha = 0;
                //Timer
                this.timer.pause();
                this.seconds = 0;
                //

                this.questionNum.setText("Q" + this.total + " of 5");
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
            this.draw.btnTryAgain.visible = false;
            this.txtTryAgain.visible = false;
            this.draw.btnCheck.visible = true;
            this.txtCheck.visible = true;
            this.tryAgain++;

            //For tween
            this.word.alpha = 0;
            this.word1.alpha = 0;
            this.drawCircle.alpha = 0;
            this.drawCircle1.alpha = 0;
            //
            this.text00.alpha = 0;
            this.text11.alpha = 0;
            this.text22.alpha = 0;
            this.line00.alpha = 0;
            this.line22.alpha = 0;
            //
            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0;

            this.cross.alpha = 0;
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
            this.draw.btnShowAnswer.visible = false;
            this.txtShowAnswer.visible = false;
            this.draw.btnNext.visible = true;
            this.txtNext.visible = true;
            this.cross.alpha = 0;
            //Timer
            this.timer.resume();
            this.timer.start();
            //
            this.tryAgain = 0;
            this.input0.setText(this.correctAns);
            //2nd way of tween chaining
            this.tween0.onComplete.add(function(){
                this.tween4.start(); //Lines
                this.tween5.start(); //Lines
                
            },this);
            this.tween4.onComplete.add(function(){
                this.tween1.start();
                this.tween2.start();
            },this);
            this.tween1.onComplete.add(function(){
                this.tween6.start();
                this.tween7.start();
            },this);
            this.tween6.onComplete.add(function(){
                this.tween3.start();
            },this);
            this.tween0.start();
            console.log(this.tween0);
            //Showanswer boolean
            this.boolShowAnswer = true;

            //For tryAgain tween
            this.word.alpha = 0;
            this.word1.alpha = 0;
            this.drawCircle.alpha = 0;
            this.drawCircle1.alpha = 0;
            //
            this.text00.alpha = 0;
            this.text11.alpha = 0;
            this.text22.alpha = 0;
            this.line00.alpha = 0;
            this.line22.alpha = 0;
            //

            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0;

            //
            if (this.total == 5) {
                this.draw.btnSegment.visible = true;
                this.txtSegment.visible = true;
                this.draw.desc.visible = true;
                this.desc.visible = true;
            }
            
       },
       this);

       //LineGraphics
       this.drawLine = GameInstance.add.graphics(0,0);
       this.drawLine.lineStyle(3,0x000000,1);
       this.drawLine.moveTo(840,250);
       this.drawLine.lineTo(1100,250);

       //Creating texts and lines for the tween.
       this.text0 = GameInstance.add.text(860,450-30,"");
       this.text0.fontSize = 30;
       this.text0.fontWeight = 'normal';
       this.text0.setText(this.metre + " m " + this.cm + " cm ");
       this.text0.alpha = 0;

       this.text00 = GameInstance.add.text(860,450-30,"");
       this.text00.fontSize = 30;
       this.text00.fontWeight = 'normal';
       this.text00.setText(this.metre + " m " + this.cm + " cm ");
       this.text00.alpha = 0;

       this.text1 = GameInstance.add.text(800,550-20,"");
       this.text1.fontSize = 30;
       this.text1.fontWeight = 'normal';
       this.text1.setText(this.metre + " m ");
       this.text1.alpha = 0;

       this.text11 = GameInstance.add.text(800,550-20,"");
       this.text11.fontSize = 30;
       this.text11.fontWeight = 'normal';
       this.text11.setText(this.metre + " m ");
       this.text11.alpha = 0;

       this.text2 = GameInstance.add.text(1000,550-20,"");
       this.text2.fontSize = 30;
       this.text2.fontWeight = 'normal';
       this.text2.setText(this.cm + " cm ");
       this.text2.alpha = 0;

       this.text22 = GameInstance.add.text(1000,550-20,"");
       this.text22.fontSize = 30;
       this.text22.fontWeight = 'normal';
       this.text22.setText(this.cm + " cm ");
       this.text22.alpha = 0;

       this.text3 = GameInstance.add.text(880,650,"");
       this.text3.fontSize = 30;
       this.text3.fontWeight = 'normal';
       this.text3.setText(this.correctAns+ " cm ");
       this.text3.alpha = 0;

       this.line0 = GameInstance.add.graphics(0,0);
       this.line0.lineStyle(1,0x000000,1);
       this.line0.moveTo(this.text0.x+70,this.text0.y+35);
       this.line0.lineTo(this.text1.x+30,this.text1.y);
       this.line0.endFill();
       this.line0.alpha = 0;

       this.line00 = GameInstance.add.graphics(0,0);
       this.line00.lineStyle(1,0x000000,1);
       this.line00.moveTo(this.text0.x+70,this.text0.y+35);
       this.line00.lineTo(this.text1.x+30,this.text1.y);
       this.line00.endFill();
       this.line00.alpha = 0;

       this.line2 = GameInstance.add.graphics(0,0);
       this.line2.lineStyle(1,0x000000,1);
       this.line2.moveTo(this.text0.x+70,this.text0.y+35);
       this.line2.lineTo(this.text2.x+30,this.text2.y);
       this.line2.endFill();
       this.line2.alpha = 0;

       this.line22 = GameInstance.add.graphics(0,0);
       this.line22.lineStyle(1,0x000000,1);
       this.line22.moveTo(this.text0.x+70,this.text0.y+35);
       this.line22.lineTo(this.text2.x+30,this.text2.y);
       this.line22.endFill();
       this.line22.alpha = 0;

       this.line3 = GameInstance.add.graphics(0,0);
       this.line3.lineStyle(1,0x000000,1);
       this.line3.moveTo(this.text3.x+55,this.text3.y);
       this.line3.lineTo(this.text1.x+30,this.text1.y+30);
       this.line3.endFill();
       this.line3.alpha = 0;

       this.line4 = GameInstance.add.graphics(0,0);
       this.line4.lineStyle(1,0x000000,1);
       this.line4.moveTo(this.text3.x+55,this.text3.y);
       this.line4.lineTo(this.text2.x+30,this.text2.y+30);
       this.line4.endFill();
       this.line4.alpha = 0;
       //For the tryagain slides 5.
       this.word = GameInstance.add.text(870,430,this.metre + "  m  " + this.cm + "  cm  ");
       this.word1 = GameInstance.add.text(800,520,"The units are different. \nYou need to first change\nm to cm.")
       this.word.fontWeight = 'normal';
       this.word1.fontWeight = 'normal';
       this.word.alpha = 0;
       this.word1.alpha = 0;
       this.drawCircle = GameInstance.add.graphics(0,0);
       this.drawCircle.lineStyle(3,0xff0000,1);
       this.drawCircle.drawCircle(910,450,50);
       this.drawCircle.endFill();
       this.drawCircle.alpha = 0;
       this.drawCircle1 = GameInstance.add.graphics(0,0);
       this.drawCircle1.lineStyle(3,0xff0000,1);
       this.drawCircle1.drawCircle(1000,450,50);
       this.drawCircle1.endFill();
       this.drawCircle1.alpha = 0;
       //Cloud
       this.cloud = GameInstance.add.sprite(600,200,'cloud');
       this.cloudtxt0 = GameInstance.add.text(700,295,"1 m = 100 cm" + "\n" + this.metre + " m = " + this.metre*100 + " cm");
       this.cloudtxt0.fontWeight = 'normal';
       this.cloud.alpha = 0;
       this.cloudtxt0.alpha = 0;

       //PhaserTween
       this.tween0 = this.game.add.tween(this.text0).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween1 = this.game.add.tween(this.text1).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween2 = this.game.add.tween(this.text2).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween3 = this.game.add.tween(this.text3).to({alpha:1},500,Phaser.Easing.Linear.None);
       //
       this.tween4 = this.game.add.tween(this.line0).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween5 = this.game.add.tween(this.line2).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween6 = this.game.add.tween(this.line3).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween7 = this.game.add.tween(this.line4).to({alpha:1},500,Phaser.Easing.Linear.None);
       //For the tryagain slides 5.
       this.tween8 = this.game.add.tween(this.word).to({alpha:1},200,Phaser.Easing.Linear.None);
       this.tween9 = this.game.add.tween(this.word1).to({alpha:1},200,Phaser.Easing.Linear.None);
       this.tween10 = this.game.add.tween(this.drawCircle).to({alpha:1},200,Phaser.Easing.Linear.None);
       this.tween111 = this.game.add.tween(this.drawCircle1).to({alpha:1},200,Phaser.Easing.Linear.None);
       //
       this.tween00 = this.game.add.tween(this.text00).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween11 = this.game.add.tween(this.text11).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween22 = this.game.add.tween(this.text22).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween44 = this.game.add.tween(this.line00).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween55 = this.game.add.tween(this.line22).to({alpha:1},500,Phaser.Easing.Linear.None);

       //Adding the crosses and ticks
       this.tick = GameInstance.add.sprite(500,400,'tick');
       this.cross = GameInstance.add.sprite(500,400,'cross');
       this.tick.alpha = 0;
       this.cross.alpha = 0;

       //Creating to the next question button.
       this.draw.btnSegment = GameInstance.add.graphics(0,0);
       this.draw.btnSegment.lineStyle(1,0x150E88,1);
       this.draw.btnSegment.beginFill(0xC5DEFD, 1);
       this.draw.btnSegment.drawRect(1000,800,190,70);
       this.draw.btnSegment.endFill();
       this.txtSegment = GameInstance.add.text(1005,820,"Next Question");
       this.draw.btnSegment.inputEnabled = true;
       this.draw.btnSegment.visible = false;
       this.txtSegment.visible = false;
       //
       this.draw.desc = GameInstance.add.graphics(0,0);
       this.draw.desc.lineStyle(1,0x150E88,1);
       this.draw.desc.beginFill(0xf1f1f1, 1);
       this.draw.desc.drawRect(1000,880,190,40);
       this.draw.desc.endFill();
       this.desc = GameInstance.add.text(1005,885,"m and cm to cm");
       this.desc.fontWeight = 'bold';
       this.desc.addFontWeight('normal',8);
       this.desc.addColor('#ff0000',0);
       this.desc.addColor('#000000',8);
       this.desc.fontSize = 24;
       this.draw.desc.visible = false;
       this.desc.visible = false;
       //
       this.draw.questionNum = GameInstance.add.graphics(0,0);
       this.draw.questionNum.lineStyle(1,0x150E88,1);
       this.draw.questionNum.beginFill(0xf1f1f1, 1);
       this.draw.questionNum.drawRect(100,190,190,70);
       this.draw.questionNum.endFill();
       this.questionNum = GameInstance.add.text(135,205,"Q" + this.total + " of 5");
       this.questionNum.fontWeight = 'bold';
       this.questionNum.addFontWeight('normal',8);
       this.questionNum.fontSize = 35;
       this.draw.questionNum.visible = true;
       this.questionNum.visible = true;
       
       this.draw.btnSegment.events.onInputOver.add(function(){
           this.draw.btnSegment.input.useHandCursor = true;
        },this);
        
        this.draw.btnSegment.events.onInputDown.add(function(){
            this.total = 1;
            GameInstance.state.start("state3");
        },this);

       this.home.events.onInputDown.add(function(){
           this.total = 1;
        },this);







    },
    update:function(){
        //console.log("What is the time: " + this.seconds);
        //console.log("Try again: " + this.tryAgain);
        if (this.seconds < 2){
            this.draw.btnNext.tint = 0x00000;
            this.draw.btnNext.alpha = 0.1;
            this.txtNext.alpha = 0.3;
            this.draw.btnNext.inputEnabled = false;
        }
        else if (this.seconds >= 2){
            this.draw.btnNext.tint = 0xC5DEFD;
            this.draw.btnNext.alpha = 1;
            this.txtNext.alpha = 1;
            this.draw.btnNext.inputEnabled = true;
        }

        
    },
    randomNumbers: function(){
        let metre = (Math.floor(Math.random()*9)+1);
        let cm = (Math.floor(Math.random()*50)+10);
        
     
        return {metreProperty:metre, cmProperty:cm}
    }
    
};
