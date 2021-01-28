const Engine=Matter.Engine;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const World=Matter.World;

var world,engine;
var ground1;
var b1, b2, b3, b4, b5, b6, b7, b8, b9;

function setup() {
  createCanvas(1000,800);
  engine=Engine.create();
  world=Engine.world;

  ground1=new Ground(500,700,1000,20);

  b1=new Box(900,300,50,50);
  b2=new Box(800,300,50,50);
  b3=new Box(700,300,50,50);
  b4=new Box(900,300,50,50);
  b5=new Box(800,300,50,50);
  b6=new Box(700,300,50,50);
  b7=new Box(900,300,50,50);
  b8=new Box(800,300,50,50);
  b8=new Box(700,300,50,50);

  
  

}

function draw() {
  background("red");

  ground1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();


}