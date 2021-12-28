const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var img;
var Birds = 2 ;
var a1=0;
function preload() {
    getTime();
     img=loadImage=("sprites/bg2.png")
}

function setup(){
alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    var canvas = createCanvas(1360,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(680,height,1360,20);
    platform = new Ground(150, 510, 300, 170);
    
    

    bird = new Bird(200,250);

    Box1 = new Box(700-20,500,150,150);
    Box2 = new Box(700-20,400,150,150);
    Box3 = new Box(700-20,300,150,150);
    Box4 = new Box(700-20,200,150,150);
    Box5 = new Box(1000+20,500,150,150);
    Box6 = new Box(1000+20,400,150,150);
    Box7 = new Box(1000+20,300,150,150);
    Box8 = new Box(1000+20,200,150,150);
    Pig1 = new Pig(850,400);   
    Pig2 = new Pig(850,400);
    Box9 = new Box(850,400,150,150);

    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background("blue")
    
    
    Engine.update(engine);
    //strokeWeight(4);
    textSize(40);
    text("Birds Left : "+Birds,50,55);
    ground.display();
   
    

    bird.display();
    platform.display();

    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    Box8.display();
    Pig1.display();
    Pig2.display();
    Box9.display();

    slingshot.display();    
}

function mouseDragged(){
    if(a1===0){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    a1=1;
}
function keyPressed(){
    if(keyCode===32 && Birds>=1){
        Birds = Birds-1;
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:266});
    slingshot.attach(bird.body);
    a1=0
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
console.log(responseJSON)
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(datetime);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}
