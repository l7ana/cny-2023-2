function Candy(x, y, w, h) {
    var options = {
      friction: 0.3,
      restitution: 0.6,
      angle: random(0, 360)
    };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    // this.attributes = attributes;
    this.body.render.sprite.texture = candyImg;
    // this.image = image(candyImg, 0, 0);
    // this.attributes.image = image;
    World.add(world, this.body);

    // function drawSprite() {
    //     push();
    //     imageMode(CENTER);
    //     image(this.attributes.image, this.offset.x, this.offset.y, this.attributes.image.width * this.attributes.scale, this.attributes.image.height * this.attributes.scale);
    //     pop();
    //   }

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
    //   texture(candyImg);
    //   imageMode(CENTER);
    //   image(this.image);
      rect(0, 0, this.w, this.h);
      pop();
    //   drawSprite();
    };
  }
  