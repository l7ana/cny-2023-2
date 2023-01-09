// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

// module aliases
var Engine = Matter.Engine,
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
let numberOfShapes = 35; // how many shapes to draw
let mouseThreshold = 50; // how close can your mouse get to a shape before it moves
let moveDistance = 10; // how far shapes move away from your mouse

let height = window.innerHeight;
let width = window.innerWidth;

function preload() {
  candyImg = loadImage('./assets/candy.png');
}

function setup() {
	createMetaTag();
  createCanvas(width, height);
  engine = Engine.create();
  world = engine.world;
  engine.world.gravity.scale = 0;

    // create a bunch of shape objects
    for (let i = 0; i < numberOfShapes; i++) {
      candies.push(new Candy2(world, {x: random(width * .3, width * .7), y: random(height * .3, height * .7), w: 150, h:50}));
    };
    console.log(candies[1].body.friction);
  }

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function createMetaTag() {
  let meta = createElement('meta');
  meta.attribute('name', 'viewport');
  meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

  let head = select('head');
  meta.parent(head);
}

function draw() {
  background(245);
  Engine.update(engine);
  for (var i = 0; i < candies.length; i++) {
    candies[i].updateShape();
    candies[i].draw();
  };
}
