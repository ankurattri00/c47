var backgroundImg,gun,gunImg;
var scope,scopeImg;
var targetGroup,target,target1,target2,rand;
var flash,flashImg;
var score= 0;
var bgSound,gunSound;


function preload(){
backgroundImg = loadImage("sprites/bg.png");
gunImg = loadImage("sprites/gun.png");
scopeImg = loadImage("sprites/scope.png");
flashImg = loadImage("sprites/flash.png");
target1 = loadImage("sprites/target1.png");
target2 = loadImage("sprites/target2.png");
bgSound = loadSound("sprites/bgmusic.mp3");
gunSound = loadSound("sprites/gunsound.mp3")
}

function setup() {
  createCanvas(1200,500);

  bgSound.play();

  gun = createSprite(550,400,10,10);
  gun.addImage(gunImg);
  gun.scale = 0.7;
  
  scope = createSprite(gun.x,gun.y,10,10);
scope.addImage(scopeImg);
scope.scale = 2.0;
scope.visible = false;
 
flash= createSprite(gun.x,gun.y,1,1);
flash.addImage(flashImg);
flash.scale= 3;
flash.visible = false;

targetGroup = createGroup();
}

function draw() {
  background(backgroundImg);  
  
  if (keyDown("space")) {
    scope.visible = true;
    gun.visible = false;
    flash.visible= true;
  }

  if (keyWentUp("space")) {
    scope.visible = false ;
    gun.visible = true ;
    flash.visible= false;
  }
         
  scope.x = mouseX;
scope.y = mouseY;

flash.x = mouseX;
flash.y = mouseY;


    if(mouseWentDown("leftButton")){
   targetGroup.destroyEach();
   score = score +10;
   gunSound.play();
  }

spawnTarget();
  drawSprites();

  textSize(20);
fill("orange")
  text("Score: "+score,1000,50);

}

function spawnTarget (){
if (frameCount % 100=== 0) {
   target = createSprite(0,200,10,10);
 target.velocityX = 9+score/10;
  
   rand = Math.round(random(1,2))
switch(rand){

case 1 :target.addImage(target1);
break;
case 2 :target.addImage(target2);
break;
}
target.scale = 0.3;
targetGroup.add(target);
target.lifetime = 300;
target.depth =flash.depth;
flash.depth+= 1

}

}
