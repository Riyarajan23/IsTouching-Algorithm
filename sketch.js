var fr,mr


function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 60, 20);
  fr.shapeColor="red";
  mr=createSprite(200, 200, 20, 60);
  mr.shapeColor="red";

}

function draw() {
  mr.x=World.mouseX
  mr.y=World.mouseY
  if (mr.x-fr.x<mr.width/2+fr.width/2&& fr.x-mr.x<mr.width/2+fr.width/2&&
    mr.y-fr.y<mr.height/2+fr.height/2&& fr.y-mr.y<mr.height/2+fr.height/2
    ){
    
    mr.shapeColor="yellow";
    fr.shapeColor="yellow";
  }
  else {
    mr.shapeColor="red";
    fr.shapeColor="red";
  }
  background(0);  
  drawSprites();
}