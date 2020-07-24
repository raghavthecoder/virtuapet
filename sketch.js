//Create variables here
var dog ,happyDog;
var  dogimg,dogimg2;
var database;
var foodS, foodStock;

function preload()
{
  dogimg=loadImage("images/dogImg.png");
  dogimg=loadImage("images/dogImg2.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);

  var dog=createSprite(100,100,50,50); 

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

drawSprites();

text ("foodStock",150,150);
text("note press UP_ARROW TO FEED DRAGO MILK",200,200)
textSize(20);
Fill(black);
stroke(10);



//add styles here

}



function readStock(data){
  foodS=data.val();
}

function writeStock(x){
 
if(x<=0){
  x=0;
}
else{
  x=x-1
}
  database.ref('/').update({
    Food:x
  })
}
