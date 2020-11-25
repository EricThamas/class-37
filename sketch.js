var database;
var form,player,game;
var playercount = 0;
var gameState = 0;
var allPlayer;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();


}


function draw(){
 if(playercount===4){
   game.update();

 }
 if(gameState===1){
     clear();
     game.play();
 }

  
}

