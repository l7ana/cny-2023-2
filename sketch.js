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
  wall2= Bodies.rectangle(width / 2, height + 10, width, 10, options)
  wall3 = Bodies.rectangle(0 - 10, height / 2, 10, height, options)
  wall4 = Bodies.rectangle(width + 10, height / 2, 10, height, options)

  World.add(world, [ground, wall1, wall2, wall3, wall4]);

}

function mousePressed() {
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
}

function draw() {
  background(200);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);
}
