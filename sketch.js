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
  Mouse = Matter.Mouse;

var engine;
var world;
var candy2;
var candies = []; // an array that will hold our shapes
let candyImg;
var block;
let shapes = []; // an array that will hold our shapes
let numberOfShapes = 50; // how many shapes to draw
let mouseThreshold = 50; // how close can your mouse get to a shape before it moves
let moveDistance = 10; // how far shapes move away from your mouse

let height = window.innerHeight * .75;
let width = window.innerWidth * .75;

function preload() {
  candyImg = loadImage('./assets/candy.png');
}

function setup() {
  createCanvas(width, height);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.scale = 0;

    // create a bunch of shape objects
    for (let i = 0; i < numberOfShapes; i++) {
      candies.push(new Candy2(world, {x: random(0, width), y: random(0, height), w: 150, h:50}));
    };
    console.log(candies[1].body.friction);
  }

function draw() {
  background(245);
  Engine.update(engine);
  for (var i = 0; i < candies.length; i++) {
    candies[i].updateShape();
    candies[i].draw();
  };
}
