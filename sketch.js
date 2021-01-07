
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinimage=loadImage("pictures/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,height-30,width,20);
	paper1= new Paper(100,100);
	dustbin1=new Dustbin(510,height-70,230,10);
	dustbin2 = new Dustbin(530-125,height-95,10,97);
	dustbin3 = new Dustbin(490+125,height-95,10,97);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  imageMode(CENTER);
  image(dustbinimage,510,height-95,250,100);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-50});
	}
}

