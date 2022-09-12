var angle
var score =0;


var score=0;
var Play=1
var End=0
var gameState=Play
function preload(){

  zom3 = loadImage("zombie 3-cortada.png");
  protaImg = loadImage("protagonista.png");
  zom2Img = loadImage("zom 3.png");
  cenarioImg = loadImage("cenario.jpg");
  balaImg = loadImage("bullet1.png");
  fundoImg = loadImage("fundo.jpg");
  man = loadImage("pixel.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  angle=15
  mini = createSprite(width/2,height/2);
  mini.addImage(man);
  mini.scale = 0.14;
  piso1=createSprite(530,618,2000,1)
  piso2=createSprite(1300,477,120,10);
  piso3=createSprite(96,498,180,10);
  piso4=createSprite(96,565,500,10);
  piso5=createSprite(131,713,260,10);
  piso6=createSprite(811,613,100,10);
  piso7=createSprite(627,400,60,10);
  piso8=createSprite(570,420,49,10);
  piso9=createSprite(471,474,110,10);
  piso10=createSprite(1295,578,90,10);
  piso11=createSprite(1010,426,246,10);
  piso12=createSprite(1052,842,49,10);
  piso13=createSprite(1115,780,79,10);
  piso14=createSprite(836,570,79,10);
  piso15=createSprite(1698,715,79,12);
  piso16=createSprite(183,680,177,12);
   piso1.visible = false;
   piso2.visible = false;
   piso3.visible = false;
   piso4.visible = false;
   piso5.visible = false;
   piso6.visible = false;
   piso7.visible = false;
   piso8.visible = false;
   piso9.visible = false;
   piso10.visible = false;
 piso11.visible = false;
  piso12.visible = false;
   piso13.visible = false;
   piso14.visible = false;
   piso15.visible = false;
   piso16.visible = false;
  zom1 = new Group();
  zom2 = new Group();
  balasA = new Group()
}

function draw() {

  background("#BDA297");
  image(fundoImg,0,0,width,height)

  drawSprites();
  spawzumbie()
  fill("darkgreen")
   
   text(mouseX+","+mouseY, mouseX,mouseY)
  text("Pontuação: "+score, 50,50);
  textFont('Jokerman')
  textSize(60)
  text("Survivor", width/2-150,60);

  if(keyIsDown(RIGHT_ARROW)){
    mini.x = mini.x + 6
    mini.mirrorX(-1)

  }

  if(keyWentDown('D')){
    bala = createSprite(200,300);
    bala.addImage(balaImg);
    bala.scale = 0.05;
    bala.velocityX = 17;
    bala.x = mini.x
    bala.y = mini.y
    bala.lifetime = width/17
    balasA.add(bala)
  }

  if(keyIsDown(LEFT_ARROW) ){
    mini.x = mini.x -6
    mini.mirrorX(+1);
    
  }
  if(balasA.isTouching(zom1)){
     zom1.destroyEach()
     score=score+1
  }
  if(balasA.isTouching(zom2)){
    zom2.destroyEach()
    score=score+1
 }
  if(keyWentDown('A')){
    bala = createSprite(200,300);
    bala.addImage(balaImg);
    bala.scale = 0.05;
    bala.velocityX = -17;
    bala.x = mini.x
    bala.y = mini.y
    bala.lifetime = width/17;
    balasA.add(bala);

  }

  if(keyDown("space")){
    mini.velocityY = -10
  }


  mini.velocityY = mini.velocityY + 0.5
  mini.collide(piso1);
  mini.collide(piso2);
  mini.collide(piso3);
  mini.collide(piso4);
  mini.collide(piso5);
  mini.collide(piso6);
  mini.collide(piso7);
  mini.collide(piso8);
  mini.collide(piso9);
  mini.collide(piso10);
  mini.collide(piso11);
  mini.collide(piso12);
  mini.collide(piso13);
  mini.collide(piso14);
  mini.collide(piso15);
  mini.collide(piso16);


if(gameState===Play){
  if(mini.isTouching(zom1)){
    gameState=End
    
  }
  if(mini.isTouching(zom2)){
    gameState=End
   
  }
}
else if(gameState===End){
  fill("darkgreen")
    textSize(50)
    textFont("Snap ITC")
    text("GAME OVER",684,272)
    mini.destroy()
}
 
  
}


function spawzumbie(){
  if(frameCount%100===0){
    zumbie= createSprite(width,height-70)
    zumbie.addImage(zom3)
    zumbie.velocityX=-4
    zumbie.lifetime=190
    zumbie.scale=0.32
    zom1.add(zumbie)
  }
    if(frameCount%150===0){
      zumbie2= createSprite(0,height-70)
      zumbie2.addImage(zom2Img)
      zumbie2.velocityX=7
      zumbie2.lifetime=200
      zumbie2.scale=0.15
      zumbie2.mirrorX(-1);
      zom2.add(zumbie2)
    }
}
