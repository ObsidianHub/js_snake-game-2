const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images
const ground = new Image();
ground.src = "../img/ground.png";

const foodImg = new Image();
foodImg.src = "../img/food.png";

// load audio files
const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const right = new Audio();
const left = new Audio();
const down = new Audio();

dead.src = "../audio/dead.mp3";
eat.src = "../audio/eat.mp3";
up.src = "../audio/up.mp3";
right.src = "../audio/right.mp3";
left.src = "../audio/left.mp3";
down.src = "../audio/down.mp3";

// create the snake
let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

// create the food
let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};

// create the score var
let score = 0;

// control the snake
let d;
