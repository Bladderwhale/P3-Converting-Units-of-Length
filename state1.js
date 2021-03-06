
demo.state1 = function() {}
demo.state1.prototype = {
    title:{}, draw:{},
    preload: function(){
        loadAssets();
    },
    create: function(){
        GameInstance.stage.backgroundColor = '#DDDDDD';
        console.log("state1");
        addChangeStateEventListers(); 
        //Background
        background(this);

        //Phaser.Text
        this.title.h1 = GameInstance.add.text(GameInstance.world.centerX,GameInstance.world.centerY-300,"Converting Units of Length");
        this.title.h2 = GameInstance.add.text(GameInstance.world.centerX-130,GameInstance.world.centerY-220,"Select a conversion.");
        this.title.h2.fontWeight = 'normal';
        this.title.h1.anchor.setTo(0.5,0.5);
        this.title.h2.anchor.setTo(0.5,0.5);
        this.title.h1.fontSize = 50;
        this.title.h2.fontSize = 40;
        //End

        //Using Phaser.Button
        this.button1 = GameInstance.add.button(370,370,'button11');
        this.button2 = GameInstance.add.button(370+440,370,'button22');
        this.button3 = GameInstance.add.button(630, 740, 'button33');
       
        //Phaser.Graphics
        //Left (Yellow)
        this.draw.graphics = GameInstance.add.graphics(0,0);
        this.draw.graphics.lineStyle(9,0xffdd0e,1);
        this.draw.graphics.beginFill(0xffdd0e,0.8);
        this.draw.graphics.drawRect(GameInstance.world.centerX-400,GameInstance.world.centerY-150,400,400);
        this.draw.graphics.endFill();
        this.draw.graphics.alpha = 0;
        //Right (Blue)
        this.draw.graphics1 = GameInstance.add.graphics(0,0);
        this.draw.graphics1.lineStyle(9,0x150E88,1);
        this.draw.graphics1.beginFill(0x150E88,0.8);
        this.draw.graphics1.drawRect(GameInstance.world.centerX+50,GameInstance.world.centerY-150,400,400);
        this.draw.graphics1.endFill();
        this.draw.graphics1.alpha = 0;
        //Bottom (Red)
        this.draw.graphics2 = GameInstance.add.graphics(0,0);
        this.draw.graphics2.lineStyle(9,0x8B3407,1);
        this.draw.graphics2.beginFill(0x8B3407,0.8);
        this.draw.graphics2.drawRect(GameInstance.world.centerX-120,GameInstance.world.centerY+280,300,100);
        this.draw.graphics2.endFill();
        this.draw.graphics2.alpha = 0;
        //Left Button
        this.draw.graphics3 = GameInstance.add.graphics(0,0);
        this.draw.graphics3.lineStyle(1,0x150E88,1);
        this.draw.graphics3.beginFill(0xF5F5DC,1);
        this.draw.graphics3.drawRoundedRect(GameInstance.world.centerX-350,GameInstance.world.centerY-100,300,120);
        this.draw.graphics3.endFill();
        this.draw.graphics3.alpha = 0;
        //Left Button
        this.draw.graphics4 = GameInstance.add.graphics(0,0);
        this.draw.graphics4.lineStyle(1,0x150E88,1);
        this.draw.graphics4.beginFill(0xF5F5DC,1);
        this.draw.graphics4.drawRoundedRect(GameInstance.world.centerX-350,GameInstance.world.centerY+50,300,120);
        this.draw.graphics4.endFill();
        this.draw.graphics4.alpha = 0;
        //Right Button
        this.draw.graphics5 = GameInstance.add.graphics(0,0);
        this.draw.graphics5.lineStyle(1,0x150E88,1);
        this.draw.graphics5.beginFill(0xF5F5DC,1);
        this.draw.graphics5.drawRoundedRect(GameInstance.world.centerX+100,GameInstance.world.centerY-100,300,120);
        this.draw.graphics5.endFill();
        this.draw.graphics5.alpha = 0;
        //Right Button
        this.draw.graphics6 = GameInstance.add.graphics(0,0);
        this.draw.graphics6.lineStyle(1,0x150E88,1);
        this.draw.graphics6.beginFill(0xF5F5DC,1);
        this.draw.graphics6.drawRoundedRect(GameInstance.world.centerX+100,GameInstance.world.centerY+50,300,120);
        this.draw.graphics6.endFill();
        this.draw.graphics6.alpha = 0;
        //Bottom Button
        this.draw.graphics7 = GameInstance.add.graphics(0,0);
        this.draw.graphics7.lineStyle(1,0x150E88,1);
        this.draw.graphics7.beginFill(0xF5F5DC,1);
        this.draw.graphics7.drawRoundedRect(GameInstance.world.centerX-100,GameInstance.world.centerY+295,250,70);
        this.draw.graphics7.endFill();
        this.draw.graphics7.alpha = 0;
        //End
        /*
        //Button change sprite while hovering.
        this.draw.graphics.inputEnabled = true;
        this.draw.graphics.events.onInputOver.add(function(){
            this.draw.graphics.input.useHandCursor = true;
            this.draw.graphics.alpha = 0.5;
        },this);
        this.draw.graphics.inputEnabled = true;
        this.draw.graphics.events.onInputOut.add(function(){
            this.draw.graphics.alpha = 1;
        },this);
        this.draw.graphics3.inputEnabled = true;
        this.draw.graphics3.events.onInputOver.add(function(){
            this.draw.graphics3.input.useHandCursor = true;
            this.draw.graphics3.alpha = 0.5;
        },this);
        this.draw.graphics3.events.onInputOut.add(function(){
            this.draw.graphics3.alpha = 1;
        },this);
        //
        this.draw.graphics4.inputEnabled = true;
        this.draw.graphics4.events.onInputOver.add(function(){
            this.draw.graphics4.input.useHandCursor = true;
            this.draw.graphics4.alpha = 0.5;
        },this);
        this.draw.graphics4.events.onInputOut.add(function(){
            this.draw.graphics4.alpha = 1;
        },this);
        //
        this.draw.graphics5.inputEnabled = true;
        this.draw.graphics5.events.onInputOver.add(function(){
            this.draw.graphics5.input.useHandCursor = true;
            this.draw.graphics5.alpha = 0.5;
        },this);
        this.draw.graphics5.events.onInputOut.add(function(){
            this.draw.graphics5.alpha = 1;
        },this);
        //
        this.draw.graphics6.inputEnabled = true;
        this.draw.graphics6.events.onInputOver.add(function(){
            this.draw.graphics6.input.useHandCursor = true;
            this.draw.graphics6.alpha = 0.5;
        },this);
        this.draw.graphics6.events.onInputOut.add(function(){
            this.draw.graphics6.alpha = 1;
        },this);
        //
        this.draw.graphics7.inputEnabled = true;
        this.draw.graphics7.events.onInputOver.add(function(){
            this.draw.graphics7.input.useHandCursor = true;
            this.draw.graphics7.alpha = 0.5;
        },this);
        this.draw.graphics7.events.onInputOut.add(function(){
            this.draw.graphics7.alpha = 1;
        },this);
        */

        //Phaser.Text
        this.title.t0 = GameInstance.add.text(GameInstance.world.centerX-330,GameInstance.world.centerY-85, 'Metres and centimetres \nto\ncentimetres', { font: '18px Arial', fill: '#000000',align: 'center'});
        this.title.t0.fontWeight = 'bold';
        this.title.t0.addFontWeight('normal',22);
        this.title.t0.addFontWeight('bold',25);
        this.title.t0.addColor('#ff0000',0);
        this.title.t0.addColor('#000000',22);
        this.title.t0.fontSize = 23;

        //Phaser.Line
        this.line = new Phaser.Line(GameInstance.world.centerX-270,GameInstance.world.centerY+5,GameInstance.world.centerX-120,GameInstance.world.centerY+5);
        this.graphics = GameInstance.add.graphics(0,0);
        this.graphics.lineStyle(1, 0x000000, 1);
        this.graphics.moveTo(this.line.start.x,this.line.start.y);//moving position of graphic if you draw mulitple lines
        this.graphics.lineTo(this.line.end.x,this.line.end.y);
        this.graphics.endFill();

        //Phaser.Text
        this.title.t1 = GameInstance.add.text(GameInstance.world.centerX-330,GameInstance.world.centerY+50, 'Centimetres \nto\nmetres and centimetres', { font: '18px Arial', fill: '#000000',align: 'center'});
        this.title.t1.fontWeight = 'bold';
        this.title.t1.addFontWeight('normal',11);
        this.title.t1.addFontWeight('bold',14);
        this.title.t1.addColor('#ff0000',0);
        this.title.t1.addColor('#000000',12);
        this.title.t1.fontSize = 23;

        //Phaser.Line
        this.line = new Phaser.Line(GameInstance.world.centerX-330,GameInstance.world.centerY+140,GameInstance.world.centerX-70,GameInstance.world.centerY+140);
        this.graphics = GameInstance.add.graphics(0,0);
        this.graphics.lineStyle(1, 0x000000, 1);
        this.graphics.moveTo(this.line.start.x,this.line.start.y);//moving position of graphic if you draw mulitple lines
        this.graphics.lineTo(this.line.end.x,this.line.end.y);
        this.graphics.endFill();

        //Phaser.Text
        this.title.t2 = GameInstance.add.text(GameInstance.world.centerX+120,GameInstance.world.centerY+50, 'Metres \nto\nkilometres and metres', { font: '18px Arial', fill: '#000000',align: 'center'});
        this.title.t2.fontWeight = 'bold';
        this.title.t2.addFontWeight('normal',6);
        this.title.t2.addFontWeight('bold',9);
        this.title.t2.addColor('#ff0000',0);
        this.title.t2.addColor('#000000',6);
        this.title.t2.fontSize = 23;
        
        //Phaser.Line
        this.line = new Phaser.Line(GameInstance.world.centerX+120,GameInstance.world.centerY+140,GameInstance.world.centerX+370,GameInstance.world.centerY+140);
        this.graphics = GameInstance.add.graphics(0,0);
        this.graphics.lineStyle(1, 0x000000, 1);
        this.graphics.moveTo(this.line.start.x,this.line.start.y);//moving position of graphic if you draw mulitple lines
        this.graphics.lineTo(this.line.end.x,this.line.end.y);
        this.graphics.endFill();

        //Phaser.Text
        this.title.t3 = GameInstance.add.text(GameInstance.world.centerX+120,GameInstance.world.centerY-85, 'Kilometres and metres \nto\nmetres', { font: '18px Arial', fill: '#000000',align: 'center'});
        this.title.t3.fontWeight = 'bold';
        this.title.t3.addFontWeight('normal',22);
        this.title.t3.addFontWeight('bold',24);
        this.title.t3.addColor('#ff0000',0);
        this.title.t3.addColor('#000000',21);
        this.title.t3.fontSize = 23;
        
        //Phaser.Line
        this.line = new Phaser.Line(GameInstance.world.centerX+120,GameInstance.world.centerY+5,GameInstance.world.centerX+380,GameInstance.world.centerY+5);
        this.graphics = GameInstance.add.graphics(0,0);
        this.graphics.lineStyle(1, 0x000000, 1);
        this.graphics.moveTo(this.line.start.x+90,this.line.start.y);//moving position of graphic if you draw mulitple lines
        this.graphics.lineTo(this.line.end.x-90,this.line.end.y);
        this.graphics.endFill();

        //Phaser.Text
        this.title.t4 = GameInstance.add.text(GameInstance.world.centerX-10,GameInstance.world.centerY+290, 'Mixed', { font: '18px Arial', fill: '#000000',align: 'center'});
        this.title.t4.fontWeight = 'bold';
        this.title.t4.addFontWeight('normal',6);
        this.title.t4.addFontWeight('bold',9);
        this.title.t4.addColor('#ff0000',0);
        this.title.t4.fontSize = 23;


        //Functionality
        /*
        this.draw.graphics3.events.onInputDown.add(function(){
            GameInstance.state.start('state2'); //Centimetres
        },this);
        this.draw.graphics4.events.onInputDown.add(function(){
            GameInstance.state.start('state3'); //Metres and centimetres
        },this);
        this.draw.graphics5.events.onInputDown.add(function(){
            GameInstance.state.start('state5'); //Metres
        },this);
        this.draw.graphics6.events.onInputDown.add(function(){
            GameInstance.state.start('state4'); //Kilometres and metres
        },this);
        this.draw.graphics7.events.onInputDown.add(function(){
            GameInstance.state.start('state6'); //Mixed
        },this);
        */
        this.button1.events.onInputDown.add(function(){
            GameInstance.state.start('state2');
        },this);
        this.button2.events.onInputDown.add(function(){
            GameInstance.state.start('state5');
        },this);
        this.button3.events.onInputDown.add(function(){
            GameInstance.state.start('state6');
        },this);
    },
    update: function(){
    }
}