var Tom,Tom_moving,Tom_walking,Tom_stop;
var jerry,jerry_moving,jerry_walking,jerry_stop;
var garden,garden_Image;
function preload(){

garden_Image=loadImage("images/garden.png");
Tom_moving=loadAnimation("images/tomOne.png");
jerry_moving=loadAnimation("images/jerryOne.png");
jerry_walking=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
Tom_walking=loadAnimation("images/tomTwo.png","images/tomThree.png");
Tom_stop=loadAnimation("images/tomFour.png");
jerry_stop=loadAnimation("images/jerryFour.png");

}


function setup() {
  createCanvas(975,705);
Tom=createSprite(800, 620, 50, 80);
Tom.addAnimation("moving",Tom_moving);
Tom.scale=0.1;


jerry=createSprite(200,620,80,30);
jerry.shapeColor="red";
jerry.addAnimation("moving",jerry_moving);
jerry.scale=0.12;


//garden=createSprite(200,200,900,700);
//garden.addImage(garden_Image);

}


function draw() {
  background(garden_Image);  
   
  if(Tom.x<jerry.x){
  Tom.x=300;
    Tom.velocityX=0;
  Tom.addAnimation("stop",Tom_stop);
  Tom.changeAnimation("stop");
  jerry.addAnimation("stop",jerry_stop);
  jerry.changeAnimation("stop");

  }
     
  

  drawSprites();
}

function keyPressed(){
if(keyCode=== LEFT_ARROW){
  Tom.velocityX=-5;
  Tom.addAnimation("walking",Tom_walking);
  Tom.changeAnimation("walking"); 
  jerry.addAnimation("walking",jerry_walking);
  jerry.changeAnimation("walking");
}

 }
 


