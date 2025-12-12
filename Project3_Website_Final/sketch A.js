let menuActive = false;   // is the menu open?
let animRadius = 0;       // current spotlight animation value
let targetRadius = 0;     // target animation value
let maxRadius;            // big enough for full animation

let font;
let fontB;
let HSimg;
let Hoshimg;
let bgimg;

// words to rotate through inside the canvas
const roles = ["Visual Explorer", "Storyteller", "UX Designer"];

// data for hoverable words
let skillWords = [];
const SKILL_TEXT_SIZE = 96;

// project links & click areas
const projectLink = "https://www.aashi-jain.com/hastashilp";
const hoshLink = "https://www.aashi-jain.com/hoshruba-angry-god-s-lament";

let hsImgArea = { x: 180, y: 1150, w: 700, h: 500 };
let hsTitleArea = {}; // set dynamically

let hoshImgArea = { x: 670, y: 1550, w: 700, h: 800 };
let hoshTitleArea = {}; // set dynamically

function preload() {
  font = loadFont("Rosean.ttf");
  fontB = loadFont("Coolvetica Rg.otf");
  HSimg = loadImage("HSimg.png");
  Hoshimg = loadImage("Hoshimg.png");
  bgimg = loadImage("WB.png");
}

function setup() {
  // Create canvas and attach it inside .canvas-frame
  const cnv = createCanvas(1500, 2500);
  const frame = document.querySelector(".canvas-frame");
  if (frame) {
    cnv.parent(frame);
  }

  // Maximum radius: corner to opposite corner
  maxRadius = dist(0, 0, width, height);

  // Hook up HTML menu button to this sketch
  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) {
    menuBtn.addEventListener("click", toggleMenu);
  }

  // prepare hoverable skill words
  setupSkillWords();
}

function setupSkillWords() {
  textFont(font);
  textSize(SKILL_TEXT_SIZE);
  textAlign(LEFT, TOP);

  const lines = [
    { text: "TYPOGRAPHY * BRANDING * ILLUSTRATION", y: 900 },
    { text: "COLLABORATION * PACKAGING * COLOURS", y: 1000 }
  ];

  lines.forEach(({ text, y }) => {
    let x = 15; // starting x for the line
    const tokens = text.split(" ");

    for (const token of tokens) {
      const drawText = token + " ";        // include trailing space visually
      const w = textWidth(drawText);
      const isInteractive = !["*", ""].includes(token);

      skillWords.push({
        label: drawText,
        x,
        y,
        w,
        h: SKILL_TEXT_SIZE * 1.1, // approx height for hover box
        interactive: isInteractive
      });

      x += w;
    }
  });
}

function draw() {
  background(15);

  // --------- BACKGROUND IMAGE (TOP) ----------
  image(bgimg, 0, 0, 1500, 890);

  // --------- ROTATING TITLE ----------
  const idx = floor((millis() / 1200) % roles.length); // rotation speed
  const currentRole = roles[idx];

  fill(230);
  noStroke();
  textFont(font);
  textAlign(LEFT, TOP);
  textSize(96);
  text(currentRole, 80, 140);

  // other text 
  textSize(30);
  fill(248, 244, 236);
  text("Hello! I am Aashi, I am a", 80, 100);
  
  textSize(20);
  textFont(fontB);
  text("Scroll down to view projects", 80, 280);

  // --------- HOVERABLE SKILL WORDS ----------
  drawSkillWords();

  // --------- PROJECT 1: HASTASHILP ----------
  image(HSimg, hsImgArea.x, hsImgArea.y, hsImgArea.w, hsImgArea.h);

  // HASTASHILP TITLE WITH HOVER + LINK HITBOX
  textFont(font);
  textSize(72);
  let titleX = 850;
  let titleY = 1250;
  let titleText = "HASTASHILP";

  let titleW = textWidth(titleText);
  let titleH = 72 * 1.1;

  // update hitbox for title (used for hover + click)
  hsTitleArea = { x: titleX, y: titleY, w: titleW, h: titleH };

  let overTitle =
    mouseX >= titleX &&
    mouseX <= titleX + titleW &&
    mouseY >= titleY &&
    mouseY <= titleY + titleH;

  if (overTitle) {
    fill(234, 255, 151); // hover color
  } else {
    fill(248, 244, 236); // default title color
  }

  text(titleText, titleX, titleY);

  // subtitle + description
  textSize(30);
  textFont(fontB);
  fill(248, 244, 236);
  text("Handicrafts of India (Card Game Design)", 850, 1310);

  textSize(15);
  textFont(fontB);
  text(
    "The project focuses on raising awareness about the many traditional crafts that surround us. According to Handmade in India (NID, 2005), India is home to nearly 516 distinct handicrafts, yet most of us can barely name even twenty.\n\nThis game is designed for young adults and above, using learning through play to spark curiosity and build cultural understanding. By engaging players, the game encourages a deeper appreciation of the diverse crafts of India and helps reconnect people with their own cultural heritage.",
    850,
    1360,
    500,
    400
  );

  // --------- PROJECT 2: ANGRY GOD'S DILEMMA ----------
  image(Hoshimg, hoshImgArea.x, hoshImgArea.y, hoshImgArea.w, hoshImgArea.h);

  // Title with hover + hitbox
  fill(248, 244, 236);
  textSize(72);
  textFont(font);

  let hoshTitleX = 180;
  let hoshTitleY = 1800;
  let hoshTitleText = "Angry God's Dilemma";

  let hoshTitleW = textWidth(hoshTitleText);
  let hoshTitleH = 72 * 1.1;

  // update hitbox for second title
  hoshTitleArea = {
    x: hoshTitleX,
    y: hoshTitleY,
    w: hoshTitleW,
    h: hoshTitleH
  };

  let overHoshTitle =
    mouseX >= hoshTitleX &&
    mouseX <= hoshTitleX + hoshTitleW &&
    mouseY >= hoshTitleY &&
    mouseY <= hoshTitleY + hoshTitleH;

  if (overHoshTitle) {
    fill(234, 255, 151); // hover color
  } else {
    fill(248, 244, 236); // default color
  }

  text(hoshTitleText, hoshTitleX, hoshTitleY);

  textSize(30);
  textFont(fontB);
  fill(248, 244, 236);
  text("Tilism e- Hoshruba", 180, 1860);

  textSize(15);
  text(
    "This project adapts magical excerpts from Tilism-e-Hoshruba to explore how its fictional world reflects issues in our real one. Inspired by Amar Ayyar’s Zambil trickery where he disguises himself to deceive others—the work draws parallels to how people today often hide their true identities to appear socially acceptable.\n\nThrough this reinterpretation, the project raises questions about gender stereotypes, individuality, self-view, and self-acceptance. By using the story’s aesthetic, magic, and narrative twists, it aims to creatively highlight contemporary social crises and encourage readers to reflect on their own identities.",
    180,
    1910,
    500,
    400
  );
  
  // --------- SPOTLIGHT ANIMATION ----------
  animRadius = lerp(animRadius, targetRadius, 0.15);

  if (animRadius > 1) {
    drawSpotlightOverlay(animRadius);

    if (animRadius > 40) {
      drawMenuPanel();
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

    if (hovering) {
      // hover color: RGB(234, 255, 151)
      fill(234, 255, 151);
    } else {
      fill(100); // original darker color
    }

    text(word.label, word.x, word.y);
  }
}

// Toggle menu from HTML button
function toggleMenu() {
  menuActive = !menuActive;
  targetRadius = menuActive ? maxRadius : 0;

  // update button visual state (hamburger menu ↔ X)
  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) {
    menuBtn.classList.toggle("open", menuActive);
  }
}

// Spotlight beam – diagonal strip coming from TOP-RIGHT
function drawSpotlightOverlay(radius) {
  push();
  noStroke();

  const progress = constrain(radius / maxRadius, 0, 1);
  const h = min(windowHeight, height);   // only cover the first “screen” height

  // 1) Dim the top screen area
  fill(0, 180);
  rect(0, 0, width, h);

  // 2) Final beam shape (parallelogram-ish strip)
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

// Menu text at BOTTOM-LEFT, left aligned, inside the beam
function drawMenuPanel() {
  const items = ["WORK", "ILLUSTRATIONS", "BRANDING", "LET'S TALK"];

  const h = min(windowHeight, height);

  textFont(font);
  textAlign(LEFT, TOP);
  textSize(68);
  fill(0); // dark text on light beam

  const x = 120;
  let y = h * 0.55;
  const lineH = 70;

  for (let item of items) {
    text(item, x, y);
    y += lineH;
  }
}

// Handle clicks on images and titles
function mousePressed() {
  // --- Click on HASTASHILP image ---
  if (
    mouseX >= hsImgArea.x &&
    mouseX <= hsImgArea.x + hsImgArea.w &&
    mouseY >= hsImgArea.y &&
    mouseY <= hsImgArea.y + hsImgArea.h
  ) {
    window.open(projectLink, "_blank");
  }

  // --- Click on HASTASHILP title ---
  if (
    mouseX >= hsTitleArea.x &&
    mouseX <= hsTitleArea.x + hsTitleArea.w &&
    mouseY >= hsTitleArea.y &&
    mouseY <= hsTitleArea.y + hsTitleArea.h
  ) {
    window.open(projectLink, "_blank");
  }

  // --- Click on HOSHRUBA image ---
  if (
    mouseX >= hoshImgArea.x &&
    mouseX <= hoshImgArea.x + hoshImgArea.w &&
    mouseY >= hoshImgArea.y &&
    mouseY <= hoshImgArea.y + hoshImgArea.h
  ) {
    window.open(hoshLink, "_blank");
  }

  // --- Click on "Angry God's Dilemma" title ---
  if (
    mouseX >= hoshTitleArea.x &&
    mouseX <= hoshTitleArea.x + hoshTitleArea.w &&
    mouseY >= hoshTitleArea.y &&
    mouseY <= hoshTitleArea.y + hoshTitleArea.h
  ) {
    window.open(hoshLink, "_blank");
  }
}
