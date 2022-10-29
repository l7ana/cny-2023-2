class Candy2 extends Block {
  constructor(world, attributes, options) {
    super(world, attributes, options);
  }

  addBody() {
    this.body = Matter.Bodies.rectangle(this.attributes.x, this.attributes.y, this.attributes.w, this.attributes.h, this.options);

    this.attributes.image = candyImg;

    this.options = {
      friction: 0.3,
      restitution: 0.6,
      angle: random(0, 360)
    };

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