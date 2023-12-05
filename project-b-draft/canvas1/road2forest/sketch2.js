let img = [];
let cars = [];

let bgx = 0; //the long conncected pictures
let transit = 0; //the white part bet
let x, y, w, h; // user's
let move = false; //to start the trap when move
let endsize = 1; //the size for AHHH
let wind;

function preload() {
  //cars
  img[0] = loadImage("maqueen.png");
  img[1] = loadImage("sheriff.png");
  img[2] = loadImage("sally.png");
  //scene2
  road = loadImage("road.png");
  forest = loadImage("trees.jpeg");
  trap = loadImage("heap.png");

  wind = loadSound("wind.mp3")
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.parent("canvasContainer2");
  //createCanvas(1000, 500);
  counter = getItem("counter");
  console.log(counter);
  // x = width / 2 - 85;
  x = -200
  y = height / 2;

  wind.play()

  //carsarray
  for (let i = 0; i < img.length; i++) {
    cars[i] = new Car(x, y, i);
  }
}

function draw() {
  background(255, 50);
  image(road, bgx, 0, 1000, 500);
  image(road, 800 + bgx, 0, 800, 500);
  image(forest, 1685 + bgx, 0, 1010, 500);
  image(trap, 2250 + bgx, height - 80, 220, 50);

  user = new Car(x, y, counter);
  user.display();

  if(x<width/2 - 85){
    x+=3
  }

  if (keyCode == ENTER) {
    if (bgx < -300) {
      noStroke();
      fill(255, transit);
      rect(bgx, 0, width * 1.7, height);
      transit += 5;
      if (transit > 250) {
        x = 50;
        y = height / 2 + 120;
      }
    }

    if (bgx > -1700) {
      bgx -= 2;

    }
  }
  //console.log(bgx);

  if (bgx < -500 && bgx > -650) {
    textSize(25);
    fill(0);
    text("Where will we be...", width / 2, height / 2);
  }

  if (bgx < -1600) {
    fill(255);
    ellipse(width / 2 + 40, height / 2 - 90, 700, 90);
    textSize(25);
    fill(0);
    text(
      "We drove to a random forest! Let's go more and see!",
      width / 2 - 250,
      height / 2 - 80
    );
    move = true;
    startTrap();
  }
  if (endsize > 50) {
    fill(255);
    ellipse(width / 2, height / 2, 1000, 1000);
    textSize(25);
    fill(0);
    text(
      "oh no...",
      width / 2 - 50,
      height / 2
    );
  }
}

function startTrap() {
  if (move == true) {
    if (x > 550) {
      y = -100;
      image(forest, -15, 0, 1010, 500);
      image(trap, 550, height - 80, 220, 50);
      fill(0);
      rect(550, height - 50, 220, 10);

      fill(255);
      ellipse(width / 2 + 238, height / 2 + 43, 100 * endsize, 50 * endsize);
      textSize(25);
      fill(0);
      text("AHHH!", width / 2 + 200, height / 2 + 50);
      endsize += 0.2;

    }

    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        x += 5;
      }
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
    image(this.img, this.x, this.y, 170, 100);
  }
  move() {
    if (this.x < width) {
      this.x += 2;
    }
  }
}
