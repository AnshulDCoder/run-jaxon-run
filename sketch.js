var track;
var runner; 
var boundry, boundry2;

function preload(){
  //pre-load images
trackImg = loadImage("path.png");
runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200);
  track.addImage(trackImg);
  track. velocityY = 4;
  track.scale = 1.2;

  runner = createSprite(200, 300, 10, 10);
  runner.addAnimation(runnerImg);
  
  boundry =  createSprite(20, 200, 20, 400);
  boundry2 = createSprite(380, 200, 20, 400);
  boundry.visible = false;
  boundry2.visible = false;
}

function draw() {
  background(0);

  if(track.y > 400){
    track.y = height/2;
  }
runner.x = mouseX;

runner.collide(boundry, boundry2);

 drawSprites();
}
