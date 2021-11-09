class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player(30, 400, 100, 100, "green");
        this.obstacle = new Obstacle(1300, 400, 200, 50, "red");
    }

    _drawPlayer(){
        this.ctx.fillStyle = this.player.color;
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }

    _drawObstacle(){
        this.ctx.fillStyle = this.obstacle.color;
        this.ctx.fillRect(this.obstacle.x, this.obstacle.y, this.obstacle.width, this.obstacle.height);
    }

    _moveObstacles(){
        this.obstacle._moveLeft();
    }

    _assignControls(){
        document.addEventListener("keydown", (event) => {
            switch (event.code) {
            case "Space":
                this.player.jump();
                break;
            default:
                break;
            }
        });
    }

    _renderGame(){
     console.log ("render");
     this._drawPlayer();
     this._drawObstacle();
     this._moveObstacles();
     window.requestAnimationFrame(this._renderGame.bind(this));
    }

    start(){
        this._drawPlayer()
      // this._drawobstacle()
        this._assignControls()
        console.log("start");
        window.requestAnimationFrame(this._renderGame.bind(this));
      //  this._moveObstacle()
        
    }
}