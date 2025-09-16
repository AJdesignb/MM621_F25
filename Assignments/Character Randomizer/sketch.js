let Wave_A;
let Wave_B;
let girly;

let currentScene = "";

function preload(){
  Wave_A = loadImage
  ("Art-36-In-A.png");

  Wave_B = loadImage
  ("WaveyB.png");

  girly = loadImage
  ("Girly.png");
}

function setup() {
  createCanvas(600, 700);
  rectMode(CENTER);
}

function draw() {
  background(255, 200, 0);

  //base screen 
  textSize(110);
  fill(0);
  noStroke();
  text(">>>", 550, 135);
  text("<<<", 50, 650);


  if (currentScene === "waves") {
      //Show Waves
     imageMode (CENTER);
     image(Wave_A, 300, 340, 600, 720);
     image(Wave_B, 300, 340, 600, 720);
      
     //waves text
     fill(0, 0, 255);
     textAlign(CENTER);
     textSize(200);
     text("WA", 230, 200);
     text("V", 350, 360);
     text("ES", 450, 520); 
    
    } else if (currentScene === "girly") {
       //Show Create text
       textAlign(CENTER);
       textSize(200);
       fill(255, 0, 0);
       text("CRE", 230, 180);  
       text("ATE", 390, 360);
       
       //girly image
       imageMode (CENTER);
       image(girly, 250, 340, 640, 780);
    }
  }

function keyPressed() {
  let choice = int(random(2));
  if (choice === 0) {
    currentScene = "waves";
  } else {
    currentScene = "girly";
  }
}