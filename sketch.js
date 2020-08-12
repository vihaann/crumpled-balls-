
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject ; 
var ground;
var dustbin1,dustbin2,dustbin3 ; 
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	ground = new Ground(755,height,2000,20);
	
    paperObject=new paper(160,250,70);
	dustbin1 = new Dustbin(660,650,20,200) ;
	dustbin2 = new Dustbin(720,700,100,20) ; 
	dustbin3 = new Dustbin(780,650,20,200) ; 

  
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();

  drawSprites();
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



