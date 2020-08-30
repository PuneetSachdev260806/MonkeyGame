var obstacleImage, obstacleGroup;
var bg1, bg1Image;
var bananaImage, bananaGroup;
var score;
var monkey, monkey_running;
var ground;

function preload() {
bg1Image=loadImage("jungle.jpg");
monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png", "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_010.png");
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
}

function setup() {
  createCanvas(600, 600);
  
  bg1 = createSprite(0,0,20,30);
  bg1.addImage(bg1Image);
  bg1.velocityX=-2;
  bg1.x=bg1.width/2;
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  ground.visible = false;
  
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
 // background(220);
  
  
  switch(score){
    case 10: monkey.scale=0.12;
           break;
    case 20: monkey.scale=0.14;
           break;
    case 30: monkey.scale=0.16;
           break;
    case 40: monkey.scale=0.18;
           break;
    default: break;
  
  }
  
   if(keyDown("space") && monkey.y>=150) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (obstacleGroup.isTouching(monkey)){
  monkey.scale=monkey.scale-0.01;
  }
  
  spawnBananas();
  spawnObstacles();
  
  monkey.collide(ground);
  drawsprites();
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50 );
}

function spawnBananas() {
 if (World.frameCount%80===0) {
  var banana = createSprite(400, 200,20,10);
  banana.addImage(bananaImage);
  banana.scale=0.037;
  banana.velocityX=-3.5;
  //banana.x=randomNumber()
  banana.y= Math.round(random(280,350));
  banana.lifetime=200;
  bananaGroup.add(banana);
 }
  
}


function spawnObstacles() {
  if (World.frameCount%100===0) {
    var obstacle = createSprite(400, 350,20,10);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.084;
  //obstacle.collide(ground);
  obstacle.velocityX=-4;
  //obstacle.x=randomNumber()
  //obstacle.y=randomNumber(250,380);
  obstacle.lifetime=200;
  obstacleGroup.add(obstacle);
 }
  
}


