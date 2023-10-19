let number = 20;
let x =[];
let y = [];
let w = [];
let h = [];
let sp = [];
let b = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
  
  for (let i = 0; i < number; i++) {
    x[i] = random(width*0.4, width*0.6);
    y[i] = height;
    w[i] = random(-300, 350);
    h[i] = random(50, 250);
    sp[i] = random(10, 500);
    b[i] = random(40,80);
  }

}

function draw() {
  bg = map(mouseX, 10, width, 140, 0);
  background(bg);

  angle = map(
    mouseX,
    10,
    width,
    2 * PI - PI / 4 - 0.5,
    2 * PI + PI + PI / 4 + 0.5
  );
  angle = constrain(angle, 2 * PI - PI / 4 - 0.5, 2 * PI + PI + PI / 4 + 0.5);
  t=(cos(angle-7*PI/4+1));
  bs=(cos(angle-7*PI/4+1.9))
  ws=(sin(angle-7*PI/4))
  
  push();
  translate(width / 2, height);
  rotate(angle);
  stroke(15, 100, 100)
  fill(15, 100, 100);
  circle(0, -330, 60);
  stroke(255)
  fill(255);
  arc(0, 330, 60, 60, PI + QUARTER_PI, HALF_PI);
  pop();
  
  for (let i = 0; i < number; i++) {
    plant(x[i], y[i], w[i], h[i], sp[i], b[i]);
  }

}
function plant(x, y, w, h, sp, b) {
  let m=1
  let a=1
  if (mouseIsPressed){
    m*=10
  }

  let speedPlant = sp*sin(frameCount*(0.0001*m)*sp);
  stroke(23, 100-(bs+PI/6)*100, b-bs*30);
  fill(23, 100-(bs+PI/6)*100, b-bs*30); 
  curve(x-w, y, x, y+100, x, (height-h)+t*30, x-w*(ws*3)*a, speedPlant);
  
}

