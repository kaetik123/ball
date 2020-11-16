var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


if(movingSprite.x-fixedSprite.x<=fixedSprite.width/2+movingSprite.width/2 && 
  fixedSprite.x-movingSprite.x<=fixedSprite.width/2+movingSprite.width/2 && 
  movingSprite.y-fixedSprite.y<=fixedSprite.height/2+movingSprite.height/2 && 
  fixedSprite.y-movingSprite.y<=fixedSprite.height/2+movingSprite.height/2 ) 
  { fixedSprite.shapeColor="Yellow"; 
  movingSprite.shapeColor="Yellow"; } 
  
else

{ movingSprite.shapeColor="red"; 
  fixedSprite.shapeColor="green"; 
}


  drawSprites();
}
