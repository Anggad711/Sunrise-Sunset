const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(825,625);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

}
async function getBackgroundImg(){
    var API = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await API.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var minute = datetime.slice(14,16);

    console.log(datetime+"  " +minute);

    if(minute>=00 && minute<=05)
    {
        bg = "sunrise1.png";
    }
    else if(minute>=06 && minute<=10)
    {
        bg = "sunrise2.png";
    }
    else if(minute>=11 && minute<=15)
    {
        bg = "sunrise3.png";
    }
    else if(minute>=16 && minute<=20)
    {
        bg = "sunrise4.png";
    }
    else if(minute>=21 && minute<=25)
    {
        bg = "sunrise5.png";
    }
    else if(minute>=26 && minute<=30)
    {
        bg = "sunrise6.png"
    }
    else if(minute>=31 && minute<=35)
    {
        bg = "sunset7.png";
    }
    else if(minute>=36 && minute<=40)
    {
        bg = "sunset8.png";
    }
    else if(minute>=41 && minute<=45)
    {
        bg = "sunset9.png";
    }
    else if(minute>=46 && minute<=50)
    {
        bg = "sunset10.png"
    }
    else if(minute>=51 && minute<=55)
    {
        bg = "sunset11.png";
    }
    else if(minute>=56 && minute<=59)
    {
        bg = "sunset12.png"
    }
backgroundImg = loadImage(bg);

} 