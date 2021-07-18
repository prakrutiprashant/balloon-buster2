var bow , arrow,  background;
var bowImage, arrowImage, green_balloon, red_balloon, pink_balloon ,blue_balloon, backgroundImage;
var score=0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloon = loadImage("red_balloon0.png");
  blue_balloon=loadImage("blue_balloon0.png");
  green_balloon=loadImage("green_balloon0.png")
  pink_balloon=loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  text("score: "+score,270,30);
  
    textSize(80);
textAlign(CENTER, TOP);
textFont("Impact");
fill("aqua");
stroke("black");
strokeWeight(5);
text("score: "+score,270,30);   
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow(); 
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,1));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
  }
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      blueBalloon();
    }
    if (World.frameCount % 100 == 0) {
      if (select_balloon == 1) {
        greenBalloon();}
      }
      if (World.frameCount % 100 == 0) {
        if (select_balloon == 1) {
          pinkBalloon();}
        }
  }
  var balloon = Math.round(random(1,4));

  if(World.frameCount%100==0){
    if(balloon==1){
      redBalloon();
    }else if (balloon==2){
      greenBalloon();
    }else if (balloon==3){
      blueBalloon();
    }else {
      pinkBalloon();
    }
  }
  drawSprites();
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.4;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloon);
  red.velocityX = 2;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(40, 400)), 10, 10);
  blue.addImage(blue_balloon);
  blue.velocityX = 2;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  //write code for spwaning green 
  var green = createSprite(0,Math.round(random(40, 400)), 10, 10);
  green.addImage(green_balloon);
  green.velocityX = 2;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink=createSprite(0,Math.round(random(40,400)),10,10);
  pink.addImage(pink_balloon);
  pink.velocityX=2;
  pink.lifetime=150;
  pink.scale=1.5;
}
text("score: "+score,270,30);
  
    textSize(80);
textAlign(CENTER, TOP);
textFont("Impact");
fill("aqua");
stroke("black");
strokeWeight(5);
text("score: "+score,270,30);   
  