var car,wall;


var speed,weight;

var car1,car2,car3,car4

function preload(){

car1 = loadAnimation("car1.png");
car2 = loadAnimation("car2.png");
car3 = loadAnimation("car3.png");
car4 = loadAnimation("car4.png")

}



function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.addAnimation("car1",car1);
  car.scale=0.5;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "white";

}

function draw() {
  background("black"); 
  
  if (wall.x-car.x < (car.width+wall.wisth)/2){

    car.velocityX = 0;
    var deformation = 0.5 * weight * speed/2250;
    if (deformation>180){
      car.changeAnimation = ("car2",car2);
    }
    if (deformation<180 && deformation>100){
      car.changeAnimation = ("car3",car3);
    }
    if (deformation<100){
      car.changeAnimation = ("car4",car4);
    }
  }


  drawSprites();
}