
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var signal, virus, sanitizer, mask;
var backGr;
var signalG, virusG, sanitizerG, maskG;



function preload()
{
	
}

function setup() {
	createCanvas(windoWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  signalG=new Group();
  virusG= new Group();
  sanitizerG= new Group();
  maskG= new Group();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(cyan);
  
  drawSprites();
 
}



