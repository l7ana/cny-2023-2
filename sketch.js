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
var candy;
var candies = []; // an array that will hold our shapes
let candyImg;
let mouse;
let mouseConstraint;
let shapes = []; // an array that will hold our shapes
let numberOfShapes = 50; // how many shapes to draw

let height = window.innerHeight * .75;
let width = window.innerWidth * .75;

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
  candy1 = new Candy(100,100,150,50);

  World.add(world, [wall1, wall2, wall3, wall4]);

  // Create sprite for p5
  candyImg = loadImage('./assets/candy.png');
  // candy = new Block(world,{ x: 200, y: 200, w: 64, h: 64, image: candyImg});  
  // candy = new Box(world,{ x: 200, y: 200, w: 64, h: 64, image: candyImg});

    // create a bunch of shape objects
    for (let i = 0; i < numberOfShapes; i++) {
      candies.push(new Candy(random(0, width),random(0, height),150,50));
    };

    console.log(candies.length);
    

  // create new Candy.js file based on box
  // add the options there? (random location, width, height)
  //    load sprite image p5 way or matter js way?
  //    have to map matter sprite property to p5 shape
  //    candyImg = loadImage('./assets/candy.png')
  //    candyImg = this.body.render.sprite.texture  will this add the value of candyImg to the sprite property?

}


function draw() {
  background(255);
  Engine.update(engine);
  for (var i = 0; i < candies.length; i++) {
    candies[i].show();
  };
  // noStroke(255);
  // fill(170);
  rectMode(CENTER);
}
