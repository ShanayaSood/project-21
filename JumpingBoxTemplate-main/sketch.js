var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(200,500,100,20)
     surface1.shapeColor="blue"
     surface2=createSprite(200,500,100,20)
     surface2.shapeColor="yellow"
     surfac3=createSprite(200,500,100,20)
     surface3.shapeColor="pink"
     surface4=createSprite(200,500,100,20)
     surface4.shapeColor="green"
    //create box sprite and give velocity
     box.createSprite(200,100,20,20)
     box.velocity=0;
     box.shapeColor="black"
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite




         drawSprite();

         //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        //change color here
    }



}









