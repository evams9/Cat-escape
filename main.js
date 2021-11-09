window.addEventListener("load", function () {
  console.log("loaded");

  function generateGame() {
    let canvas = document.getElementById("cat-escape");
    const ctx = canvas.getContext("2d");
    const catGame = new Game(ctx);
    catGame.start();
  }

  function showCanvas(){
    document.getElementById("intro").classList.add("hide");
    document.getElementById("game").classList.remove("hide");
    document.getElementById("game").classList.add("show");
    generateGame();
  }


  const startButton = document.querySelector("#start");
  startButton.addEventListener("click", showCanvas);
});


/*window.addEventListener("load", function () {
  console.log("loaded");
  function generateGame() {
    let canvas = document.querySelector("#cat-canvas");
    const ctx = canvas.getContext("2d");

    const catGame = new Game({
      ctx: ctx,
      cat: new Cat(10, 10,)// "N"),
    });

    catGame.start();
  }
  function generateSplashScreen() {
    const intro = document.getElementById('intro');
    intro.innerHTML = `
    <div>
    <a id="start"> START </a>
    </div>
    `;
  const startButton = document.querySelector("#start");

  startButton.addEventListener("click", generateGame);

    intro.classList.add('hide');
    const game = document.getElementById('game');
    game.classList.remove('hide');
    game.classList.add('show');
});*/
