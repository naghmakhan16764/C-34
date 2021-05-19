class Ball {
    constructor(x, y) {
      var option = {
        restitution:0.2
      };
  
      this.body = Bodies.circle(x, y, 50, option);
      this.radius=50;
      World.add(world, this.body);
    }
  
    display() {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      ellipseMode(RADIUS)
      fill("red");
      strokeWeight(1);
      stroke("orange");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  }
  