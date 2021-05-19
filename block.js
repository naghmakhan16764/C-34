class Block {
  constructor(x, y) {
    var option = {
      restitution:0.2
    };

    this.body = Bodies.rectangle(x, y, 20, 35, option);
    this.width = 20;
    this.height = 35;
    World.add(world, this.body);
  }

  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("red");
    strokeWeight(1);
    stroke("orange");
    rect(0, 0, this.width, this.height);
    pop();
  }
}
