class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player(30, 400, 100, 100, "green");
        this.obstacle = new Obstacle(1300,400, 200, 200, "red");
    }

    _drawPlayer(){
        this.ctx.fillStyle(this.player.color);
        this.ctx.fillRect(this.player.x, this.player.y, th)
    }

    //_DRAWobstacle()

    //_moveObstacle(){
        // setInterval
        // setTimeOut
        // this.obstacle.x = this.obstacle.x - is5;
    //}

    //_assignarControles(){
    
        // tecla espacio 
        // this.player.jump()
    //}

    _renderGame(){
     window.requestAnimationFrame(this._renderFrameGame.bind(this));
    }

    start(){
       // this._drawPlayer()
        //this._DRAWobstacle()
       // this._assignarControles()
        console.log("start");
        window.requestAnimationFrame(this._renderFrameGame.bind(this));
        //this._moveObstacle()
        
        // window request animation frame
    }
}