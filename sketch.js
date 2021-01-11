
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,ground1,paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground1=new Ground(400,680,800,20);
   bin1=new Bin(500,620,100,100);
   paper1=new Paper(100,600,50,50);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  ground1.display();
  bin1.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

			}
			
}

