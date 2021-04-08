var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("a.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    a=new Group();
    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";
    
    block3 = createSprite(510,580,200,30);
    block3.shapeColor = "yellow";

    block4 = createSprite(750,580,250,30);
    block4.shapeColor = "red";


    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=30;
    ball.velocityY=30;
    a.add(ball);
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    if(block1.isTouching(ball)){
    ball.shapeColor = "blue";
    music.play(); 
    ball.bounceOff(block1);
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //ball.bounceOff(block2);
        a.setVelocityXEach(0);
        a.setVelocityYEach(0);
        music.stop();
        //write code to stop music
    }
    if(block3.isTouching(ball)){
        ball.shapeColor = "yellow";
        music.play();
        ball.bounceOff(block3);
    }
    if(block4.isTouching(ball)){
      ball.shapeColor = "red";
      music.play();
      ball.bounceOff(block4);
    }
    
    drawSprites();
}
