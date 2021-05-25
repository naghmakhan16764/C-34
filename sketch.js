const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg, ground, gimg;
var blocks = [];
var chain;

function setup() {
  createCanvas(1300, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  ball = new Ball(300, 300);
  chain = new SlingShot(ball.body, { x: 200, y: 200 });

  for (var i = 700; i < 900; i = i + 21) {
    for (var j = 300; j < 500; j = j + 30) {
      blocks.push(new Block(i, j));
    }
  }
}
function draw() {
  background("lightblue");
  Engine.update(engine);

  ground.display();
  ball.display();
  chain.display();

  for (var j = 0; j < blocks.length; j = j + 1) {
    blocks[j].display();
  }
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  chain.fly();
}
