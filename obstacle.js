class Obstacle{
    constructor(x, y, height, width, color){
       this.x = x; 
       this.y = y;
       this.height = height;
       this.width = width;
       this.color = color;
       this.interval;

    }

    _moveLeft(){
        this.interval = setInterval(() => {
            this.x -= 3;
        }, -1);

       
        }

       //  _clean() {
            //this.ctx.fillStyle = 'white';
            //this.ctx.fillRect 
            //this.ctx.clearRect(10, 0, 200, 50);}
       
       //if (this.x = -1)
       
       
       // this.interval = setInterval((obstacle) => this.x, 1000);

        
    //    if (this.x.frames % 120 === 0) {}

       // if this.x = -1 
        
        
        // restar a la x
    
}