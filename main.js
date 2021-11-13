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

