
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boyImage, boy;
var tree, ground;
var mangoImage, m1, m2, m3, m4, m5;
var stone;
var sling;
var gameState = "onsling"

function preload()
{
	boyImage = loadImage("boy.png")
	treeImage = loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400, 650, 1200, 20)

	tree = new Tree(580, 150, 20, 20);
	
	m1 = new Mango(900, 350, 20)
	m2 = new Mango(770, 350, 20)
	m3 = new Mango(900, 200, 20)
	m4 = new Mango(700, 300, 20)
	m5 = new Mango(800, 250, 20)


	boy = createSprite(100, 600, 20, 20);
	boy.addImage(boyImage);
	boy.scale = 0.07;

	stone = new Stone(600, 600, 20, 20);

	sling = new Sling(stone.body, {x: 70, y: 560})

	Engine.run(engine);
  
}


function draw() {
	background("white")

  rectMode(CENTER);

  
  ground.display();

  tree.display();


  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  stone.display();

  sling.display()

  detectCollision(stone, m1);
  detectCollision(stone, m2);
  detectCollision(stone, m3);
  detectCollision(stone, m4);
  detectCollision(stone, m5);

  drawSprites();
 
}

function mouseDragged(){
	if (gameState != "launch"){
		Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	}
	}
	
	function mouseReleased(){
		sling.fly();
		gameState = "launch";
	}
	
	function keyPressed(){
		if(keyCode === 32){
			gameState = "onsling"
			Matter.Body.setPosition(stone.body, {x: 235, y: 420})
			sling.attach(stone.body);
		}
	}

function detectCollision(stones, mangos){
	mangopos = mangos.body.position;
	stonepos = stones.body.position;
	var distance = dist(stonepos.x, stonepos.y, mangopos.x, mangopos.y);

	if (distance <= mangos.radius + stones.radius) {
		Matter.Body.setStatic(mangos.body, false);
	}

}