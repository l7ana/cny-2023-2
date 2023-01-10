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

    this.body = Matter.Bodies.rectangle(this.attributes.x, this.attributes.y, this.attributes.w, this.attributes.h, this.options);

    this.show = function() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      imageMode(CENTER);
      image(candyImg, 0, 0, this.w, this.h);
      pop();
    };
  }

  watchShapes() {
    var x = this.body.position.x;
    var y = this.body.position.y;
    if (x < width, y < height) {
      console.log('in');
    } else if (x > width, x < 250, y > height) {
      console.log('out');
    }
    // REFACTOR TO EVENT LISTENER
    // if body is within observer, remove body.
    // push every body within certain coordinates to active shapes
    // console.log active shapes
    // somehow map number of remaining active shapes to opacity...
  }

}