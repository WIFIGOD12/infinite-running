var ground,invisibleground,groundImage
var player, runningImage
var obstacleGroup, obstacle1, obstacle2, obstacle3

function preload(){
groundImage = loadImage ('bckgnd.jpg')
runningImage = loadImage('running.png')
obstacle1 = loadImage('bananapeel.png')
obstacle2 = loadImage('spilt.png')
obstacle3 = loadImage('rock.png')
}

function setup() {
 
 createCanvas(1000,600)
 ground=createSprite(200,200);
 ground.addImage(groundImage)
 ground.velocityX = -2

player=createSprite(174,470)
player.addImage(runningImage)

invisibleground = createSprite(200,557,1000,10)
invisibleground.visible = false;

obstaclesGroup = new Group();

}

function draw() {
    background("white")

spawnObstacles() 
drawSprites()
fill("red")
text(mouseX+","+mouseY,mouseX,mouseY)

if(keyDown("space") && player.y >= 159) {
  player.velocityY = -12;
}

player.velocityY = player.velocityY + 1

if(ground.x < 200){
  ground.x = ground.width/2
}

player.collide(invisibleground);

spawnObstacles()
 
if(obstaclesGroup.isTouching(player)){
 gameState = END;
}

}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(600,505,10,40);
      //obstacle.debug = true;
      obstacle.velocityX = -9 ;
      
      //generate random obstacles
      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
      }
            
      obstacle.scale = 0.20;
      obstacle.lifetime = 300;
 
      obstaclesGroup.add(obstacle);
    }
  }
  


