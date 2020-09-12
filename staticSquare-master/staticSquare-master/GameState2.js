class GameState2{
 constructor(){

 }
 start(){
  
   //sprite1 = createSprite(550,550,200,100);
   //sprite2 = createSprite(550,400,200,100);
   //sprite3 = createSprite(550,250,200,100);
   //sprite3.shapeColor= "blue";
   /**sprite2.shapeColor= "red";
   sprite1.shapeColor= "grey";
   sprite1.visible = false;
    sprite2.visible = false;
    sprite3.visible = false;
    ThemeSound.play();
    //ThemeSound.resume();
    player = createSprite(200,200);
    */
  //  Ninja2 = createSprite(1150,150);
   //Ninja2health = createSprite(200,200,90,7);
   //shurikan=createSprite(1000,1000,10,10)
  // shop = createSprite(780,360,700,500);
    //shop.shapeColor= "yellow";
    //shop.visible = false;
  // Ninja2health.shapeColor= "yellow";
   // tag = createSprite(780,140,700,60);
    //tag.addImage("SHOP",shoptag)
    //tag.shapeColor= "blue";
    //tag.visible= false;

   //health2 = createSprite(200,200,100,10);
    //health2.shapeColor= "green";
    player.addImage("PLAYER",playerimg)
    player.scale = 0.4;

    

    Ninja2.addImage("NINJA2",Ninja2img)
    Ninja2.addAnimation("RUNRIGHT",Ninja2Right)
    Ninja2.addAnimation("NINJARUNLEFT",Ninja2Left)
    Ninja2.addImage("NINJA2ATTACK",Ninja2Attack)
    Ninja2.scale = 0.35;
  
    player.addAnimation("RUN",playerrunning)
    player.addAnimation("RUNLEFT",playerLeft)
    player.addAnimation("ATTACK",playerattack);
    player.addImage("LEFTSTAND",LeftStand);

  }

play(){
 background(groundimg);
  

 Ninja2health.x = Ninja2.x-10;
 Ninja2health.y = Ninja2.y-80;

   // Ninja2.velocityX=2;
    //Ninja2.velocityY=2;

    health2.x = player.x;
    health2.y = player.y-80;

   if(Ninja2health.width === 0  ){
     Ninjutsu++;
   }
   

  if(Ninja2.velocityX <= -1){
    Ninja2.changeAnimation("NINJARUNLEFT",Ninja2Left);
  }
  else if(Ninja2.velocityX <= 1)
  {
    Ninja2.changeAnimation("NINJA2",Ninja2img); 
  }


    player.changeAnimation("PLAYER",playerimg);
   

  if(keyIsDown(UP_ARROW)){
   player.y -= 10
   player.changeAnimation("RUN",playerrunning);
  }
  if(keyIsDown(DOWN_ARROW)){
    player.y += 10
    player.changeAnimation("RUN",playerrunning);
   }
   if(keyIsDown(RIGHT_ARROW)){
    player.x += 10
    player.changeAnimation("RUN",playerrunning);
   }
   if(keyIsDown(LEFT_ARROW)){
    player.x -= 10
    player.changeAnimation("RUNLEFT",playerLeft);
   }
   if(keyWentUp(LEFT_ARROW)){
    player.changeAnimation("LEFTSTAND",LeftStand);
   }
   if(keyWentUp(82)){
    MoveSound.play();
   }
   if(keyWentDown(32)){
      player.changeAnimation("ATTACK",playerattack);
      HitSound.play();
   }

   if(keyWentDown(83)){

    shop.visible = true;
    tag.visible = true;
    sprite3.visible = true;
     sprite2.visible = true;
     sprite1.visible = true;
   
   }
   if(keyWentDown(67)){
     shop.visible = false;
    tag.visible = false;
    sprite3.visible = false;
     sprite2.visible = false;
     sprite1.visible = false;
  }
  if(keyWentDown(65)){
    shurikan=createSprite(player.x,player.y,10,10)
    shurikan.shapeColor= "black";
    shurikan.velocityX = 8;
    shurikan.addAnimation("SHURIKEN",shurikanimg);
    shurikan.scale=0.2;
    shurikan.animation.play();

  }
   if(keyWentDown(32)  && player.isTouching(Ninja2)){
     //skeleton1.changeAnimation("HURT",skeletonhurt);
     Ninja2health.width -= 10 ;
     Ninjutsu+= 2;
   }
  if(shurikan.isTouching(Ninja2)){
    //skeleton1.changeAnimation("HURT",skeletonhurt);
    Ninja2health.width -= 5 ;
    shurikan.destroy();
    Ninjutsu++;
  }

 
  if(Ninja2health.width=== -10 || Ninja2health.width=== -5){
    Ninja2health.width = 90;
  }
   if(Ninja2health.width===0){
    Ninja2.x = Math.round(random(500,800))
     Ninja2.y = Math.round(random(100,500))
     Ninja2.velocityX = Math.round(random(-3 || 3))
     Ninja2.velocityY = Math.round(random(-3|| 3))
     Ninja2health.width = 100;
   }
   if(player.x+10 > Ninja2.x || player.x > Ninja2.x+10 || player.y > Ninja2.y+10 || player.y < Ninja2.y-10){
  Ninja2.velocityX = player.velocityX+1;
  Ninja2.velocityY = player.velocityY+1;
  console.log("SOMETHING");
  }

if(Ninja2.isTouching(player)){
  Ninja2.changeAnimation("NINJA2ATTACK",Ninja2Attack);
}

 
 if(player.y>=650 && Ninjutsu >= 0 && gamestate === 2){
  skeleton1.x=900;
  Ninja2.x=5000;
  health.x= skeleton1.x-10;
  game = new Game();
  background("white");
  gamestate=1;
  }
 

   fill("white");
    textStyle(BOLD);
    textSize(30);
  text("GO DOWN TO GO BACK  ",600,590);
    
    fill("white");
    textSize(20);
    textStyle(BOLD);
    text("Ninjutsu :",80,80);
    text(Ninjutsu,180,80);
   

    ////image(backgroundimg,0,-displayHeight*1,displayWidth,displayHeight*1)
    drawSprites();
    

}

}
   
  