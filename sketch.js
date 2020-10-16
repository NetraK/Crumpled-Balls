
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,200,40);
	ground = new Ground(600,570,1200,10);
	dustbin1 = new Dustbin(800,500,20,100);
	dustbin2 = new Dustbin(900,550,200,20);
	dustbin3 = new Dustbin(1000,500,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 // drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-85});
	}
	
}



