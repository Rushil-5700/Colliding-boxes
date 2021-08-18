var rect1;
var rect2;
var rect3;
var rect4;
function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 300, 50, 50);
  rect2 = createSprite(200, 300 ,50 ,50);
  rect3 = createSprite(300, 50 ,50 ,50);
  rect4 = createSprite(300, 400, 50, 50);
  rect1.shapeColor="blue";
  rect2.shapeColor="red";
  rect3.shapeColor = "green";
  rect4.shapeColor = "yellow";
  rect1.velocityX=-4;
  rect2.velocityX=4;
  rect3.velocityY=4;
  rect4.velocityY=-4;
}

function draw() {
  background(255,255,255); 


if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&& rect2.x-rect1.x<rect2.width/2+rect1.width/2){
  rect1.velocityX=rect1.velocityX*-1;
  rect2.velocityX=rect2.velocityX*-1;
}

if(rect3.y-rect4.y<rect3.height/2+rect4.height/2 && rect4.y-rect3.y< rect4.height/2+rect3.height/2){
  rect3.velocityY=rect3.velocityY*-1;
  rect4.velocityY=rect4.velocityY*-1;
}
  
  




  drawSprites();
}