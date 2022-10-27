// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  Composite = Matter.Composite;

var engine;
var world;
var boxes = [];
var wall1;
var wall2;
var wall3;
var wall4;
var candies;
let candyImg;
var ground;
let shapes = []; // an array that will hold our shapes
let numberOfShapes = 1000; // how many shapes to draw

let height = window.innerHeight * .75;
let width = window.innerWidth * .75;

function setup() {
  createCanvas(width, height);
  engine = Engine.create();
  world = engine.world;
  
  // Static Elements
  var options = {
    isStatic: true
  };
  ground = Bodies.rectangle(200, height, width, 100, options);

  wall1 = Bodies.rectangle(width / 2, 10, width, 10, options)
  wall2 = Bodies.rectangle(width / 2, height + 10, width, 10, options)
  wall3 = Bodies.rectangle(0 - 10, height / 2, 10, height, options)
  wall4 = Bodies.rectangle(width + 10, height / 2, 10, height, options)
  
  // function generateRandomNumber(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1) + min);
    // };
    
    
    World.add(world, [ground, wall1, wall2, wall3, wall4]);
  // Create sprite for p5
  // candyImg = loadImage('./assets/candy.png');
  // candy = new Block(world,{ x: 200, y: 200, w: 64, h: 64, image: candyImg});  
  // candy = new Box(world,{ x: 200, y: 200, w: 64, h: 64, image: candyImg});
  
// var candies = World.add(engine.world, [
//     Bodies.rectangle(width / 2 - 75 * generateRandomNumber(-5, 5), height / 2 - 25 * generateRandomNumber(-3, 3), 150, 50),
//     Bodies.rectangle(width / 2 - 75 * generateRandomNumber(-5, 5), height / 2 - 25 * generateRandomNumber(-3, 3), 150, 50),
//     Bodies.rectangle(width / 2 - 75 * generateRandomNumber(-5, 5), height / 2 - 25 * generateRandomNumber(-3, 3), 150, 50),
//     Bodies.rectangle(width / 2 - 75 * generateRandomNumber(-5, 5), height / 2 - 25 * generateRandomNumber(-3, 3), 150, 50),
//     Bodies.rectangle(width / 2 - 75 * generateRandomNumber(-5, 5), height / 2 - 25 * generateRandomNumber(-3, 3), 150, 50),
//     Bodies.rectangle(width / 2 - 75 * generateRandomNumber(-5, 5), height / 2 - 25 * generateRandomNumber(-3, 3), 150, 50),
//     Bodies.rectangle(width / 2 - 75 * generateRandomNumber(-5, 5), height / 2 - 25 * generateRandomNumber(-3, 3), 150, 50)
// ]);

// for(var i = 0; i < candies.bodies.length; i++){
//   candies.bodies[i].render.sprite.texture = './assets/candy.png';
//   console.log(candies.bodies);
// };

// create new Candy.js file based on box
// add the options there? (random location, width, height)
//    load sprite image p5 way or matter js way?
//    have to map matter sprite property to p5 shape
//    candyImg = loadImage('./assets/candy.png')
//    candyImg = this.body.render.sprite.texture  will this add the value of candyImg to the sprite property?
// create for loop that pushes candies until the numberOfShapes variable into setup
// in draw create another loop where code will execute to update

}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(255);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);
}
