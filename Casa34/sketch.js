const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var wii1,wii2;
var ball;

function setup() {
  createCanvas(400,400);

  var ball_options = {
    restitution:0.3,
    friction:0,
    density:1.2
  }

  var rectangle_options = {
    restitution:0.7,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  wii1 = Bodies.rectangle(200,100,20,20,rectangle_options);
  World.add(world,wii1);

  wii2 = Bodies.rectangle(400,100,20,20,rectangle_options);
  World.add(world,wii2);

	engine = Engine.create();
	world = engine.world;
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  rect(wii1.position.x,wii1.position.y,20,20);
  rect(wii1.position.x,wii1.position.y,20,20);

  drawSprites();
}