class Ground {
  constructor() {
    var option = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(650, 550, 1300, 35, option);
    World.add(world, this.body);
  }

  display() {
    rectMode(CENTER);
    rect(650, 550, 1300, 35);
  }
}
