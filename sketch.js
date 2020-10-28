
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1 ,bob2,bob3,bob4,bob5;
var ground;
var roof;
var roof2;
var roof3;
var roof4;
var roof5;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	

	bob1 = new Bob (200,300,15);
	bob2 = new Bob (200,300,15);
  bob3 = new Bob (250,300,15);
	bob4 = new Bob (300,300,15);
	bob5 = new Bob (350,300,15);

	ground = new Roof(100,398,2000,10);

  roof = new Roof(500,50,100,10);
  roof2 = new Roof(600,50,100,10);
  roof3 = new Roof(550,50,100,10);
  roof4 = new Roof(650,50,100,10);
  roof5 = new Roof(450,50,100,10);

	rope1 = new Rope(bob1.body , roof.body,-3,0);
	rope2 = new Rope(bob2.body , roof3.body, -4,0);
	rope3 = new Rope(bob3.body , roof5.body , 5,0  );
	rope4 = new Rope(bob4.body , roof4.body,4,0);
	rope5 = new Rope(bob5.body , roof2.body,3,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  Engine.update(engine);

  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();
  roof2.display();

 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed(){

  if (keyCode === UP_ARROW){
  
    Matter.Body.applyForce(bob3.body, bob3.body.position, {x:100,y:-150})
  }
  
  }
  
  



