let eye_A;
let eye_B;
let eye_C;
let eye_D;

let mouth_A;
let mouth_B;
let mouth_C;
let mouth_D;

let hairBack;
let hairFront;
let nose;

let eyes = [];
let mouth = [];

let currentEye;
let currentMouth;

function preload(){

  eye_A = loadImage
  ("eye a.png");
  eye_B = loadImage
  ("eye b.png");
  eye_C = loadImage
  ("eye c.png");
  eye_D = loadImage
  ("eye d.png");

  mouth_A = loadImage
  ("mouth a.png");
  mouth_B = loadImage
  ("mouth b.png");
  mouth_C = loadImage
  ("mouth c.png");
  mouth_D = loadImage
  ("mouth d.png");

  hairBack = loadImage
  ("Hair Back.png");
  hairFront = loadImage
  ("Hair Front.png");

  nose = loadImage
  ("Nose.png");
}

function setup() {
  createCanvas(600, 700);  
  background(220); 

  // Stored all images to a variable
  eyes = [eye_A, eye_B, eye_C, eye_D];
  mouth = [mouth_A, mouth_B, mouth_C, mouth_D];

  // Pick random eye and mouth
  currentEye = random(eyes);
  currentMouth = random(mouth);
}

function draw() {
  background(220);
  
  //Text
  // textSize(120);
  // textAlign(CENTER, CENTER);
  // stroke(0, 0, 255);
  // text("GUURRL", 300, 100);

  //Body
  fill(255, 204, 0);
  stroke(255, 204, 0);
  rect(120, 450, 350, 350, 120);

  //HairBack
  imageMode (CENTER);
  image(hairBack, 300, 380, 650, 650);

  //Head
  fill(255, 214, 186);
  stroke(224,172,105);
  ellipse(300, 350, 320, 360);

  //HairFront
  imageMode (CENTER);
  image(hairFront, 300, 380, 650, 650);

  //Nose
  imageMode (CENTER);
  image(nose, 300, 400, 300, 300);

  //Cheeks
  fill(255, 216, 216);
  stroke(255, 216, 216);
  ellipse(400, 390, 80, 40);
  ellipse(200, 390, 80, 40);

  imageMode(CENTER);
  image(currentEye, 300, 330, 230, 230);
  image(currentMouth, 300, 440, 230, 230);

  //Border
  fill(0, 0, 255);
  stroke(0, 0, 0);
  //ellipse(0, 0, 40, 40);

  // ellipse(0, 40, 40, 40);
  // ellipse(0, 80, 40, 40);
  // ellipse(0, 120, 40, 40);
  // ellipse(0, 160, 40, 40);
  // ellipse(0, 200, 40, 40);
  // ellipse(0, 240, 40, 40);
  // ellipse(0, 280, 40, 40);
  // ellipse(0, 320, 40, 40);
  // ellipse(0, 360, 40, 40);
  // ellipse(0, 400, 40, 40);
  // ellipse(0, 440, 40, 40);
  // ellipse(0, 480, 40, 40);
  // ellipse(0, 520, 40, 40);
  // ellipse(0, 560, 40, 40);
  // ellipse(0, 600, 40, 40);
  // ellipse(0, 640, 40, 40);
  // ellipse(0, 680, 40, 40);

for (let b = height; b >= 0; b -=40) {
fill(255, 0, 0);
  ellipse(0, b, 40, 40);
}

  // ellipse(40, 0, 40, 40);
  // ellipse(80, 0, 40, 40);
  // ellipse(120, 0, 40, 40);
  // ellipse(160, 0, 40, 40);
  // ellipse(200, 0, 40, 40);
  // ellipse(240, 0, 40, 40);
  // ellipse(280, 0, 40, 40);
  // ellipse(320, 0, 40, 40);
  // ellipse(360, 0, 40, 40);
  // ellipse(400, 0, 40, 40);
  // ellipse(440, 0, 40, 40);
  // ellipse(480, 0, 40, 40);
  // ellipse(520, 0, 40, 40);
  // ellipse(560, 0, 40, 40);
  // ellipse(600, 0, 40, 40);

for (let a = 600; a >= 40; a -= 40) {
  fill(0, 255, 0);
  ellipse(a, 0, 40, 40);
}

  // ellipse(600, 700, 40, 40);
  // ellipse(560, 700, 40, 40);
  // ellipse(520, 700, 40, 40);
  // ellipse(480, 700, 40, 40);
  // ellipse(440, 700, 40, 40);
  // ellipse(400, 700, 40, 40);
  // ellipse(360, 700, 40, 40);
  // ellipse(320, 700, 40, 40);
  // ellipse(280, 700, 40, 40);
  // ellipse(240, 700, 40, 40);
  // ellipse(200, 700, 40, 40);
  // ellipse(160, 700, 40, 40);
  // ellipse(120, 700, 40, 40);
  // ellipse(80, 700, 40, 40);
  // ellipse(40, 700, 40, 40);
  // ellipse(0, 700, 40, 40);

for (let y = 0; y <= width; y += 40) {
  fill(0, 0, 255);
  ellipse(y, 700, 40, 40);
}

  //   ellipse(600, 680, 40, 40);
  //   ellipse(600, 640, 40, 40);
  //   ellipse(600, 600, 40, 40);
  //   ellipse(600, 560, 40, 40);
  //   ellipse(600, 520, 40, 40);
  //   ellipse(600, 480, 40, 40);
  //   ellipse(600, 440, 40, 40);
  //   ellipse(600, 400, 40, 40);
  //   ellipse(600, 360, 40, 40);
  //   ellipse(600, 320, 40, 40);
  //   ellipse(600, 280, 40, 40);
  //   ellipse(600, 240, 40, 40);
  //   ellipse(600, 200, 40, 40);
  //   ellipse(600, 160, 40, 40);
  //   ellipse(600, 120, 40, 40);
  //   ellipse(600, 80, 40, 40);
  //   ellipse(600, 40, 40, 40);

for (let x = 0; x <= height; x += 40) {
  fill(255, 255, 0);
    ellipse(600, x, 40, 40);
}
}  

function keyPressed() {
  
  if (key === 'E' || key === 'e') {
    currentEye = random(eyes);
  }

  if (key === 'M' || key === 'm') {
    currentMouth = random(mouth)
  }

}