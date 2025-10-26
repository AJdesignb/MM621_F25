let cx, cy;           // center of the main circle
let baseR = 70;       // radius of the main circle
let ripples = [];     // the whole array of ripples

function setup() {
  createCanvas(500, 500);
  cx = width / 2;
  cy = height / 2;
  noCursor(); // the cursor thing like Kim's
}

function draw() {
  background(20);

  // Main circle
  noStroke();
  // fill(80, 140, 255);   
  fill(150, 140, 255);           // base circle color
  circle(cx, cy, baseR * 2);

  // High light circle
  fill(255, 255, 255, 80);
  circle(cx + 20, cy - 20, baseR * 0.5);

  // Update & draw ripples
 for (let i = ripples.length - 1; i >= 0; i--) {
    let rp = ripples[i];

    rp.r += 4;        // grow
    rp.alpha -= 3;    // fade
    rp.weight = 4;    // fixed outline thickness

    noFill();
    stroke(150, 200, 255, rp.alpha);
    strokeWeight(rp.weight);
    circle(cx, cy, rp.r * 2);

    // Removing ripple when rings are invisible or too large
    if (rp.alpha <= 0 || rp.r >= rp.maxR) {
      ripples.splice(i, 1); //jave pre - prog
    }
  }

  // The cursor thingy - from kims project.
  noFill();
  stroke(255, 100);
  circle(mouseX, mouseY, 16);
}

function mousePressed() {
  // Only trigger a ripple if the click is inside the circle
  if (dist(mouseX, mouseY, cx, cy) <= baseR) {
    addRipple();
  }
}

function addRipple() {
  ripples.push({
    r: baseR,           // start at the circle's edge
    maxR: baseR + 260,  // how far the ripple will travels
    speed: 4,           // how fast it expands
    alpha: 200,         // starting transparency
    fade: 3,            // how fast it fades out per frame
    weight: 4           // stroke weight (updated as it grows)
  });
}

