# Cat-escape 😼

## Description:
The objective of this game is to get the highest score possible. The player's score increases as he moves through the screen without hitting any obstacles. Extra score can be obtained by catching the objects that will appear on the screen. 

## MVP:

- Player: cat (green).
- Obstacles: vacuum cleaner, fireworks (red).

## Backlog / nice to have:

- Another element appears in the sky and can take away our score. (Ex: a cloud that shoots lightning). (black).
- Objects to score extra points: fish, mouse. (blue). 

## Data structure:
class Player {
properties: life, direction.
Methods: Jump.
}

class Game { properties: player, obstacles, objects for extra points. Methods:
\_start
\_update
}

## States & States Transitions:

Definition of the different states and their transition (transition functions):

- splashScreen: Instructions and start button.
- gameScreen: Game itself.
- hideInstructionsScreen: 
- gameoverScreen: If you hit an obstacle, and lose your three lives, game over. You go back to the start.
- winScreen: Get as many points as possible without crashing.



