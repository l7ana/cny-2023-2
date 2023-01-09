class Candy2 extends Block {
  constructor(world, attributes, options) {
    super(world, attributes, options);
  }


  updateShape() {
    let mouseDistance = int(dist(this.body.position.x, this.body.position.y, mouseX, mouseY)); // check the distance from your mouse to the shape
    if (mouseDistance <= mouseThreshold) { // if your mouse gets closer than the threshold...
      this.body.position.x += random(-moveDistance, moveDistance); // give the shape a new x position
      this.body.position.y += random(-moveDistance, moveDistance); // and a new y position
    };
  }

  addBody() {

    this.options = {
      friction: 0.7,
      restitution: 0.07,
      density: 1,
      frictionAir: .05,
      angle: random(0, 360)
    };

    this.body = Matter.Bodies.rectangle(this.attributes.x, this.attributes.y, this.attributes.w, this.attributes.h, this.options, this.attributes.image);
    Matter.World.add(world, this.body);

    this.show = function() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(255);
      fill(127);
      imageMode(CENTER);
      image(candyImg);
      rect(0, 0, this.w, this.h);
      pop();
    };
  }

}