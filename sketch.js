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

	var bobDiameter=40;

	Engine.run(engine);

	/*bob1= new Bob(100,500,20);
	bob2= new Bob(250,500,20);
	bob3= new Bob(400,500,20);
	bob4= new Bob(550,500,20);
	bob5= new Bob(600,500,20);*/

	startBobPositionX=width/2; 
	startBobPositionY=height/4+500; 
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter); 
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter); 
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	roof= new Roof(350,200,600,20);

	rope1= new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2= new Rope(bob2.body,roof.body,bobDiameter,0),
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,bobDiameter,0);
	rope5= new Rope(bob5.body,roof.body,bobDiameter*2,0);
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

function keyPressed() {
    if (keyCode === UP_ARROW) {
       Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
     }
   }

