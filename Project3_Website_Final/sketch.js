let menuActive = false;   // is the menu open?
let animRadius = 0;       // current spotlight animation value
let targetRadius = 0;     // target animation value
let maxRadius;            // big enough for full animation

let font;
let fontB;
let HSimg;
let Hoshimg;
let bgimg;
let Starimg;

// words to rotate through inside the canvas
const roles = ["Visual Explorer", "Storyteller", "UX Designer"];

// data for hoverable words
let skillWords = [];
const SKILL_TEXT_SIZE = 96;

// project links & click areas
const projectLink = "https://www.aashi-jain.com/hastashilp";
const hoshLink = "https://www.aashi-jain.com/hoshruba-angry-god-s-lament";

let hsImgArea = { x: 90, y: 1150, w: 800, h: 600 };
let hsTitleArea = {};

let hoshImgArea = { x: 650, y: 1480, w: 800, h: 900 };
let hoshTitleArea = {};

// GALAXY STAR FIELD
let stars = [];
const STAR_COUNT = 600;

function preload() {
  font = loadFont("Rosean.ttf");
  fontB = loadFont("Coolvetica Rg.otf");
  HSimg = loadImage("HSimg.png");
  Hoshimg = loadImage("Hoshimg.png");
  bgimg = loadImage("WB.png");
  Starimg = loadImage("Star.png");
}

function setup() {
  const cnv = createCanvas(1500, 3000);
  const frame = document.querySelector(".canvas-frame");
  if (frame) cnv.parent(frame);

  maxRadius = dist(0, 0, width, height);

  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) menuBtn.addEventListener("click", toggleMenu);

  setupSkillWords();

  // init stars
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      speed: random(0.05, 0.2)
    });
  }
}

function setupSkillWords() {
  textFont(font);
  textSize(SKILL_TEXT_SIZE);
  textAlign(LEFT, TOP);

  const lines = [
    { text: "TYPOGRAPHY * BRANDING * ILLUSTRATION", y: 900 },
    { text: "COLLABORATION * PACKAGING * COLOURS", y: 980 }
  ];

  lines.forEach(({ text, y }) => {
    let x = 15;
    const tokens = text.split(" ");

    for (const token of tokens) {
      const drawText = token + " ";
      const w = textWidth(drawText);
      const isInteractive = !["*", ""].includes(token);

      skillWords.push({
        label: drawText,
        x,
        y,
        w,
        h: SKILL_TEXT_SIZE * 1.1,
        interactive: isInteractive
      });

      x += w;
    }
  });
}

function draw() {
  background(15);

  // GALAXY BACKGROUND
  drawGalaxy();

  // HEADER TEXT
  textFont(font);
  textSize(160);
  fill(248, 244, 236);
  text("ARTIST & DESIGNER", 10, 10);
  text("Storyteller", 130, 130);

  // TOP BACKGROUND IMAGE
  image(bgimg, 0, 0, 1500, 890);
  image(Starimg, 10, 135, 130, 130);
  image(Starimg, 910, 135, 130, 130);

  // HOVER SKILL WORDS
  drawSkillWords();

  // =========================
  // PROJECT 1 — HASTASHILP
  // =========================

  // image hover effect
  let hsHover =
    mouseX >= hsImgArea.x &&
    mouseX <= hsImgArea.x + hsImgArea.w &&
    mouseY >= hsImgArea.y &&
    mouseY <= hsImgArea.y + hsImgArea.h;

  let hsScale = hsHover ? 1.05 : 1; // grow 5% on hover
  let hsW = hsImgArea.w * hsScale;
  let hsH = hsImgArea.h * hsScale;
  let hsX = hsImgArea.x - (hsW - hsImgArea.w) / 2;
  let hsY = hsImgArea.y - (hsH - hsImgArea.h) / 2;

  image(HSimg, hsX, hsY, hsW, hsH);

  // title + hover
  textFont(font);
  textSize(72);
  let titleX = 850;
  let titleY = 1250;
  let titleText = "HASTASHILP";

  let titleW = textWidth(titleText);
  let titleH = 72 * 1.1;

  hsTitleArea = { x: titleX, y: titleY, w: titleW, h: titleH };

  if (
    mouseX >= titleX &&
    mouseX <= titleX + titleW &&
    mouseY >= titleY &&
    mouseY <= titleY + titleH
  ) {
    fill(234, 255, 151);
  } else {
    fill(248, 244, 236);
  }

  text(titleText, titleX, titleY);

  // Subtext
  textSize(30);
  textFont(fontB);
  fill(248, 244, 236);
  text("Handicrafts of India (Card Game Design)", 850, 1310);

  textSize(21);
  text(
    "The project focuses on raising awareness about the many traditional crafts that surround us. According to Handmade in India (NID, 2005), India is home to nearly 516 distinct handicrafts, yet most of us can barely name even twenty.\n\nThis game is designed for young adults and above, using learning through play to spark curiosity and build cultural understanding. By engaging players, the game encourages a deeper appreciation of the diverse crafts of India and helps reconnect people with their own cultural heritage",
    850,
    1360,
    500,
    400
  );

  // ================================
  // PROJECT 2 — ANGRY GOD'S DILEMMA
  // ================================

  // image hover effect
  let hoshHover =
    mouseX >= hoshImgArea.x &&
    mouseX <= hoshImgArea.x + hoshImgArea.w &&
    mouseY >= hoshImgArea.y &&
    mouseY <= hoshImgArea.y + hoshImgArea.h;

  let hoshScale = hoshHover ? 1.05 : 1;
  let hoshW = hoshImgArea.w * hoshScale;
  let hoshH = hoshImgArea.h * hoshScale;
  let hoshX = hoshImgArea.x - (hoshW - hoshImgArea.w) / 2;
  let hoshY = hoshImgArea.y - (hoshH - hoshImgArea.h) / 2;

  image(Hoshimg, hoshX, hoshY, hoshW, hoshH);

  // title + hover
  textFont(font);
  textSize(72);

  let hTitleX = 180;
  let hTitleY = 1800;
  let hTitleText = "Angry God's Dilemma";

  let hTitleW = textWidth(hTitleText);
  let hTitleH = 72 * 1.1;

  hoshTitleArea = {
    x: hTitleX,
    y: hTitleY,
    w: hTitleW,
    h: hTitleH
  };

  if (
    mouseX >= hTitleX &&
    mouseX <= hTitleX + hTitleW &&
    mouseY >= hTitleY &&
    mouseY <= hTitleY + hTitleH
  ) {
    fill(234, 255, 151);
  } else {
    fill(248, 244, 236);
  }

  text(hTitleText, hTitleX, hTitleY);

  textSize(30);
  textFont(fontB);
  fill(248, 244, 236);
  text("Tilism e- Hoshruba", 180, 1860);

  textSize(20);
  text(
    "This project adapts magical excerpts from Tilism-e-Hoshruba to explore how its fictional world reflects issues in our real one. Inspired by Amar Ayyar’s Zambil trickery where he disguises himself to deceive others—the work draws parallels to how people today often hide their true identities to appear socially acceptable.\n\nThrough this reinterpretation, the project raises questions about gender stereotypes, individuality, self-view, and self-acceptance. By using the story’s aesthetic, magic, and narrative twists, it aims to creatively highlight contemporary social crises and encourage readers to reflect on their own identities.",
    180,
    1910,
    500,
    400
  );

  // MENU SPOTLIGHT
  animRadius = lerp(animRadius, targetRadius, 0.15);
  if (animRadius > 1) {
    drawSpotlightOverlay(animRadius);
    if (animRadius > 40) drawMenuPanel();
  }
}

// GALAXY FUNCTION
function drawGalaxy() {
  noStroke();
  fill(255);

  for (let s of stars) {
    const twinkle = random(-0.3, 0.3);
    const starSize = max(0.5, s.size + twinkle);

    circle(s.x, s.y, starSize);

    s.y += s.speed; // downward drift

    if (s.y > height) {
      s.y = 0;
      s.x = random(width);
    }
  }
}

function drawSkillWords() {
  textFont(font);
  textAlign(LEFT, TOP);
  textSize(SKILL_TEXT_SIZE);

  for (const word of skillWords) {
    const hovering =
      word.interactive &&
      mouseX >= word.x &&
      mouseX <= word.x + word.w &&
      mouseY >= word.y &&
      mouseY <= word.y + word.h;

    fill(hovering ? color(234, 255, 151) : color(100));
    text(word.label, word.x, word.y);
  }
}

function toggleMenu() {
  menuActive = !menuActive;
  targetRadius = menuActive ? maxRadius : 0;

  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) menuBtn.classList.toggle("open", menuActive);
}

function drawSpotlightOverlay(radius) {
  push();
  noStroke();

  const progress = constrain(radius / maxRadius, 0, 1);
  const h = min(windowHeight, height);

  fill(0, 180);
  rect(0, 0, width, h);

  const base2x = 0;
  const base2y = h * 0.32;
  const base3x = 0;
  const base3y = h;
  const base4x = width;
  const base4y = h * 0.68;

  const anchorX = width;
  const anchorY = 0;

  const p2x = lerp(anchorX, base2x, progress);
  const p2y = lerp(anchorY, base2y, progress);
  const p3x = lerp(anchorX, base3x, progress);
  const p3y = lerp(anchorY, base3y, progress);
  const p4x = lerp(anchorX, base4x, progress);
  const p4y = lerp(anchorY, base4y, progress);

  fill(234, 255, 150);

  beginShape();
  vertex(anchorX, anchorY);
  vertex(p2x, p2y);
  vertex(p3x, p3y);
  vertex(p4x, p4y);
  endShape(CLOSE);

  pop();
}

function drawMenuPanel() {
  const items = ["WORK", "ILLUSTRATIONS", "BRANDING", "LET'S TALK"];

  const h = min(windowHeight, height);

  textFont(font);
  textAlign(LEFT, TOP);
  textSize(68);
  fill(0);

  const x = 120;
  let y = h * 0.55;
  const lineH = 70;

  for (let item of items) {
    text(item, x, y);
    y += lineH;
  }
}

function mousePressed() {
  // HASTASHILP image
  if (
    mouseX >= hsImgArea.x &&
    mouseX <= hsImgArea.x + hsImgArea.w &&
    mouseY >= hsImgArea.y &&
    mouseY <= hsImgArea.y + hsImgArea.h
  ) {
    window.open(projectLink, "_blank");
  }

  // HASTASHILP title
  if (
    mouseX >= hsTitleArea.x &&
    mouseX <= hsTitleArea.x + hsTitleArea.w &&
    mouseY >= hsTitleArea.y &&
    mouseY <= hsTitleArea.y + hsTitleArea.h
  ) {
    window.open(projectLink, "_blank");
  }

  // HOSHRUBA image
  if (
    mouseX >= hoshImgArea.x &&
    mouseX <= hoshImgArea.x + hoshImgArea.w &&
    mouseY >= hoshImgArea.y &&
    mouseY <= hoshImgArea.y + hoshImgArea.h
  ) {
    window.open(hoshLink, "_blank");
  }

  // HOSHRUBA title
  if (
    mouseX >= hoshTitleArea.x &&
    mouseX <= hoshTitleArea.x + hoshTitleArea.w &&
    mouseY >= hoshTitleArea.y &&
    mouseY <= hoshTitleArea.y + hoshTitleArea.h
  ) {
    window.open(hoshLink, "_blank");
  }
}
