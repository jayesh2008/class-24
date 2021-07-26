const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var hammer;
var iron;
var stone;
var rubber;
var sand;
var ground;
var sand0,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;

function setup(){
    createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;

    hammer = new Hammer(200,175,150,20);
    iron  =new Iron(200,650,70,50);
    stone = new Stone(600,620,80,80);
    rubber = new Rubber(400,650,50);
    sand0 = new Sand(400,600,10);
    sand1 = new Sand(360,600,10);
    sand2 = new Sand(370,600,10);
    sand3 = new Sand(380,600,10);
    sand4 = new Sand(390,600,10);
    sand5 = new Sand(400,600,10);
    sand6 = new Sand(410,600,10);
    sand7 = new Sand(420,600,10);
    sand8 = new Sand(430,600,10);
    sand9 = new Sand(440,600,10);
    sand10 = new Sand(450,600,10);

    for (var i = 400; i < 450; i=i+10) {
        sand;
    }

    ground = new Ground(400,695,800,20);

}

function draw(){
    background("lightblue");
    Engine.update(engine);

    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
    sand0.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();

    ground.display();
}


