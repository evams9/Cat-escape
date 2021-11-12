class Obstacle{
    constructor(x, y, height, width, color){
       this.x = x; 
       this.y = y;
       this.height = height;
       this.width = width;
       this.color = color;
        this.speed = 5;
       //this.interval;

    }

    _moveLeft(){
        setInterval(() => {
            this.x = this.x - this.speed;
        },100);
     }

     _faster(){
        // setInterval cada 5 segundos
         this.speed++;
     }
    
}