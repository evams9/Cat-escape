class Player{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    jump(){
        
        let position = 0
        let timerId = setInterval(function(){
        console.log("salto");
        position += 10; 
        this.y = this.y - 3;
        }
     )}

     
}