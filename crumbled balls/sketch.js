
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
    backgroundImg = loadImage("bg.jpg")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball1 = new Ball(100,100,200,100,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
 

 // groundObject.display();
  dustbinObj.display();
  ball1.display();
}

function keyPressed(){
	if (keycode = UP_ARROW){
	
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:1200,y:650});
	}
	
}