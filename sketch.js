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
var boxes = [];
var wall1;
var wall2;
var wall3;
var wall4;
var candy2;
var candies = []; // an array that will hold our shapes
let candyImg;
let mouse;
var block;
let mouseConstraint;
let shapes = []; // an array that will hold our shapes
let numberOfShapes = 50; // how many shapes to draw
let mouseThreshold = 50; // how close can your mouse get to a shape before it moves
let moveDistance = 150; // how far shapes move away from your mouse
let animateDistance = 50; // how much each shape animates 


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
  
  // Static Elements
  var options = {
    isStatic: true,
    render: {
      fillStyle: red
    }
  };

  wall1 = Bodies.rectangle(width / 2, 10, width, 10, options)
  wall2 = Bodies.rectangle(width / 2, height + 10, width, 10, options)
  wall3 = Bodies.rectangle(0 - 10, height / 2, 10, height, options)
  wall4 = Bodies.rectangle(width + 10, height / 2, 10, height, options)

  World.add(world, [wall1, wall2, wall3, wall4]);


    // create a bunch of shape objects
    for (let i = 0; i < numberOfShapes; i++) {
      candies.push(new Candy2(world, {x: random(0, width), y: random(0, height), w: 150, h:50, image: candyImg}));
    };

    console.log(candies[1]);
  }

  function mousePressed() {
  for (var i = 0; i < candies.length; i++) {
    let mouseDistance = int(dist(this.x, this.y, mouseX, mouseY)); // check the distance from your mouse to the shape
    if (mouseDistance <= mouseThreshold) { // if your mouse gets closer than the threshold...
      candies[i].body.position.x += random(-moveDistance, moveDistance); // give the shape a new x position
      candies[i].body.position.y += random(-moveDistance, moveDistance); // and a new y position
      //this.x = lerp(this.x, random(this.x - moveDistance, this.x + moveDistance), 0.5);
      //this.y = lerp(this.y, random(this.y - moveDistance, this.y + moveDistance), 0.5);
    }
  };
    console.log(mouseX);
  }

function draw() {
  background(255);
  Engine.update(engine);
  for (var i = 0; i < candies.length; i++) {
    candies[i].draw();
  };
  // image(candyImg, 0, 0);
  // noStroke(255);
  // fill(170);
  rectMode(CENTER);
}
