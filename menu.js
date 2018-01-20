var menu = {
	
	preload: function() 
	{
		this.load.audio('startsound' , 'audio/Tzamal-stin taratsa.mp3');
		game.load.image('background', 'assets/menu0.jpg');
		game.load.image('lvl1', 'assets/buttton_level1.png');
		game.load.image('lvl2', 'assets/buttton_level2.png');
	},





	create: function() 
	{
		startsound= game.add.audio('startsound');
		startsound.play();

		var button1;
		var button2;


		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.scale.setGameSize(1280,1015);



		var bg = game.add.image(00,00, 'background');

		button1 = game.add.button(15,175, "lvl1", click1 , this, function(){});
		button2 = game.add.button(1070,175, "lvl2", click2, this, function(){});

		function click1() 
		{
			startsound.stop();
			game.state.start('level1');
		}

		function click2() 
		{
			startsound.stop();
			game.state.start('level2');
		}
	}

	
}