// sketch.js — simple interactive bars from Google Sheets CSV

let data;
let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSTr880GEcpJ_BBY9TPLqELsg4EuigXpGdPJzfv8CxQvymfP6_eoH_JYFSxhC8TUnAds1hFgNPT6FRt/pub?gid=0&single=true&output=csv';

let metrics = ["Calories", "Sugar", "Carbs", "Sodium", "Protein"];
let currentMetric = 0; // start with Calories

// Fixed left padding so names don't get cropped (bump up if needed)
let leftPad = 160;

function preload() {
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  createCanvas(600, 400);
  textFont("sans-serif");
}

function draw() {
  background(20);
  if (!data) return;

  // Which metric are we showing?
  const metric = metrics[currentMetric];

  // Columns from the CSV
  const names = data.getColumn("Food") || [];
  const values = (data.getColumn(metric) || []).map(v => float(v) || 0);
  const numRows = data.getRowCount();
  const maxVal = max(values) || 1;

  // Title
  fill(255);
  textSize(18);
  textAlign(CENTER, BASELINE);
  text(metric, width / 2, 45);

  // Layout
  const topPad = 60, bottomPad = 28;
  const rowH = (height - topPad - bottomPad) / max(1, numRows);
  const barH = min(20, rowH * 0.6);
  const barMaxW = width - leftPad - 24;

  let hoverIndex = -1;

  // Draw bars
  for (let i = 0; i < numRows; i++) {
    const y = topPad + i * rowH + (rowH - barH) / 2;
    const w = map(values[i], 0, maxVal, 0, barMaxW);

    // Hover highlight
    if (mouseX > leftPad && mouseX < leftPad + w && mouseY > y && mouseY < y + barH) {
      hoverIndex = i;
      fill(120, 180, 255);
    } else {
      fill(100, 120, 255);
    }

    // Purple Bar
    noStroke();
    rect(leftPad, y, w, barH, 4);

    // Food name (right-aligned before the bar)
    fill(240);
    textSize(14);
    textAlign(RIGHT, CENTER);
    text(names[i] || "", leftPad - 10, y + barH / 2);

    // Value at the end of the bar
    textAlign(LEFT, CENTER);
    textSize(12);
    fill(210);
    text(values[i], leftPad + w + 8, y + barH / 2);
  }

  // Hover feature 
  if (hoverIndex >= 0) { ////If the mouse isn’t over any bar, hoverIndex stays -1. If it’s over the 2nd bar, hoverIndex = 1,
    const y = topPad + hoverIndex * rowH + (rowH - barH) / 2; 
    const w = map(values[hoverIndex], 0, maxVal, 0, barMaxW);
    const tip = `${names[hoverIndex]} • ${values[hoverIndex]} ${metric}`; //The food name - names[hoverIndex]; The value - values[hoverIndex]; The unit type (metric) - the nutrient currently displayed, e.g. "Carbs"
    // tempelate literal (the backtick `...`) to combine them neatly.
    // ## Inside that string, you can insert variables or expressions using
    // ## ${ ... } — this is called interpolation.

    const pad = 8; //padding inside the boz
    textSize(12); 
    const tw = textWidth(tip) + pad * 2; //total width(tw) is text width + 2px padding from left and rigth 
    const th = 22;

    //small on hover tooltip design
    let tx = leftPad + w + 14;
    let ty = y - th - 6;
    if (tx + tw > width - 8) tx = width - tw - 8;   // keep on canvas
    if (ty < 8) ty = y + barH + 6;

    noStroke();
    fill(30, 32, 48, 235);
    rect(tx, ty, tw, th, 6);
    stroke(65, 70, 105);
    noFill();
    rect(tx, ty, tw, th, 6);

    noStroke();
    fill(240);
    textAlign(LEFT, CENTER);
    text(tip, tx + pad, ty + th / 2); //..
  }

  // Instruction text
  noStroke();
  fill(200, 180, 0);
  textSize(12);
  textAlign(CENTER);
  text("Click to switch between: Calories, Sugar, Carbs, Sodium, Protein", width / 2, height - 18);

  // dividing grey line above instructions 
  stroke(60);
  line(80, height - bottomPad - 8, width - 80, height - bottomPad - 8);
}

function mousePressed() {
  currentMetric++;
  if (currentMetric >= metrics.length) {
    currentMetric = 0;  // go back to the first metric
  }
}
