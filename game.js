class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player(150, 400, 30, 100, "green");
        this.obstacles = [];
        this.points = 0;
        this.pointInterval;
       // this.backgroundSound = new Sound("sound/level-music.wav");
    }

    _drawPlayer(){
        this.ctx.fillStyle = this.player.color;
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }

    _drawObstacle(obstacle){
        this.ctx.fillStyle = obstacle.color;
        this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }

    _generateRandom(min,max){
        return Math.random() * (max-min) + min;
     }


    _generateObstacles(){
        setInterval(() => {
            const obstacle = new Obstacle(this._generateRandom(1000,1100), 450, 200, 50, "red");
            console.log(obstacle)
            this.obstacles.push(obstacle);
        }, 2000)
    }

_moveObstacles(){
        for (let i = 0; i < this.obstacles.length; i ++) 
        //this.obstacles[i]._moveLeft();
        this._drawObstacle(this.obstacles[i]);      
        
    }

_checkCollision() {
    for (let i = 0; i < this.obstacles.length; i++) {
        if (
            this.player.x <= this.obstacles[i].x + this.obstacles[i].width &&
            this.player.x + this.player.width >= this.obstacles[i].x &&
            this.player.y <= this.obstacles[i].y + this.obstacles[i].height &&
            this.player.height + this.player.y >= this.obstacles[i].y
        ) {
            clearInterval(this.generateInterval);
            clearInterval(this.moveInterval);
            // clear interval de puntos
            if (this._checkCollision = true) {
                console.log("GAME OVER");

                document.getElementById("game").style.display = "none";
                document.getElementById("game").style.display = "block";
                document.getElementById("gameover").classList.remove("hide");
                document.getElementById("gameover").classList.add("show");
            }
        } 
    }
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

    _showPoints(ctx){
       this.ctx.font = "16px Arial";
       this.ctx.fillStyle = "#000000";
       this.ctx.fillText("Score: "+this.points, 900, 20);
         if (this._checkCollision === true){
          return "Final score:" (`"Final score:"${this.points}`);
         }
    
    }

    _renderGame(){
     console.log ("render");
     this._clean();
     this._drawPlayer();
     this._checkCollision();
     this._showPoints();
     //for loop para esta:
     for (let i = 0; i < this.obstacles.length; i ++) {
        this._drawObstacle(this.obstacles[i]);
     }
     window.requestAnimationFrame(this._renderGame.bind(this));
    
    }

    _clean(){
        this.ctx.clearRect(0,0,1000,500);
    }

    start(){
       // this.backgroundSound.play();
        this._drawPlayer()
        this._assignControls()
        this._generateObstacles()
        setInterval(() => {
            for (let i = 0; i < this.obstacles.length; i ++) {
                this.obstacles[i]._moveLeft();
                // faster
             }
        }, 1000)
        this.pointInterval = setInterval(() => {
            this.points = this.points + 1;
        }, 1000)
        console.log("start");
        window.requestAnimationFrame(this._renderGame.bind(this));
      
        
    }
}