class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }
    
    update(state){
        database.ref("/").update({
            gameState:state
        })

    }
   async start(){
        if(gameState===0){
            player = new Player();
            var playercountRef = await database.ref("playercount").once("value");
            if(playercountRef.exists()){
                playercount = playercountRef.val();
                player.getCount();

            }
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(16);
        text("GameStart",200,200);
        Player.getPlayerInfo();
        if(allPlayer!==undefined){
            var display_position = 130
            for(var i in allPlayer){
                if(i==="player"+player.index){
                    fill("red");

                }
                else{
                    fill("black");
                }
                display_position+=20;
                textSize(15);
                text(allPlayer[i].name+":"+allPlayer[i].distance,120,display_position);
                if(keyDown("up")&& player.index!==null){
                    player.distance+=50;
                    player.update

                }
                

                

            }

        }
    }
}