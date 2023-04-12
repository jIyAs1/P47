var evilSpaceship, evilSpaceshipImg;
var galaxyBg, galaxyBgImg;
var spaceship,spaceshipImg;
var bullet,bulletImg;



function preload(){
    galaxyBgImg = loadImage("galaxyBg.jpeg");
    evilSpaceshipImg = loadImage("evilSpaceship.png");
    bulletImg = loadImage("bullet.png");
    spaceshipImg = loadImage("spaceship.png");
}

function setup(){
createCanvas(1000,800);

bullet = createSprite(200,200,10,10);
bullet.addImage(bulletImg);
bullet.scale=0.1;

spaceship = createSprite(300,300,1,1);
spaceship.addImage(spaceshipImg);
spaceship.scale=0.15;

evilSpaceship = createSprite(200,200,10,10);
evilSpaceship.addImage(evilSpaceshipImg);
evilSpaceship.scale=0.4;

createEdgeSprites(edges);




}

function draw(){
background(galaxyBgImg);

if(keyDown("LEFT")&&spaceship.x>200){
    spaceship.velocityX = -10;
}

if(keyDown("RIGHT")&&spaceship.x<800){
    spaceship.velocityX = 10;

}
 
if(spaceship.isTouching(edges)){
    spaceship.velocityX = -6;
}






drawSprites();


}

