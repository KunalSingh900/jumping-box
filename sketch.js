var canvas;
var box;
var box1;
var box2;
var box3;
var box4;
var ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    box1=createSprite(100,585,199,50);
    box1.shapeColor="red";
    box2=createSprite(310,585,199,50);
    box2.shapeColor="green";
    box3=createSprite(520,585,199,50);
    box3.shapeColor="yellow";
    box4=createSprite(730,585,199,50);
    box4.shapeColor="purple";
    ball=createSprite(400,400,60,60);
    ball.shapeColor="blue";
    ball.velocityX=5;
    ball.velocityY=4;
 
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges=createEdgeSprites();
  ball.bounceOff(edges);
  if(box1.isTouching(ball)&& ball.bounceOff(box1)){
      ball.shapeColor="red";
  }
  if(box2.isTouching(ball)){
    ball.shapeColor="green";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}
if(box3.isTouching(ball)&& ball.bounceOff(box3)){
    ball.shapeColor="yellow";
    music.play();
}
if(box4.isTouching(ball)&& ball.bounceOff(box4)){
    ball.shapeColor="purple";
}





drawSprites();
    //add condition to check if box touching surface and make it box
}
function box(){




}
