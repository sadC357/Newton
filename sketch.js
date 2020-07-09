var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	bob1= new Bob(100,600,20);
	bob2= new Bob(200,600,20);
	bob3= new Bob(300,600,20);
	bob4= new Bob(400,600,20);
	bob5= new Bob(500,600,20);

	roof= new Roof(350,200,600,20);

	rope1= new Rope(bob1.body,roof.body);
	rope2= new Rope(bob2.body,roof.body),
	rope3= new Rope(bob3.body,roof.body);
	rope4= new Rope(bob4.body,roof.body);
	rope5= new Rope(bob5.body,roof.body);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}



