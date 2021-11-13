const playerSprite = {
    sprite: new Image(), // Creo un nuevo objeto imagen
    width: 50, // Le digo cuántos píxeles ocupa de width el personaje en el archivo
    height: 50, // Le digo cuántos píxeles tiene que coger de height
    x: 150, // En qué x del archivo tiene que empezar a coger personaje
    y: 400 // En qué y del archivo tiene que empezar a coger personaje
  };
   playerSprite.sprite.src = "./img/cat1.png"; // Le asigno el archivo como source del sprite
