var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var  brick1, brick2, brick3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;		

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground1 = new Ground(width/2, 670, width, 20);
	 dustbin = new Dustbin(1200,650);
	 
	 paper = new Paper(200,450,40);

	 var render = Render.create({ 
		element: document.body, 
		engine: engine,
		 options: { width: 1200, height: 700, wireframes: false } }); 
  
		 Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display();
  ground1.display();
  paper.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y: -85});
  }
}


