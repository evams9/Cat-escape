class Player{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.jumping = false;
    } 

    jump(){
    let jumpInterval; // Les declaro fora per no tenir problemes de clausura
    let goingDownInterval;
    if(this.jumping === false){ // Ho mirem perquè no pugui saltar quan ja és a l'aire
      this.jumping = true;
      jumpInterval = setInterval(function(){ // Començo a saltar
        this.y = this.y - 5; // Puja cap a dalt
        if (this.y === 150){ // Poso un tope, aquí para de saltar
        clearInterval(jumpInterval);
        console.log();
        goingDownInterval = setInterval(function(){
          this.y = this.y + 5 ; // Torna cap a baix
            if (this.y === 400){ // Quan arribis al punt d'inici, para
            clearInterval(goingDownInterval);
            this.jumping = false; // Tornem l'estatus a false
          }
        }.bind(this), 8);
       }
      }.bind(this), 8);
    }
  }
}