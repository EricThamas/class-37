class Form{
    constructor(){ 
        this.title = createElement("h2")
        this.greeting = createElement("h3");
        this.input = createInput("Name");
        this.button = createButton("play");

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();

    }
    display(){

       this.title.html("car racing game")
        this.title.position(130,160);

       this.input.position(130,225);
       this.button.position(250,250);

       this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playercount += 1;
            player.index = playercount;
            player.update();
            player.updatecount(playercount);

           
           this.greeting.html("hello " +player.name )
           this.greeting.position(130,130);
        })


    }
}