
// ROTATING SOLAR SYSTEM
// Math-Based Animation using p5.js
//Verdeprado,Sarmain A.

let angle = 0;
let moonAngle = 0;

let speed = 0.02;
let paused = false;

let orbitRadius = 150;
let moonRadius = 30;

function setup() {

  createCanvas(600, 500);

  angleMode(RADIANS);
}

function draw() {
 
  background(10, 10, 35);

  fill(255);
  noStroke();

  for (let i = 0; i < 40; i++) {
    let x = (i * 83) % width;
    let y = (i * 47) % height;
    circle(x, y, 2);
  }

  let centerX = width / 2;
  let centerY = height / 2;

  noStroke();
  fill(255, 190, 20);
  circle(centerX, centerY, 65);


  noFill();
  stroke(120);
  strokeWeight(1);
  circle(centerX, centerY, orbitRadius * 2);

  let earthX = centerX + orbitRadius * cos(angle);
  let earthY = centerY + orbitRadius * sin(angle);

 
  noStroke();
  fill(40, 130, 255);
  circle(earthX, earthY, 25);

  let moonX = earthX + moonRadius * cos(moonAngle);
  let moonY = earthY + moonRadius * sin(moonAngle);

 
  fill(220);
  circle(moonX, moonY, 10);

  if (!paused) {
    angle += speed;
    moonAngle += speed * 3;
  }

  fill(255);
  textSize(18);
  textAlign(CENTER);
  text("ROTATING SOLAR SYSTEM", width / 2, 30);

  textSize(15);
  text("SPACE = Pause / Resume", width / 2, 455);
  text("UP / DOWN = Change Speed", width / 2, 478);

  
  textAlign(LEFT);
  text("Speed: " + speed.toFixed(2), 15, 25);
}


function keyPressed() {

  if (key === ' ') {
    paused = !paused;
  }

  if (keyCode === UP_ARROW) {
    speed += 0.01;
  }

  if (keyCode === DOWN_ARROW) {
    speed = max(0.01, speed - 0.01);
  }
}
