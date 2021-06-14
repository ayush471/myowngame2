var barnImg,carImg,cowImg,eggsImg,farmerImg1,farmerImg2,houseImg,jungleImg,milkImg,roadImg,shopImg;
var gameState;
var bgImg, bgColor;
var farmer;

function preload(){
    barnImg = loadImage("images/barn.png");
    carImg = loadImage("images/car.png");
    cowImg = loadImage("images/cow.png");
    eggsImg  = loadImage("images/eggs.png");
    farmerImg1 = loadAnimation("images/farmer1.1.png");
    farmerImg2  = loadAnimation("images/farmer1.1.png","images/farmer1.2.png","images/farmer1.3.png");
    houseImg  = loadImage("images/house.png");
    jungleImg  = loadImage("images/jungle.png");
    milkImg  = loadImage("images/milk.png");
    roadImg  = loadImage("images/road.png");
    shopImg  = loadImage("images/shop.png");
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    gameState = "start";

    bgImg = houseImg;
    bgColor =  "white"
    //ground = createSprite(width/2,height/2);
    //ground.addImage(bgImg);
    //ground.scale = 0.1;

    farmer = createSprite(width/2+70,height-100,20,50);
    farmer.addAnimation("farmer1",farmerImg1); 
    farmer.addAnimation("farmer2",farmerImg2); 


    
}
function draw(){
    background(bgColor);
    imageMode(CENTER);
    image(bgImg,width/2,height/2,width,height);
    navigateFarmer();
    placeFarmer();
    if(gameState == "barn"){
        farmer.changeAnimation("farmer1",farmerImg1);
    }
    drawSprites();
}

function navigateFarmer(){
    if(keyDown(RIGHT_ARROW) ){
        farmer.velocityX = 3 
        farmer.changeAnimation("farmer2",farmerImg2);
        console.log(farmer.x);       
    }
}


function placeFarmer(){
    if(gameState === "start" && farmer.x === width-50){
        clear();
        bgColor =  "green";
        bgImg = barnImg;
        console.log("barn")
        farmer.x = width/2;
        gameState = "barn";           
    }else if(gameState === "barn" && farmer.x === width-50){
        bgImg = roadImg;
        console.log("road")
        farmer.x = width/2;
        gameState = "road"; 
    }else if(gameState === "shop" && farmer.x === width-50){
            bgImg = roadImg;
            console.log("shop")
            farmer.x = width/2;
            gameState = "shop";   
    }
}
function loadbgImage(){
    if(gameState === start){

    }
}