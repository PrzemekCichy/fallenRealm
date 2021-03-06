//Canvas on which map is displayed. Those files once rendered stay the same.
var groundTilesCanvas = $("#groundTilesCanvas")[0];
var ctxGround = groundTilesCanvas.getContext('2d');

var objectTilesCanvas = $("#objectTilesCanvas")[0];
var ctxObject = objectTilesCanvas.getContext('2d');

var movingObjectCanvas = $("#movingObjectCanvas")[0];
var ctxMoving = movingObjectCanvas.getContext('2d');

{
	//Images from rpg.mo.ee
	var imgGround = new Image();
	imgGround.src = "https://1239889624.rsc.cdn77.org/sheet/ground.gif";

	var imgMob = new Image();
	imgMob.src = "https://rpgssl.r.worldssl.net/sheet/dg_uniques32.gif";

	var imgPlayer = new Image();
	imgPlayer.src = "https://rpgssl.r.worldssl.net/sheet/pets.gif";

	var imgObjects = new Image();
	imgObjects.src = "https://rpgssl.r.worldssl.net/sheet/pots_crates.gif";

	var imgTop = new Image();
	imgTop.src = "https://rpgssl.r.worldssl.net/sheet/ground_tops.gif";

	var imgSelect = new Image();
	imgSelect.src = "https://rpgssl.r.worldssl.net/selected.png"
};

// var Engine = {
// 	FPS: 30,
// 	movementInProgress: false,
//
// 	movePlayer: function(coordinateX, coordinateY){
// 		if(!Engine.movementinprogress){
// 			player.x += coordinateX;
// 		  player.y += coordinateY;
// 			Engine.movementInProgress = true;
//
// 			function calculateDelay(){
// 				Engine.movementInProgress = false;
// 			}
//
// 			setTimeout( calculateDelay(), 200)
// 		}
// 	},
//
// 	doKeyDown: function (evt){
// 	  switch (evt.keyCode) {
// 		case 87:  /* Up arrow was pressed */
// 			if(	player.y  > 0) Engine.movePlayer(0, -14);;//28
// 		  break;
// 		case 83:  /* Down arrow was pressed */
// 			if(	player.y < 800) Engine.movePlayer(0, 14);
// 		  break;
// 		case 65:  /* Left arrow was pressed */
// 			if(	player.x > 0) Engine.movePlayer(-27, 0);
// 		  break;
// 		case 68:  /* Right arrow was pressed */
// 			if(	player.x < 1920)
// 			Engine.movePlayer(27, 0);
// 		  break;
// 	  }
// 	},
//
// 	mouseClick: function( a ){
// 		var mapX= -27;
// 		var mapY= -14;
// 		var row= 1;
// 		//Draws objects
// 		for(var i = 0; i < 2200; i++){
// 			if(a.x < mapX && a.y < mapY ) {
// 				movingObjectCanvas.drawImage(selectObject, 0, 0, 54, 49, mapX - 54, mapY - 28, 54, 49);
// 				break;
// 			}
// 			mapX += 54;
// 			if (mapX >= 1920){
// 				row++;
// 				if(row % 2 == 0){
// 					mapY += 14;
// 					mapX = 0;
// 				} else if (row % 2 == 1){
// 					mapY += 14;
// 					mapX = -27;
// 				}
// 			}
// 		}
// 		this.selectedObject = {'x': a.x, 'y': a.y};
// 	},
//
// 	selectedObject: "undefined",
//
// 	update: function( ) {
// 	//	movingObjectCanvas.clearRect(0, 0, 1920, 800);
// 	//	player.draw( );
// 	},
//
// 	a: setInterval(function() {
// 		Engine.update();
// 	}, 1000/ this.FPS),
//
// 	eventListeners: function() {
// 	window.addEventListener('keyup',Engine.doKeyDown);
// 	window.addEventListener('click', function(evt){Engine.mouseClick(evt)}, false);
// 	//monitorEvents($("body"), "click");
// 	}
// };
// 	Engine.eventListeners();
