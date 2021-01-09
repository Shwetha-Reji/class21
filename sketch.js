var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
  //fixedRect.velocityY = +5;

  car=createSprite(200,100,30,30);
  car.velocityX=5;
car.shapeColor="red";

wall=createSprite(1000,100,30,100);
}

function draw() {
  background(0,0,0);  
  Bounceoff(car,wall)
  
  drawSprites();
}
