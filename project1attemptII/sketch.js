let birdy;
let birdyTwo;
let angryBirdy;
// Birdy position & speed
let birdX, birdY;
let birdSpeedX = 1.5;   // automatic right movement
let birdMoveStep = 15; // how far bird moves up/down per key press
let isAngry = false; //tracks if birdy is angry yet
let angryTimer = 0; //When the birdy hits the brick

let grass;

let cloudA1x, cloudA2x;
let cloudSpeed = 1;
let skyColor;
let bgColor;

let font;
let r, g, b;

let bricks = [];

function preload() {
  birdy = loadImage("Birdy.png");
  birdyTwo = loadImage("Birdy 2.png");
  angryBirdy = loadImage("angry birdy.png");
  grass = loadImage("Asset 1.png");
  font = loadFont('Super Dream.ttf');
}

function setup() {
  createCanvas(800, 850);
  rectMode(CORNER);

  // Cloud starting positions
  cloudA1x = width / 2;
  cloudA2x = -width / 2;

  // Bird starting position
  birdX = 100;       // near the left side
  birdY = 400;       // vertically centered
  
  // Initial Background Color
  bgColor = color(255);
  skyColor = color(111, 0, 255); //prple

  randomizeBricks(); //calling bricks
}

function draw() {
  background(bgColor);

  // ---------- SKY ----------
  fill(skyColor);
  noStroke();
  rect(0, 0, 800, 600);

  // ---------- CLOUDS ----------
  drawClouds();

  // ---------- GROUND ----------
  imageMode(CENTER);
  image(grass, 400, 510, 820, 240);
  fill(132, 153, 79);
  noStroke();
  rect(0, 550, 800, 300);

  // --------- INSTRUCTIONS ---------
  textFont (font);
  textSize(40);
  fill(255, 231, 151);
  noStroke();
  text('Use the UP & DOWN arrow keys', 110, 630);
  textSize(35);
  text('to save birdy from bumping into the bricks', 50, 680);
  text('press B to change background colors', 100, 730);

  // ---------- BORDER ----------
  let c = [0, 126, 255, 102];
  fill(c);
  noStroke();
  rect(0, 820, 850, 30);
  rect(0, 0, 850, 30);
  rect(0, 20, 30, 850);
  rect(770, 20, 30, 850);

  // ---------- RANDOM DOTS ----------
  r = random(255);
  g = random(255);
  b = random(255);

  for (let by = height; by >= 0; by -= 40) {
    fill(255, 177, 47);
    ellipse(14, by, 25, 25);
  }

  for (let ax = 800; ax >= 40; ax -= 40) {
    fill(255, 177, 47);
    ellipse(ax, 14, 25, 25);
  }

  for (let y = 0; y <= width; y += 40) {
    fill(255, 177, 47);
    ellipse(y, 835, 25, 25);
  }

  for (let x = 0; x <= height; x += 40) {
    fill(255, 177, 47);
    ellipse(785, x, 25, 25);
  }

  // ---------- BRICKS ----------
  stroke(184, 124, 76);
  strokeWeight(6);
  fill(123, 64, 25);
  for (let brick of bricks) {
    rect (brick.x, brick.y, 100, 50);
  }
  // rect(590, 295, 100, 50);
  // rect(390, 135, 100, 50);
  // rect(210, 375, 100, 50);

  // ---------- BIRDY ----------
  imageMode(CENTER);
  image(birdy, 50, 750, 200, 200);
  image(birdyTwo, 730, 790, 200, 200);

  let currentBirdy = isAngry ? angryBirdy : birdy;
  image(currentBirdy, birdX, birdY, 300, 300);

  // Move birdy automatically to the right if she is not angry
  if (!isAngry) {
    birdX += birdSpeedX;
  }

  // Restart when bird crosses screen (new round)
  if (birdX > width + 150) {
    resetGame();
  }

  // just to keep birdy inside screen vertically as well
  birdY = constrain(birdY, 50, height - 50);

  // ---------- COLLISION DETECTION ----------
  for (let brick of bricks) {
    if (
      birdX + 50 > brick.x && birdX - 50 < brick.x + 10 && // X overlap
      birdY + 50 > brick.y && birdY - 50 < brick.y + 10    // Y overlap
    ) {
      triggerAngryMode();
    }

  // ---------- HANDLE ANGRY TIMER ----------
  if (isAngry && millis() - angryTimer > 1000) { // after 1 second
    resetGame();
    }
  }
}

// Draws clouds and handles their motion
function drawClouds() {
  fill(233, 179, 251);
  noStroke();
  
  //1st cloud group
  push();
  translate(cloudA1x, 0);
  drawCloudShapes();
  pop();
  
  //2nd cloud grp
  push();
  translate(cloudA2x, 0);
  drawCloudShapes();
  pop();

  cloudA1x -= cloudSpeed;
  cloudA2x -= cloudSpeed;

  if (cloudA1x <= - width / 2) 
    {cloudA1x = width + width / 2;}
  if (cloudA2x <= - width / 2) 
    {cloudA2x = width + width / 2;}
}

// Cloud shape definition
function drawCloudShapes() {
  ellipse(80, 530, 180);
  ellipse(350, 330, 330);
  ellipse(190, 450, 180);
  ellipse(540, 360, 200);
  ellipse(650, 420, 100);
  ellipse(720, 520, 180);
  rect(150, 400, 500, 160);
}

// All the key presses
function keyPressed() {
  if (keyCode === UP_ARROW) {
    birdY -= birdMoveStep;
  } else if (keyCode === DOWN_ARROW) {
    birdY += birdMoveStep;
  } else if (key === 'b' || key === 'B') {
    skyColor = color(random(255), random(255), random(255)); // change sky color randomly
  }
}   

function randomizeBricks() {
  bricks = [];
  for (let i = 0; i < 3; i++) { // 3 bricks
    let bx = random(100, width - 200); //some margin from the edges
    let by = random(100, height - 300); //space from top and bottom
    bricks.push({x: bx, y: by});
  }
}

//Reset game after angry birdy or round end
function resetGame() {
  isAngry = false;
  birdX = 100;
  birdY = 400;
  randomizeBricks();
 }


 // Trigger angry mode when collision happens
function triggerAngryMode() {
  if (!isAngry) {
    isAngry = true;
    angryTimer = millis();
  }
}

