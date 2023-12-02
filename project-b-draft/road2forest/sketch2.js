let bgx = 0;
let transit = 0;
let img = [];
let cars = [];
let x, y, w, h;

function preload() {
  //cars
  img[0] = loadImage("maqueen.png");
  img[1] = loadImage("sheriff.png");
  img[2] = loadImage("sally.png");
  //scene2
  road = loadImage("road.png");
  forest = loadImage("trees.jpeg");
  trap = loadImage("heap.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer2");
//   createCanvas(600, 400);
  counter = getItem("counter");
  x = -100;
  y = windowHeight/2;


  //carsarray
  for (let i = 0; i < img.length; i++) {
    cars[i] = new Car(x, y, i);
  }
}

function draw() {
  background(255, 50);
  image(road, bgx, 0, windowWidth, windowHeight);
  image(road, windowWidth + bgx, 0, windowWidth, windowHeight);
  image(forest, 2*windowWidth + bgx, 0, windowWidth, windowHeight);
  image(trap, 3*windowWidth+100 + bgx, windowHeight-500, 300, 100);

  user = new Car(x, y, counter);
  user.display();

  if(x<windowWidth / 2 - 400){
    x+=2
  }
  

  if (keyCode == ENTER) {
    if (bgx < -windowWidth) {
      noStroke();
      fill(255, transit);
      rect(bgx, 0, windowWidth * 2, windowHeight);
      transit += 5;
      if (transit > 250) {
        x = 100;
        y = windowHeight/2;
      }
    }

    if (bgx > -2*windowWidth) {
      bgx -= 100;
    }
  }

  startTrap();
}

function startTrap() {
  if (x > 280) {
    y = -100;
    fill(0);
    rect(300, 360, 170, 10);
    // w=0
    // h=0
  }

  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x += 5;
    }
  }
}

class Car {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.img = img[index];
  }
  display() {
    image(this.img, this.x, this.y, windowWidth*0.3, windowHeight*0.3);
  }
  move() {
    if (this.x < width) {
      this.x += 2;
    }
  }
}
