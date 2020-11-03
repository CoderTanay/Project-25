const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashcanIMG

function preload() {
	trashcanIMG = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Ground1 = new Ground(400,650,800,20)
	TrashCanSide1 = new TrashCan(720,565,20,150)
	TrashCanSide2 = new TrashCan(610,630,200,20)
	TrashCanSide3 = new TrashCan(520,565,20,150)

	Paper1 = new Paper(100,630,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Ground1.display();
  TrashCanSide1.display();
  TrashCanSide2.display();
  TrashCanSide3.display();
  Paper1.display();
  imageMode(CENTER)
  image(trashcanIMG,620, 565, 200, 200);
  Engine.update(engine)
}

function keyPressed() {
	if (keyCode === 38) {
		Matter.Body.applyForce(Paper1.body, Paper1.body.position, {
			x: 0.05,
			y: -0.065,
		});
	}
}


