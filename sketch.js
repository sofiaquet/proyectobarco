var sea,seaImg,board,boardImg;
function preload(){

  seaImg=loadImage("sea.png");
  boardImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200);
  sea.addImage("sea",seaImg);
  sea.scale= 0.4;
  board=createSprite(200,200);
  board.addAnimation("board",boardImg);
  board.scale= 0.25;
  
}

function draw() {
  background("blue");
  if (sea.x <0){
    sea.x = 200;
  }
  sea.velocityX=-3;
 drawSprites();
}