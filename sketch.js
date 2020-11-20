var fixedRect, movingRect, mrect, frect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  mrect = createSprite(0, 400, 50, 80)
  mrect.shapeColor = "green"
  frect = createSprite(400, 400, 50, 80)
  frect.shapeColor = "green"

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  mrect.velocityX = 5
  frect.velocityX = -5
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect)
  bounceOff(mrect, frect)

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }else {
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
  
  drawSprites();
}