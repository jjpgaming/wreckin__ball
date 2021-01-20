const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1,pig3,pig4,pig5;
//var backgroundImg,platform;
//var bird, slingshot;
//var birdsound,pigsound
//var gameState = "onSling";
//var bg = "sprites/bg1.png";
//var score = 0;
var F1,F2,F3,F4,F5,F6,F7,F8,F9,F10;
var sling;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);
F1 = new Building(700,350,40,60)
F2 = new Building(700,300,40,60)
F3 = new Building(700,250,40,60)
F4 = new Building(700,200,40,60)
F5 = new Building(700,150,40,60)
F6= new Building(800,350,40,60)
F7= new Building(800,300,40,60)
F8= new Building(800,250,40,60)
F9= new Building(800,200,40,60)
F10= new Building(800,150,40,60)
    mass = new Mass(230,180,50) ;
slingshot = new SlingShot(mass.body,{x:500, y:100});
}

function draw(){
    //if(backgroundImg)
        background("gold");
    
    
    Engine.update(engine);
    //strokeWeight(4);
 


 slingshot.display();    
   fill("blue");
   ground.display();
   fill("black")
strokeWeight(4)
stroke("red")
   F1.display();
F2.display();
F3.display();
F4.display();
F5.display();
fill("blue")
strokeWeight(4)
stroke("green")
F6.display();
F7.display();
F8.display();
F9.display();
F10.display();
mass.display();
}

function mouseDragged(){
  
        Matter.Body.setPosition(mass.body, {x: mouseX , y: mouseY});
    }

