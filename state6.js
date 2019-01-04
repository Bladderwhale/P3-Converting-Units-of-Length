demo.state6 = function(){};
demo.state6.prototype = {
    questions:{}, draw:{}, total:1, tryAgain:0, timer: null, seconds: 0, boolShowAnswer: false, boolRemoveTween: false, numCheck: 0,
    preload:function(){
        loadAssets();
    },
    create:function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state3");
        addChangeStateEventListers();
        //Timer
        this.timer = GameInstance.time.create(false);
        this.timer.loop(2350,function(){this.seconds++},this);
        //this.timer.start();
        //Background
        background(this);
        //Home
        home(this);
        this.metre = this.randomNumbers().metreProperty;
        this.cm = this.randomNumbers().cmProperty;
        this.correctAns = (this.metre * 1000) + this.cm; //km
        
        //Questions
        this.questions.q0 = GameInstance.add.text(GameInstance.world.centerX-500,GameInstance.world.centerY-300,"");
        this.questions.q0.setText("What is " +  this.correctAns + " m " + "in kilometres and metres? ");
        this.questions.q0.fontWeight = 'normal';
        this.questions.q0.fontSize = 50;
        this.questions.q0.addColor('#ff0000',7);
        this.questions.q0.addColor('#000000',14);
        this.questions.q0.addFontWeight('bold',7)
        this.questions.q0.addFontWeight('normal',14);
        //Input
        this.input0 = GameInstance.add.inputField(GameInstance.world.centerX-450, GameInstance.world.centerY-150, {
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
        this.input1 = GameInstance.add.inputField(GameInstance.world.centerX-150, GameInstance.world.centerY-150, {
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
        this.measurement = GameInstance.add.text(500,365,"km");
        this.measurement.fontSize = 50;
        this.measurement.fontWeight = 'normal';
        this.measurement1 = GameInstance.add.text(800,365,"m");
        this.measurement1.fontSize = 50;
        this.measurement1.fontWeight = 'normal';

        //Board
        this.clipboard = GameInstance.add.sprite(400+220,300,'clipboard');
        this.clipboard.alpha = 1;
        //Button
        this.draw.btnCheck = GameInstance.add.graphics(0,0);
        this.draw.btnCheck.lineStyle(1,0x150E88,1);
        this.draw.btnCheck.beginFill(0xC5DEFD, 1);
        this.draw.btnCheck.drawRect(520+200,500,150,70);
        this.draw.btnCheck.endFill();
        this.txtCheck = GameInstance.add.text(555+200,520,"Check");
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
            if (this.input0.value == this.metre && this.total <= 5 && this.input1.value == this.cm && this.input1.value != 0 && this.numCheck == 0) {
                console.log("In kilometres and metres");
                this.text0.setText(this.correctAns + "m");
                this.text0.position.setTo(860+245,450-30);
                this.text3.setText(this.metre + " km " + this.cm + " m ");
                this.text3.position.setTo(880+215,650);
                this.tick.alpha = 1;
                //Timer
                this.timer.start();
                this.timer.resume();
                //
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
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
                    this.draw.btnNext.visible = true;
                    this.txtNext.visible = true;
                },this);
                this.tween0.start();
                console.log(this.tween0);

                //
                if (this.total == 5) {
                    this.draw.btnSegment.visible = true;
                    this.txtSegment.visible = true;
                    this.draw.desc.visible = true;
                    this.desc.visible = true;
                }
                this.numCheck = 1;
               
            }
            else if (this.input0.value == this.metre1 && this.total <= 5 && this.input1.value == this.cm1 && this.input1.value != 0 && this.numCheck == 1) {
                console.log("In metres and centimetres");
                //this.text1.setText(this.metre + " m ");
                this.cloudtxt0.setText(700+210,295,"1 km = 1000 m" + "\n" + this.metre1 + " km = " + this.metre1*100 + " m");
                this.tick.alpha = 1;
                //Timer
                this.timer.start();
                this.timer.resume();
                //
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
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
                    this.draw.btnNext.visible = true;
                    this.txtNext.visible = true;
                },this);
                this.tween0.start();
                this.tween0.start();
                console.log(this.tween0);

                //
                if (this.total == 5) {
                    this.draw.btnSegment.visible = true;
                    this.txtSegment.visible = true;
                    this.draw.desc.visible = true;
                    this.desc.visible = true;
                }
                this.boolCheck0 = true;

                this.numCheck = 2;
               
            }
            else if (this.input1.value == this.correctAns1 && this.input1.value != 0 && this.numCheck == 2) {
                console.log("Metres and cm in cm");
                this.tick.alpha = 1;
                //Timer
                this.timer.start();
                this.timer.resume();
                //
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
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
                    this.draw.btnNext.visible = true;
                    this.txtNext.visible = true;
                },this);
                this.tween0.start();
                console.log(this.tween0);

                //
                if (this.total == 5) {
                    this.draw.btnSegment.visible = true;
                    this.txtSegment.visible = true;
                    this.draw.desc.visible = true;
                    this.desc.visible = true;
                }
                this.boolCheck0 = true;

                this.numCheck = 3;
               
            }
            else if (this.input1.value == this.correctAns1 && this.input1.value != 0 && this.numCheck == 3) {
                console.log("km and m in m");
                this.tick.alpha = 1;
                //Timer
                this.timer.start();
                this.timer.resume();
                //
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
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
                    this.draw.btnNext.visible = true;
                    this.txtNext.visible = true;
                },this);
                this.tween0.start();
                console.log(this.tween0);

                //
                if (this.total == 5) {
                    this.draw.btnSegment.visible = true;
                    this.txtSegment.visible = true;
                    this.draw.desc.visible = true;
                    this.desc.visible = true;
                }
                this.boolCheck0 = true;

                this.numCheck = 4;
               
            }
            else if (this.input1.value == this.correctAns1 && this.input1.value != 0 && this.numCheck == 4) {
                console.log("km and m in m");
                this.tick.alpha = 1;
                //Timer
                this.timer.start();
                this.timer.resume();
                //
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
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
                    this.draw.btnNext.visible = true;
                    this.txtNext.visible = true;

                    if (this.total == 5) {
                        this.draw.btnSegment.visible = true;
                        this.txtSegment.visible = true;
                        this.draw.desc.visible = true;
                        this.desc.visible = true;
                    }
                },this);
                this.tween0.start();
                console.log(this.tween0);

                //
             
                this.boolCheck0 = true;

                this.numCheck = 5;
               
            }
            else if (this.input0.value != this.correctAns && this.input0.value != 0 && this.numCheck == 0) {
                //Update
                this.text00.position.setTo(860+245,450-30);
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnTryAgain.visible = false;
                this.txtTryAgain.visible = false;
                console.log("What is value of this.tryAgain: " + this.tryAgain);
                this.cross.alpha = 1;
                if (this.input0.value > 9999) {
                    this.text00.setText(this.metre + " km " + this.cm + " m ");
                    this.text11.setText(this.metre + " km ");
                    this.text22.setText(this.cm + " m ");
                    this.tween44.start(); //Lines
                    this.tween55.start(); //Lines
                    this.tween11.start();
                    this.tween22.start();
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    this.cloudtxt0.setText("1 km = 1000 m" + "\n" + this.metre + " km = " + this.metre*1000 + " m");
                    this.cloud.alpha = 1;
                    this.cloudtxt0.alpha = 1;
                }
                else if (this.input0.value >= 1) {
                    this.text00.setText(this.correctAns + "m");
                    this.cloudtxt0.setText("1 km = 1000 m" + "\n" + this.metre + " km = " + this.metre*1000 + " m");
                    this.tween44.start(); //Lines
                    this.tween55.start(); //Lines
                    this.tween55.onComplete.add(function(){
                        this.text11.setText(this.metre*1000+ " m ");
                        this.text22.setText(this.cm + " m ");
                        this.tween11.start();
                        this.tween22.start();
                    },this);
                    this.tween11.onComplete.add(function(){
                        this.text11.setText(this.metre + " km ");
                        this.cloudTween.start();
                    },this);
                    this.cloudTween.onComplete.add(function(){
                        this.cloudtxt0Tween.start();
                    },this);
                    this.cloudtxt0Tween.onComplete.add(function(){
                        if (this.tryAgain == 1) {
                            this.draw.btnNext.visible = false;
                            this.txtNext.visible = false;
                            this.draw.btnTryAgain.visible = false;
                            this.txtTryAgain.visible = false;
                            this.draw.btnShowAnswer.visible = true;
                            this.txtShowAnswer.visible = true;
                            
                        }
                        if (this.draw.btnShowAnswer.visible == false) {
                        this.draw.btnTryAgain.visible = true;
                        this.txtTryAgain.visible = true; }
                        
                            

                        }
                    ,this);
                  
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    //this.cloudtxt0.setText("1 km = 1000 m" + "\n" + this.metre + " km = " + this.metre*1000 + " m");
                   // this.cloud.alpha = 1;
                   // this.cloudtxt0.alpha = 1;
                }
                if (this.tryAgain == 1) {
                    this.draw.btnNext.visible = false;
                    this.txtNext.visible = false;
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.draw.btnShowAnswer.visible = false;
                    this.txtShowAnswer.visible = false;
                    
                }
            }
            else if (this.input0.value != this.correctAns && this.input0.value != 0 && this.numCheck == 1) {
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnTryAgain.visible = false;
                this.txtTryAgain.visible = false;
                console.log("What is value of this.tryAgain: " + this.tryAgain);
                this.cross.alpha = 1;
                if (this.input0.value > 999999) {
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
                }
                else if (this.input0.value >= 1) {
                    this.cloudtxt0.setText("1 m = 100 cm" + "\n" + this.metre1 + " m = " + this.metre1*100 + " cm");
                    this.text00.setText(this.correctAns1 + "cm");
                    this.tween44.start(); //Lines
                    this.tween55.start(); //Lines
                    
                    this.tween55.onComplete.add(function(){
                        this.text11.setText(this.metre1 * 100+ " cm ");
                        this.text22.setText(this.cm + " cm ");
                        this.tween11.start();
                        this.tween22.start();
                    },this); //Lines
                    this.tween11.onComplete.add(function(){
                        this.text11.setText(this.metre1 + " m ");
                        this.cloudTween.start();
                    },this);
                    this.cloudTween.onComplete.add(function(){
                        this.cloudtxt0Tween.start();
                    },this);
                    this.cloudtxt0Tween.onComplete.add(function(){
                        if (this.tryAgain == 1) {
                            this.draw.btnNext.visible = false;
                            this.txtNext.visible = false;
                            this.draw.btnTryAgain.visible = false;
                            this.txtTryAgain.visible = false;
                            this.draw.btnShowAnswer.visible = true;
                            this.txtShowAnswer.visible = true;
                            
                        }
                        if (this.draw.btnShowAnswer.visible == false) {
                        this.draw.btnTryAgain.visible = true;
                        this.txtTryAgain.visible = true; }
                        
                            

                        }
                    ,this);
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    //this.cloud.alpha = 1;
                    //this.cloudtxt0.alpha = 1;
                }
               /*if (this.tryAgain == 1) {
                    this.draw.btnNext.visible = false;
                    this.txtNext.visible = false;
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.draw.btnShowAnswer.visible = true;
                    this.txtShowAnswer.visible = true;
                    
                } */
            }
            else if (this.input1.value != this.correctAns && this.input1.value != 0 && this.numCheck == 2) {
                //console.log("In metres and centimetres");
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnTryAgain.visible = true;
                this.txtTryAgain.visible = true;
                console.log("What is value of this.tryAgain: " + this.tryAgain);
                this.cross.alpha = 1;
                if (this.input1.value < 100) {
                    console.log("Less than 100");
                    this.word1.setText("The units are different.\nYou need to first change\nkm to m.")
                    /*this.text00.setText(this.metre1 + " m " + this.cm1 + " cm ");
                    this.text11.setText(this.metre1 + " m ");
                    this.text22.setText(this.cm1 + " cm ");
                    this.tween44.start(); //Lines
                    this.tween55.start(); //Lines
                    this.tween11.start();
                    this.tween22.start();
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    this.cloudtxt0.setText("1 m = 100 cm" + "\n" + this.metre1 + " m = " + this.metre1*100 + " cm");
                    this.cloud.alpha = 1;
                    this.cloudtxt0.alpha = 1; */
                    this.word.setText(this.metre1 + "  m  " + this.cm1 + "  cm  ");
                    this.tween8.start();
                    this.circleanim0.animations.play('drawnCircle',10,false);
                    this.circleanim1.animations.play('drawnCircle1',10,false);
                    //this.tween9.start();
                    //this.tween10.start();
                    //this.tween111.start();
                    this.cross.alpha = 1;

                    if (this.tryAgain == 1) {
                        this.draw.btnNext.visible = false;
                        this.txtNext.visible = false;
                        this.draw.btnTryAgain.visible = false;
                        this.txtTryAgain.visible = false;
                        this.draw.btnShowAnswer.visible = true;
                        this.txtShowAnswer.visible = true;
                        
                    }
                }
                else if (this.input1.value >= 100) {
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.text00.setText(this.metre1 + " m " + this.cm1 + " cm ");
                    this.tween44.start(); //Lines
                    this.tween55.start();
                    this.tween55.onComplete.add(function(){
                        this.text11.setText(this.metre1 + " m ");
                        this.text22.setText(this.cm1 + " cm ");
                        this.tween11.start();
                        this.tween22.start();
                    },this); //Lines
                    this.tween11.onComplete.add(function(){
                        this.text11.setText(this.metre1 * 100 + " cm ");
                        this.cloudTween.start();
                    },this);
                    this.cloudTween.onComplete.add(function(){
                        this.cloudtxt0Tween.start();
                    },this);
                    this.cloudtxt0Tween.onComplete.add(function(){
                        if (this.tryAgain == 1) {
                            this.draw.btnNext.visible = false;
                            this.txtNext.visible = false;
                            this.draw.btnTryAgain.visible = false;
                            this.txtTryAgain.visible = false;
                            this.draw.btnShowAnswer.visible = true;
                            this.txtShowAnswer.visible = true;
                            
                        }
                        if (this.draw.btnShowAnswer.visible == false) {
                        this.draw.btnTryAgain.visible = true;
                        this.txtTryAgain.visible = true; }
                        
                            

                        }
                    ,this);
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    this.cloudtxt0.setText("1 m = 100 cm" + "\n" + this.metre1 + " m = " + this.metre1*100 + " cm");
                    //this.cloud.alpha = 1;
                    //this.cloudtxt0.alpha = 1;
                    
                    this.cross.alpha = 1;
                }
            }
            else if (this.input1.value != this.correctAns && this.input1.value != 0 && this.numCheck == 3) {
                //console.log("In metres and centimetres");
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnTryAgain.visible = true;
                this.txtTryAgain.visible = true;
                console.log("What is value of this.tryAgain: " + this.tryAgain);
                this.cross.alpha = 1;
                if (this.input1.value < 100) {
                    this.word.setText(this.metre1 + "  km  " + this.cm1 + "  m  ");
                    this.tween8.start();
                    this.tween9.start();
                    //this.tween10.start();
                   //this.tween111.start();
                    this.circleanim0.animations.play('drawnCircle',10,false);
                    this.circleanim1.animations.play('drawnCircle1',10,false);
                    this.cross.alpha = 1;
                    console.log(this.input0.value + 'aaaaaaaaaaaaaaaaaaaaaaa');

                    if (this.tryAgain == 1) {
                        this.draw.btnNext.visible = false;
                        this.txtNext.visible = false;111
                        this.draw.btnTryAgain.visible = false;
                        this.txtTryAgain.visible = false;
                        this.draw.btnShowAnswer.visible = true;
                        this.txtShowAnswer.visible = true;
                        
                    }
                }
                else if (this.input1.value >= 100) {
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.text00.setText(this.metre1 + " km " + this.cm1 + " m ");
                    this.tween44.start(); //Lines
                    this.tween55.start(); //Lines
                    this.tween55.onComplete.add(function(){
                        this.text11.setText(this.metre1 + " km ");
                        this.text22.setText(this.cm1 + " m ");
                        this.tween11.start();
                        this.tween22.start();
                    },this);
                    this.tween11.onComplete.add(function(){
                        this.text11.setText(this.metre1 * 1000 + " m ");
                        this.cloudTween.start();
                    },this);
                    this.cloudTween.onComplete.add(function(){
                        this.cloudtxt0Tween.start();
                    },this);
                    this.cloudtxt0Tween.onComplete.add(function(){
                        if (this.tryAgain == 1) {
                            this.draw.btnNext.visible = false;
                            this.txtNext.visible = false;
                            this.draw.btnTryAgain.visible = false;
                            this.txtTryAgain.visible = false;
                            this.draw.btnShowAnswer.visible = true;
                            this.txtShowAnswer.visible = true;
                            
                        }
                        if (this.draw.btnShowAnswer.visible == false) {
                        this.draw.btnTryAgain.visible = true;
                        this.txtTryAgain.visible = true; }
                        
                            

                        }
                    ,this);
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    this.cloudtxt0.setText("1 km = 1000 m" + "\n" + this.metre1 + " km = " + this.metre1*1000 + " m");
                    //this.cloud.alpha = 1;
                    //this.cloudtxt0.alpha = 1;

                    this.cross.alpha = 1;
                }
                /*if (this.tryAgain == 1) {
                    this.draw.btnNext.visible = false;
                    this.txtNext.visible = false;
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.draw.btnShowAnswer.visible = true;
                    this.txtShowAnswer.visible = true;
                    
                }*/
            }
            else if (this.input1.value != this.correctAns && this.input1.value != 0 && this.numCheck == 4) {
                //console.log("In metres and centimetres");
                this.draw.btnCheck.visible = false;
                this.txtCheck.visible = false;
                this.draw.btnTryAgain.visible = true;
                this.txtTryAgain.visible = true;
                console.log("What is value of this.tryAgain: " + this.tryAgain);
                this.cross.alpha = 1;
                if (this.input1.value < 100) {
                    this.word.setText(this.metre1 + "  km  " + this.cm1 + "  m  ");
                    this.tween8.start();
                    this.tween9.start();
                    //this.tween10.start();
                   //this.tween111.start();
                    this.circleanim0.animations.play('drawnCircle',10,false);
                    this.circleanim1.animations.play('drawnCircle1',10,false);
                    this.cross.alpha = 1;
                    console.log(this.input0.value + 'aaaaaaaaaaaaaaaaaaaaaaa');

                    if (this.tryAgain == 1) {
                        this.draw.btnNext.visible = false;
                        this.txtNext.visible = false;111
                        this.draw.btnTryAgain.visible = false;
                        this.txtTryAgain.visible = false;
                        this.draw.btnShowAnswer.visible = true;
                        this.txtShowAnswer.visible = true;
                        
                    }
                }
                else if (this.input1.value >= 100) {
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.text00.setText(this.metre1 + " km " + this.cm1 + " m ");
                    this.tween44.start(); //Lines
                    this.tween55.start(); //Lines
                    this.tween55.onComplete.add(function(){
                        this.text11.setText(this.metre1 + " km ");
                        this.text22.setText(this.cm1 + " m ");
                        this.tween11.start();
                        this.tween22.start();
                    },this);
                    this.tween11.onComplete.add(function(){
                        this.text11.setText(this.metre1 * 1000 + " m ");
                        this.cloudTween.start();
                    },this);
                    this.cloudTween.onComplete.add(function(){
                        this.cloudtxt0Tween.start();
                    },this);
                    this.cloudtxt0Tween.onComplete.add(function(){
                        if (this.tryAgain == 1) {
                            this.draw.btnNext.visible = false;
                            this.txtNext.visible = false;
                            this.draw.btnTryAgain.visible = false;
                            this.txtTryAgain.visible = false;
                            this.draw.btnShowAnswer.visible = true;
                            this.txtShowAnswer.visible = true;
                            
                        }
                        if (this.draw.btnShowAnswer.visible == false) {
                        this.draw.btnTryAgain.visible = true;
                        this.txtTryAgain.visible = true; }
                        
                            

                        }
                    ,this);
                    this.tween00.start();
                    this.boolRemoveTween = true;
                    this.cloudtxt0.setText("1 km = 1000 m" + "\n" + this.metre1 + " km = " + this.metre1*1000 + " m");
                    //this.cloud.alpha = 1;
                    //this.cloudtxt0.alpha = 1;

                    this.cross.alpha = 1;
                }
                /*if (this.tryAgain == 1) {
                    this.draw.btnNext.visible = false;
                    this.txtNext.visible = false;
                    this.draw.btnTryAgain.visible = false;
                    this.txtTryAgain.visible = false;
                    this.draw.btnShowAnswer.visible = true;
                    this.txtShowAnswer.visible = true;
                    
                }*/
            }
        },this);
        //Next
        this.draw.btnNext = GameInstance.add.graphics(0,0);
        this.draw.btnNext.lineStyle(1,0x150E88,1);
        this.draw.btnNext.beginFill(0xC5DEFD, 1);
        this.draw.btnNext.drawRect(1000+200,800,150,70);
        this.draw.btnNext.endFill();
        this.txtNext = GameInstance.add.text(1045+200,820,"Next");
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
            this.drawRoundedRec6.alpha = 0;
            this.numAns6.alpha = 0;
            this.numAnsTween7.start();
            if (this.input0.value == this.metre && this.total < 5 && this.seconds >= 2 && this.numCheck == 1 || this.boolShowAnswer == true && this.total < 5 && this.seconds >= 2 && this.numCheck == 1) 
            {
                // In metres and centimetres
                console.log("User got it correct");
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
                this.draw.btnCheck.visible = true;
                this.txtCheck.visible = true; 
                //Changing the questions if user got it correct upon clicking btnNext
                this.measurement.setText("m");
                this.measurement1.setText("cm");
                this.metre1 = this.randomNumbers().metreProperty;
                this.cm1 = this.randomNumbers().cmProperty;
                this.correctAns1 = (this.metre1 * 100) + this.cm1; //m 
                this.questions.q0.setText("What is " +  this.correctAns1 + "m " + "in metres and centimetres? ");
                this.questions.q0.addColor('#ff0000',7);
                this.questions.q0.addColor('#000000',13);
                this.questions.q0.addFontWeight('bold',7);
                this.questions.q0.addFontWeight('normal',13);
                this.drawLine1 = GameInstance.add.graphics(0,0);
                this.drawLine1.lineStyle(3,0x000000,1);
                this.drawLine1.moveTo(625,250);
                this.drawLine1.lineTo(1150,250);
                this.drawLine1.endFill();
                this.total++;
                this.input0.setText("");
                this.input1.setText("");
                console.log("Questions: " + this.total + "/5");
                //Changing the texts for the tween
                this.text0.setText(this.correctAns1+ " m ");
                this.text1.setText(this.metre1 + " m ");
                this.text2.setText(this.cm1 + " cm ");
                this.text3.setText(this.metre1 + " m " + this.cm1 + " cm ");
                this.text0.alpha = 0;
                this.text1.alpha = 0;
                this.text2.alpha = 0;
                this.text3.alpha = 0;
                /*this.line0.alpha = 0;
                this.line2.alpha = 0;
                this.line3.alpha = 0;
                this.line4.alpha = 0;*/
                this.line0.scale.setTo(0,0);
                this.line2.scale.setTo(0,0);
                this.line3.scale.setTo(0,0);
                this.line4.scale.setTo(0,0);
                //Timer
                this.timer.pause();
                this.seconds = 0;
                //
                this.tick.alpha = 0;
                this.cross.alpha = 0;
                //
                this.questionNum.setText("Q" + this.total + " of 5");
                //
                this.numAns.alpha = 0;
                this.drawRoundedRec.alpha = 0;
                this.numAnsTween1.start();

                this.numAns2.alpha = 0;
                this.drawRoundedRec2.alpha = 0;
                this.numAnsTween3.start();
                
            }
            else if (this.numCheck == 2) 
            {
                //Total metres & cm in cm
                console.log("User got it correct");
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
                this.draw.btnCheck.visible = true;
                this.txtCheck.visible = true; 
                //Changing the questions if user got it correct upon clicking btnNext
                this.input0.visible = false;
                this.measurement.setText("");
                this.input1.position.setTo(GameInstance.world.centerX-390, GameInstance.world.centerY-150);
                this.measurement1.setText("cm");
                this.measurement1.position.setTo(GameInstance.world.centerX-200, GameInstance.world.centerY-140);
                this.metre1 = this.randomNumbers().metreProperty;
                this.cm1 = this.randomNumbers().cmProperty;
                this.correctAns1 = (this.metre1 * 100) + this.cm1; //m 
                this.questions.q0.alpha = 0;
                this.questions.q1 = GameInstance.add.text(0,0,"What is " +  this.metre1 + " m " + this.cm1 + " cm " + "in centimetres? ");
                this.questions.q1.fontWeight = 'normal';
                this.questions.q1.addColor('#ff0000',7);
                this.questions.q1.addColor('#000000',17);
                this.questions.q1.addFontWeight('bold',7);
                this.questions.q1.addFontWeight('normal',17);
                this.questions.q1.fontSize = 50;
                this.questions.q1.position.setTo(GameInstance.world.centerX-440,GameInstance.world.centerY-300);
                this.total++;
                this.input0.setText("");
                this.input1.setText("");
                console.log("Questions: " + this.total + "/5");
                //Changing the texts for the tween
                this.text0.setText(this.metre1 + " m " + this.cm1 + " cm ");
                this.text1.setText(this.metre1 + " m ");
                this.text2.setText(this.cm1 + " cm ");
                this.text3.setText(this.correctAns1+ " m ");
                this.text0.alpha = 0;
                this.text1.alpha = 0;
                this.text2.alpha = 0;
                this.text3.alpha = 0;
                /*this.line0.alpha = 0;
                this.line2.alpha = 0;
                this.line3.alpha = 0;
                this.line4.alpha = 0;*/
                this.line0.scale.setTo(0,0);
                this.line2.scale.setTo(0,0);
                this.line3.scale.setTo(0,0);
                this.line4.scale.setTo(0,0);
                //Timer
                this.timer.pause();
                this.seconds = 0;
                //
                this.tick.position.setTo(500,400);
                this.tick.alpha = 0;
                this.cross.alpha = 0;
                this.cross.position.setTo(500,400);
                //
                this.questionNum.setText("Q" + this.total + " of 5");
                //
                this.drawLine.alpha = 0;
                this.drawLine1.alpha = 0;
                this.drawLine2 = GameInstance.add.graphics(0,0)
                this.drawLine2.lineStyle(3,0x000000,1);
                this.drawLine2.moveTo(800,250);
                this.drawLine2.lineTo(1050,250);
                this.drawLine2.endFill();

                this.numAns.alpha = 0;
                this.drawRoundedRec.alpha = 0;
                this.numAnsTween1.start();

                this.numAns2.alpha = 0;
                this.drawRoundedRec2.alpha = 0;
                this.numAnsTween3.start();
            }
            else if (this.numCheck == 3) 
            {
                //Total kilometres & m in metres
                console.log("User got it correct");
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
                this.draw.btnCheck.visible = true;
                this.txtCheck.visible = true; 
                //Changing the questions if user got it correct upon clicking btnNext
                this.input0.visible = false;
                this.measurement.setText("");
                this.input1.position.setTo(GameInstance.world.centerX-390, GameInstance.world.centerY-150);
                this.measurement1.setText("m");
                this.measurement1.position.setTo(GameInstance.world.centerX-200, GameInstance.world.centerY-140);
                this.metre1 = this.randomNumbers().metreProperty;
                this.cm1 = this.randomNumbers().cmProperty;
                this.correctAns1 = (this.metre1 * 1000) + this.cm1; //m 
                this.questions.q0.alpha = 0;
                this.questions.q1.setText("What is " +  this.metre1 + " km " + this.cm1 + " m " + "in metres? ");
                this.questions.q1.fontWeight = 'normal';
                this.questions.q1.addColor('#ff0000',7);
                this.questions.q1.addColor('#000000',17);
                this.questions.q1.addFontWeight('bold',7);
                this.questions.q1.addFontWeight('normal',17);
                this.questions.q1.fontSize = 50;
                this.questions.q1.position.setTo(GameInstance.world.centerX-440,GameInstance.world.centerY-300);
                this.total++;
                this.input0.setText("");
                this.input1.setText("");
                console.log("Questions: " + this.total + "/5");
                //Changing the texts for the tween
                this.text0.setText(this.metre1 + " km " + this.cm1 + " m ");
                this.text1.setText(this.metre1 + " km ");
                this.text2.setText(this.cm1 + " m ");
                this.text3.setText(this.correctAns1+ " m ");
                this.text0.alpha = 0;
                this.text1.alpha = 0;
                this.text2.alpha = 0;
                this.text3.alpha = 0;
                /*this.line0.alpha = 0;
                this.line2.alpha = 0;
                this.line3.alpha = 0;
                this.line4.alpha = 0;*/
                this.line0.scale.setTo(0,0);
                this.line2.scale.setTo(0,0);
                this.line3.scale.setTo(0,0);
                this.line4.scale.setTo(0,0);
                //Timer
                this.timer.pause();
                this.seconds = 0;
                //
                this.tick.position.setTo(500,400);
                this.tick.alpha = 0;
                this.cross.alpha = 0;
                this.cross.position.setTo(500,400);
                //
                this.questionNum.setText("Q" + this.total + " of 5");
                //
                this.drawLine.alpha = 0;
                this.drawLine1.alpha = 0;
                this.drawLine2.alpha = 0;
                this.drawLine3 = GameInstance.add.graphics(0,0)
                this.drawLine3.lineStyle(3,0x000000,1);
                this.drawLine3.moveTo(800,250);
                this.drawLine3.lineTo(970,250);
                this.drawLine3.endFill();

                this.numAns.alpha = 0;
                this.drawRoundedRec.alpha = 0;
                this.numAnsTween1.start();

                this.numAns2.alpha = 0;
                this.drawRoundedRec2.alpha = 0;
                this.numAnsTween3.start();
            }
            else if (this.numCheck == 4) 
            {
                //Total kilometres & m in metres
                console.log("User got it correct");
                this.draw.btnNext.visible = false;
                this.txtNext.visible = false;
                this.draw.btnCheck.visible = true;
                this.txtCheck.visible = true; 
                //Changing the questions if user got it correct upon clicking btnNext
                this.input0.visible = false;
                this.measurement.setText("");
                this.input1.position.setTo(GameInstance.world.centerX-390, GameInstance.world.centerY-150);
                this.measurement1.setText("m");
                this.measurement1.position.setTo(GameInstance.world.centerX-200, GameInstance.world.centerY-140);
                this.metre1 = this.randomNumbers().metreProperty;
                this.cm1 = this.randomNumbers().cmProperty;
                this.correctAns1 = (this.metre1 * 1000) + this.cm1; //m 
                this.questions.q0.alpha = 0;
                this.questions.q1.setText("What is " +  this.metre1 + " km " + this.cm1 + " m " + "in metres? ");
                this.questions.q1.fontWeight = 'normal';
                this.questions.q1.addColor('#ff0000',7);
                this.questions.q1.addColor('#000000',17);
                this.questions.q1.addFontWeight('bold',7);
                this.questions.q1.addFontWeight('normal',17);
                this.questions.q1.fontSize = 50;
                this.questions.q1.position.setTo(GameInstance.world.centerX-440,GameInstance.world.centerY-300);
                this.total++;
                this.input0.setText("");
                this.input1.setText("");
                console.log("Questions: " + this.total + "/5");
                //Changing the texts for the tween
                this.text0.setText(this.metre1 + " km " + this.cm1 + " m ");
                this.text1.setText(this.metre1 + " km ");
                this.text2.setText(this.cm1 + " m ");
                this.text3.setText(this.correctAns1+ " m ");
                this.text0.alpha = 0;
                this.text1.alpha = 0;
                this.text2.alpha = 0;
                this.text3.alpha = 0;
                /*this.line0.alpha = 0;
                this.line2.alpha = 0;
                this.line3.alpha = 0;
                this.line4.alpha = 0;*/
                this.line0.scale.setTo(0,0);
                this.line2.scale.setTo(0,0);
                this.line3.scale.setTo(0,0);
                this.line4.scale.setTo(0,0);
                //Timer
                this.timer.pause();
                this.seconds = 0;
                //
                this.tick.position.setTo(500,400);
                this.tick.alpha = 0;
                this.cross.alpha = 0;
                this.cross.position.setTo(500,400);
                //
                this.questionNum.setText("Q" + this.total + " of 5");
                //
                this.drawLine.alpha = 0;
                this.drawLine1.alpha = 0;
                this.drawLine2.alpha = 0;
                this.drawLine3 = GameInstance.add.graphics(0,0)
                this.drawLine3.lineStyle(3,0x000000,1);
                this.drawLine3.moveTo(800,250);
                this.drawLine3.lineTo(970,250);
                this.drawLine3.endFill();

                this.numAns.alpha = 0;
                this.drawRoundedRec.alpha = 0;
                this.numAnsTween1.start();

                this.numAns2.alpha = 0;
                this.drawRoundedRec2.alpha = 0;
                this.numAnsTween3.start();
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
            if (this.drawnCircle.isPlaying == false) {
            this.input0.setText("");
            this.input1.setText("");
            this.draw.btnTryAgain.visible = false;
            this.txtTryAgain.visible = false;
            this.draw.btnCheck.visible = true;
            this.txtCheck.visible = true;
            this.tryAgain++;
            this.cross.alpha = 0;
            //For tween
            this.word.alpha = 0;
            this.word1.alpha = 0;
            this.drawCircle.alpha = 0;
            this.drawCircle1.alpha = 0;
            //
            this.text00.alpha = 0;
            this.text11.alpha = 0;
            this.text22.alpha = 0;
            /*this.line00.alpha = 0;
            this.line22.alpha = 0;*/
            this.line00.scale.setTo(0,0);
            this.line22.scale.setTo(0,0);
            //
            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0; 
            this.circleanim0.frame = 0;
            this.circleanim1.frame = 0;
        }
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
        drawRect3(this);
        drawRect6(this);
        this.draw.btnShowAnswer.events.onInputDown.add(function(){
            this.circleanim0.frame = 0;
            this.circleanim1.frame = 0;
            if (this.drawnCircle.isPlaying == false) {
            if (this.numCheck == 0) {
            this.text0.setText(this.correctAns + "m");
            this.text0.position.setTo(860+245,450-30);
            this.text3.setText(this.metre + " km " + this.cm + " m ");
            this.text3.position.setTo(880+215,650);
            this.draw.btnShowAnswer.visible = false;
            this.txtShowAnswer.visible = false;
            this.draw.btnNext.visible = false;
            this.txtNext.visible = false;
            //Timer
            this.timer.resume();
            this.timer.start();
            //
            this.tryAgain = 0;
            this.input0.setText("");
            this.input1.setText("");
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
            this.tween3.onComplete.add(function(){
                this.numAns.alpha = 1;
                this.numAns.setText(this.metre);
                this.numAnsTween.start();//asd 
                this.numAns2.alpha = 1
                this.numAns2.setText(this.cm);
                this.numAnsTween2.start();
                
            },this);
            this.numAnsTween.onComplete.add(function(){
                this.drawRoundedRec.alpha = 1;
                this.drawRoundedRec2.alpha = 1;
                this.draw.btnNext.visible = true;
                this.txtNext.visible = true;
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
            /*this.line00.alpha = 0;
            this.line22.alpha = 0;*/
            this.line00.scale.setTo(0,0);
            this.line22.scale.setTo(0,0);
            //

            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0;

            //
            this.cross.alpha = 0;
            //
            //
            if (this.total == 5) {
                this.draw.btnSegment.visible = true;
                this.txtSegment.visible = true;
                this.draw.desc.visible = true;
                this.desc.visible = true;
            }

            this.numCheck = 1;
        }
        else if (this.numCheck == 1) { 
            this.text3.position.setTo(880+245,650);
            this.draw.btnShowAnswer.visible = false;
            this.txtShowAnswer.visible = false;
            this.draw.btnNext.visible = false;
            this.txtNext.visible = false;
            //Timer
            this.timer.resume();
            this.timer.start();
            //
            this.tryAgain = 0;
            this.input0.setText("");
            this.input1.setText("");
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
            this.tween3.onComplete.add(function(){
                this.numAns.alpha = 1;
                this.numAns.setText(this.metre1);
                this.numAnsTween.start();//asd 
                this.numAns2.alpha = 1
                this.numAns2.setText(this.cm1);
                this.numAnsTween2.start();
                
            },this);
            this.numAnsTween.onComplete.add(function(){
                this.drawRoundedRec.alpha = 1;
                this.drawRoundedRec2.alpha = 1;
                this.draw.btnNext.visible = true;
                this.txtNext.visible = true;
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
            /*this.line00.alpha = 0;
            this.line22.alpha = 0;*/
            this.line00.scale.setTo(0,0);
            this.line22.scale.setTo(0,0);
            //

            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0;

            //
            this.cross.alpha = 0;
            //
            //
            if (this.total == 5) {
                this.draw.btnSegment.visible = true;
                this.txtSegment.visible = true;
                this.draw.desc.visible = true;
                this.desc.visible = true;
            }

            this.numCheck = 2;

        }
        else if (this.numCheck == 2) { 
            this.draw.btnShowAnswer.visible = false;
            this.txtShowAnswer.visible = false;
            this.draw.btnNext.visible = false;
            this.txtNext.visible = false;
            //Timer
            this.timer.resume();
            this.timer.start();
            //
            this.tryAgain = 0;
            //this.input0.setText(this.metre1);
            this.input1.setText("");
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
            this.tween3.onComplete.add(function(){
                if (this.input0.value != this.correctAns) {
                this.numAns6.alpha = 1;
                this.numAns6.setText(this.correctAns1);
                this.numAnsTween6.start();//asd 
                }
            },this);
            this.numAnsTween6.onComplete.add(function(){
                this.drawRoundedRec6.alpha = 1;
                this.draw.btnNext.visible = true;
                this.txtNext.visible = true;
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
            /*this.line00.alpha = 0;
            this.line22.alpha = 0;*/
            this.line00.scale.setTo(0,0);
            this.line22.scale.setTo(0,0);
            //

            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0;

            //
            this.cross.alpha = 0;
            //
            //
            if (this.total == 5) {
                this.draw.btnSegment.visible = true;
                this.txtSegment.visible = true;
                this.draw.desc.visible = true;
                this.desc.visible = true;
            }

            this.numCheck = 3;

        }
        else if (this.numCheck == 3) { 
            this.draw.btnShowAnswer.visible = false;
            this.txtShowAnswer.visible = false;
            this.draw.btnNext.visible = false;
            this.txtNext.visible = false;
            //Timer
            this.timer.resume();
            this.timer.start();
            //
            this.tryAgain = 0;
            //this.input0.setText(this.metre1);
            this.input1.setText("");
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
            /*this.line00.alpha = 0;
            this.line22.alpha = 0;*/
            this.line00.scale.setTo(0,0);
            this.line22.scale.setTo(0,0);
            //

            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0;

            //
            this.cross.alpha = 0;
            //
            //
            if (this.total == 5) {
                this.draw.btnSegment.visible = true;
                this.txtSegment.visible = true;
                this.draw.desc.visible = true;
                this.desc.visible = true;
            }

            this.numCheck = 4;

        }
        else if (this.numCheck == 4) { 
            this.draw.btnShowAnswer.visible = false;
            this.txtShowAnswer.visible = false;
            this.draw.btnNext.visible = false;
            this.txtNext.visible = false;
            //Timer
            this.timer.resume();
            this.timer.start();
            //
            this.tryAgain = 0;
            //this.input0.setText(this.metre1);
            this.input1.setText("");
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
            this.tween3.onComplete.add(function(){
                if (this.input0.value != this.correctAns) {
                this.numAns6.alpha = 1;
                this.numAns6.setText(this.correctAns);
                this.numAnsTween6.start();//asd 
                }
            },this);
            this.numAnsTween.onComplete.add(function(){
                this.drawRoundedRec6.alpha = 1;
                this.draw.btnNext.visible = true;
                this.txtNext.visible = true;
                if (this.total == 5) {
                    this.draw.btnSegment.visible = true;
                    this.txtSegment.visible = true;
                    this.draw.desc.visible = true;
                    this.desc.visible = true;
                }
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
            /*this.line00.alpha = 0;
            this.line22.alpha = 0;*/
            this.line00.scale.setTo(0,0);
            this.line22.scale.setTo(0,0);
            //

            this.cloud.alpha = 0;
            this.cloudtxt0.alpha = 0;

            //
            this.cross.alpha = 0;
            //
            //
       

            this.numCheck = 5;

        }
        
    }
            
       },
       this);

       //LineGraphics
       this.drawLine = GameInstance.add.graphics(0,0);
       this.drawLine.lineStyle(3,0x000000,1);
       this.drawLine.moveTo(670,250);
       this.drawLine.lineTo(1160,250);

       //Creating texts and lines for the tween.
       this.text0 = GameInstance.add.text(860+230,450-30,"");
       this.text0.fontSize = 30;
       this.text0.fontWeight = 'normal';
       this.text0.setText(this.metre + " km " + this.cm + " m ");
       this.text0.alpha = 0;

       this.text00 = GameInstance.add.text(860+230,450-30,"");
       this.text00.fontSize = 30;
       this.text00.fontWeight = 'normal';
       this.text00.setText(this.metre + " km " + this.cm + " m ");
       this.text00.alpha = 0;

       this.text1 = GameInstance.add.text(800+230,550-20,"");
       this.text1.fontSize = 30;
       this.text1.fontWeight = 'normal';
       this.text1.setText(this.metre + " km ");
       this.text1.alpha = 0;

       this.text11 = GameInstance.add.text(800+230,550-20,"");
       this.text11.fontSize = 30;
       this.text11.fontWeight = 'normal';
       this.text11.setText(this.metre + " km ");
       this.text11.alpha = 0;

       this.text2 = GameInstance.add.text(1000+230,550-20,"");
       this.text2.fontSize = 30;
       this.text2.fontWeight = 'normal';
       this.text2.setText(this.cm + " m ");
       this.text2.alpha = 0;

       this.text22 = GameInstance.add.text(1000+230,550-20,"");
       this.text22.fontSize = 30;
       this.text22.fontWeight = 'normal';
       this.text22.setText(this.cm + " m ");
       this.text22.alpha = 0;

       this.text3 = GameInstance.add.text(880+230,650,"");
       this.text3.fontSize = 30;
       this.text3.fontWeight = 'normal';
       this.text3.setText(this.correctAns+ " m ");
       this.text3.alpha = 0;

       this.line0 = GameInstance.add.graphics(this.text0.x+30,this.text0.y+35);
       this.line0.lineStyle(1,0x000000,1);
       //this.line0.moveTo(this.text0.x+70,this.text0.y+35);
       this.line0.lineTo(this.text1.x+30-(this.text0.x+30),this.text1.y-(this.text0.y+35));
       this.line0.endFill();
       //this.line0.alpha = 0;
       //this.line0.position.setTo(this.text0.x+70,this.text0.y+35);
       this.line0.scale.setTo(0,0); //asd

       this.line00 = GameInstance.add.graphics(this.text0.x+30,this.text0.y+35);
       this.line00.lineStyle(1,0x000000,1);
       //this.line00.moveTo(this.text0.x+70,this.text0.y+35);
       this.line00.lineTo(this.text1.x+30-(this.text0.x+30),this.text1.y-(this.text0.y+35));
       this.line00.endFill();
       this.line00.scale.setTo(0,0);
       //this.line00.alpha = 0;

       this.line2 = GameInstance.add.graphics(this.text0.x+100,this.text0.y+35);
       this.line2.lineStyle(1,0x000000,1);
       //this.line2.moveTo(this.text0.x+70,this.text0.y+35);
       this.line2.lineTo(this.text2.x+30-(this.text0.x+100),this.text2.y-(this.text0.y+35));
       this.line2.endFill();
       //this.line2.alpha = 0;
       this.line2.scale.setTo(0,0);

       this.line22 = GameInstance.add.graphics(this.text0.x+90,this.text0.y+35);
       this.line22.lineStyle(1,0x000000,1);
       //this.line22.moveTo(this.text0.x+70,this.text0.y+35);
       this.line22.lineTo(this.text2.x+30-(this.text0.x+90),this.text2.y-(this.text0.y+35));
       this.line22.endFill();
       this.line22.scale.setTo(0,0);
       //this.line22.alpha = 0;

       this.line3 = GameInstance.add.graphics(this.text1.x+30,this.text1.y+30);
       this.line3.lineStyle(1,0x000000,1);
       //this.line3.moveTo(this.text3.x+55,this.text3.y);
       this.line3.lineTo(this.text3.x+20-(this.text1.x+30),(this.text3.y)-(this.text1.y+30));
       this.line3.endFill();
       //this.line3.alpha = 0;
       this.line3.scale.setTo(0,0);

       this.line4 = GameInstance.add.graphics(this.text2.x+30,this.text2.y+30);
       this.line4.lineStyle(1,0x000000,1);
       //this.line4.moveTo(this.text3.x+55,this.text3.y);
       this.line4.lineTo(this.text3.x+75-(this.text2.x+30),(this.text3.y)-(this.text2.y+30));
       this.line4.endFill();
       //this.line4.alpha = 0;
       this.line4.scale.setTo(0,0);
       //For the tryagain slides 5.
       this.word = GameInstance.add.text(870+210,430,this.metre + "  km  " + this.cm + "  m  ");
       this.word1 = GameInstance.add.text(800+210,520,"The units are different. \nYou need to first change\nm to cm.")
       this.word.fontWeight = 'normal';
       this.word1.fontWeight = 'normal';
       this.word.alpha = 0;
       this.word1.alpha = 0;
       this.drawCircle = GameInstance.add.graphics(0,0);
       this.drawCircle.lineStyle(3,0xff0000,1);
       this.drawCircle.drawCircle(910+210,450,50);
       this.drawCircle.endFill();
       this.drawCircle.alpha = 0;
       this.drawCircle1 = GameInstance.add.graphics(0,0);
       this.drawCircle1.lineStyle(3,0xff0000,1);
       this.drawCircle1.drawCircle(1000+210,450,50);
       this.drawCircle1.endFill();
       this.drawCircle1.alpha = 0;
       //Cloud
       this.cloud = GameInstance.add.sprite(600+210,200,'cloud');
       this.cloudtxt0 = GameInstance.add.text(700+210,295,"1 km = 1000 m" + "\n" + this.metre + " km = " + this.metre*100 + " m");
       this.cloudtxt0.fontWeight = 'normal';
       this.cloud.alpha = 0;
       this.cloudtxt0.alpha = 0;
       //Circle anim
       this.circleanim0 = GameInstance.add.sprite(885+210,420,'circleanim');
       this.circleanim0.scale.setTo(0.09,0.09);
       this.drawnCircle = this.circleanim0.animations.add('drawnCircle');
       this.circleanim1 = GameInstance.add.sprite(975+210,420,'circleanim');
       this.circleanim1.scale.setTo(0.09,0.09);
       this.drawnCircle1 = this.circleanim1.animations.add('drawnCircle1');

       //PhaserTween
       this.tween0 = this.game.add.tween(this.text0).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween1 = this.game.add.tween(this.text1).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween2 = this.game.add.tween(this.text2).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.tween3 = this.game.add.tween(this.text3).to({alpha:1},500,Phaser.Easing.Linear.None);
       //
       this.tween4 = this.game.add.tween(this.line0.scale).to({x:1, y:1},1000,Phaser.Easing.Linear.None);
       this.tween5 = this.game.add.tween(this.line2.scale).to({x:1, y:1},1000,Phaser.Easing.Linear.None);
       this.tween6 = this.game.add.tween(this.line3.scale).to({x:1, y:1},1000,Phaser.Easing.Linear.None);
       this.tween7 = this.game.add.tween(this.line4.scale).to({x:1, y:1},1000,Phaser.Easing.Linear.None);
       //For the tryagain slides 5.
       this.tween8 = this.game.add.tween(this.word).to({alpha:1},300,Phaser.Easing.Linear.None);
       this.tween9 = this.game.add.tween(this.word1).to({alpha:1},300,Phaser.Easing.Linear.None);
       this.tween10 = this.game.add.tween(this.drawCircle).to({alpha:1},300,Phaser.Easing.Linear.None);
       this.tween111 = this.game.add.tween(this.drawCircle1).to({alpha:1},300,Phaser.Easing.Linear.None);
       //
       this.tween00 = this.game.add.tween(this.text00).to({alpha:1},300,Phaser.Easing.Linear.None);
       this.tween11 = this.game.add.tween(this.text11).to({alpha:1},300,Phaser.Easing.Linear.None);
       this.tween22 = this.game.add.tween(this.text22).to({alpha:1},300,Phaser.Easing.Linear.None);
       this.tween44 = this.game.add.tween(this.line00.scale).to({x:1, y:1},1000,Phaser.Easing.Linear.None);
       this.tween55 = this.game.add.tween(this.line22.scale).to({x:1, y:1},1000,Phaser.Easing.Linear.None);
       //
       //
       //Creating texts and lines for the tween.
       this.newtext0 = GameInstance.add.text(860+230,450-30,"");
       this.newtext0.fontSize = 30;
       this.newtext0.fontWeight = 'normal';
       this.newtext0.setText(this.metre + " km " + this.cm + " m ");
       this.newtext0.alpha = 0;

       this.newtext00 = GameInstance.add.text(860+230,450-30,"");
       this.newtext00.fontSize = 30;
       this.newtext00.fontWeight = 'normal';
       this.newtext00.setText(this.metre + " km " + this.cm + " m ");
       this.newtext00.alpha = 0;

       this.newtext1 = GameInstance.add.text(800+230,550-20,"");
       this.newtext1.fontSize = 30;
       this.newtext1.fontWeight = 'normal';
       this.newtext1.setText(this.metre + " km ");
       this.newtext1.alpha = 0;

       this.newtext11 = GameInstance.add.text(800+230,550-20,"");
       this.newtext11.fontSize = 30;
       this.newtext11.fontWeight = 'normal';
       this.newtext11.setText(this.metre + " km ");
       this.newtext11.alpha = 0;

       this.newtext2 = GameInstance.add.text(1000+230,550-20,"");
       this.newtext2.fontSize = 30;
       this.newtext2.fontWeight = 'normal';
       this.newtext2.setText(this.cm + " m ");
       this.newtext2.alpha = 0;

       this.newtext22 = GameInstance.add.text(1000+230,550-20,"");
       this.newtext22.fontSize = 30;
       this.newtext22.fontWeight = 'normal';
       this.newtext22.setText(this.cm + " m ");
       this.newtext22.alpha = 0;

       this.newtext3 = GameInstance.add.text(880+230,650,"");
       this.newtext3.fontSize = 30;
       this.newtext3.fontWeight = 'normal';
       this.newtext3.setText(this.correctAns+ " m ");
       this.newtext3.alpha = 0;

       this.newline0 = GameInstance.add.graphics(0,0);
       this.newline0.lineStyle(1,0x000000,1);
       this.newline0.moveTo(this.text0.x+70,this.text0.y+35);
       this.newline0.lineTo(this.text1.x+30,this.text1.y);
       this.newline0.endFill();
       this.newline0.alpha = 0;

       this.newline00 = GameInstance.add.graphics(0,0);
       this.newline00.lineStyle(1,0x000000,1);
       this.newline00.moveTo(this.text0.x+70,this.text0.y+35);
       this.newline00.lineTo(this.text1.x+30,this.text1.y);
       this.newline00.endFill();
       this.newline00.alpha = 0;

       this.newline2 = GameInstance.add.graphics(0,0);
       this.newline2.lineStyle(1,0x000000,1);
       this.newline2.moveTo(this.text0.x+70,this.text0.y+35);
       this.newline2.lineTo(this.text2.x+30,this.text2.y);
       this.newline2.endFill();
       this.newline2.alpha = 0;

       this.newline22 = GameInstance.add.graphics(0,0);
       this.newline22.lineStyle(1,0x000000,1);
       this.newline22.moveTo(this.text0.x+70,this.text0.y+35);
       this.newline22.lineTo(this.text2.x+30,this.text2.y);
       this.newline22.endFill();
       this.newline22.alpha = 0;

       this.newline3 = GameInstance.add.graphics(0,0);
       this.newline3.lineStyle(1,0x000000,1);
       this.newline3.moveTo(this.text3.x+55,this.text3.y);
       this.newline3.lineTo(this.text1.x+30,this.text1.y+30);
       this.newline3.endFill();
       this.newline3.alpha = 0;

       this.newline4 = GameInstance.add.graphics(0,0);
       this.newline4.lineStyle(1,0x000000,1);
       this.newline4.moveTo(this.text3.x+55,this.text3.y);
       this.newline4.lineTo(this.text2.x+30,this.text2.y+30);
       this.newline4.endFill();
       this.newline4.alpha = 0;
       //For the tryagain slides 5.
       this.newword = GameInstance.add.text(870,430,this.metre + "  km  " + this.cm + "  m  ");
       this.newword1 = GameInstance.add.text(800,520,"The units are different. \nYou need to first change\nm to cm.")
       this.newword.fontWeight = 'normal';
       this.newword1.fontWeight = 'normal';
       this.newword.alpha = 0;
       this.newword1.alpha = 0;
       this.newdrawCircle = GameInstance.add.graphics(0,0);
       this.newdrawCircle.lineStyle(3,0xff0000,1);
       this.newdrawCircle.drawCircle(910,450,50);
       this.newdrawCircle.endFill();
       this.newdrawCircle.alpha = 0;
       this.newdrawCircle1 = GameInstance.add.graphics(0,0);
       this.newdrawCircle1.lineStyle(3,0xff0000,1);
       this.newdrawCircle1.drawCircle(1000,450,50);
       this.newdrawCircle1.endFill();
       this.newdrawCircle1.alpha = 0;
       //Cloud
       this.newcloud = GameInstance.add.sprite(600+210,200,'cloud');
       this.newcloudtxt0 = GameInstance.add.text(700+210,295,"1 km = 1000 m" + "\n" + this.metre + " km = " + this.metre*100 + " m");
       this.newcloudtxt0.fontWeight = 'normal';
       this.newcloud.alpha = 0;
       this.newcloudtxt0.alpha = 0;

       //PhaserTween
       this.newtween0 = this.game.add.tween(this.newtext0).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween1 = this.game.add.tween(this.newtext1).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween2 = this.game.add.tween(this.newtext2).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween3 = this.game.add.tween(this.newtext3).to({alpha:1},500,Phaser.Easing.Linear.None);
       //
       this.newtween4 = this.game.add.tween(this.newline0).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween5 = this.game.add.tween(this.newline2).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween6 = this.game.add.tween(this.newline3).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween7 = this.game.add.tween(this.newline4).to({alpha:1},500,Phaser.Easing.Linear.None);
       //For the tryagain slides 5.
       this.newtween8 = this.game.add.tween(this.newword).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween9 = this.game.add.tween(this.newword1).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween10 = this.game.add.tween(this.newdrawCircle).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween111 = this.game.add.tween(this.newdrawCircle1).to({alpha:1},500,Phaser.Easing.Linear.None);
       //
       this.newtween00 = this.game.add.tween(this.newtext00).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween11 = this.game.add.tween(this.newtext11).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween22 = this.game.add.tween(this.newtext22).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween44 = this.game.add.tween(this.newline00).to({alpha:1},500,Phaser.Easing.Linear.None);
       this.newtween55 = this.game.add.tween(this.newline22).to({alpha:1},500,Phaser.Easing.Linear.None);
       //
       //Cloud Tween
       this.cloudTween = this.game.add.tween(this.cloud).to({alpha:1},1000,Phaser.Easing.Linear.None);
       this.cloudtxt0Tween = this.game.add.tween(this.cloudtxt0).to({alpha:1},1000,Phaser.Easing.Linear.None);
       //Adding the crosses and ticks
       this.tick = GameInstance.add.sprite(750,400,'tick');
       this.cross = GameInstance.add.sprite(750,400,'cross');
       this.tick.alpha = 0;
       this.cross.alpha = 0;

       //
       //
       //Creating to the next question button.
       this.draw.btnSegment = GameInstance.add.graphics(0,0);
       this.draw.btnSegment.lineStyle(1,0x150E88,1);
       this.draw.btnSegment.beginFill(0xC5DEFD, 1);
       this.draw.btnSegment.drawRect(1000+180,800,170,70);
       this.draw.btnSegment.endFill();
       this.txtSegment = GameInstance.add.text(1005+180,820,"The End");
       this.draw.btnSegment.inputEnabled = true;
       this.draw.btnSegment.visible = false;
       this.txtSegment.visible = false;
       //
       this.draw.desc = GameInstance.add.graphics(0,0);
       this.draw.desc.lineStyle(1,0x150E88,1);
       this.draw.desc.beginFill(0xf1f1f1, 1);
       this.draw.desc.drawRect(1000+160,880,190,40);
       this.draw.desc.endFill();
       this.draw.desc.alpha = 0;
       this.desc = GameInstance.add.text(1005+160,885,"");
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
       this.draw.questionNum.drawRect(100+150,190-100,190,70);
       this.draw.questionNum.endFill();
       this.questionNum = GameInstance.add.text(135+150,205-100,"Q" + this.total + " of 5");
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
            this.numCheck = 0;
            GameInstance.state.start("state1");
        },this);

       this.home.events.onInputDown.add(function(){
           this.total = 1;
           this.numCheck = 0;
        },this);



    },
    update:function(){
        //console.log("What is the time: " + this.seconds);
        //console.log("Try again: " + this.tryAgain);
        /*if (this.seconds < 2){
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
        };*/
        console.log("What is this numCheck value: " + this.numCheck);
    },
    randomNumbers: function(){
        let metre = (Math.floor(Math.random()*9)+1);
        let cm = (Math.floor(Math.random()*50)+10);
        
     
        return {metreProperty:metre, cmProperty:cm}
    }
    
};
