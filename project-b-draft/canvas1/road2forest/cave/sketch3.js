let img = [];
let cars = [];
let x, y; // for user car
let x1 = []; //random falling rocks
let n = 0; //n for the steppingblocks
let h = 0; //h for the ending cover
let brightness = 0; //the ending
let c = 255; //color for the ending text
let txt; //position for text
let textshow = true;
let click = false;
let stones;
let rockfall;
let sound = 1;

function preload() {
  //cars
  img[0] = loadImage("maqueen.png");
  img[1] = loadImage("sheriff.png");
  img[2] = loadImage("sally.png");
  //cave
  cave = loadImage("cave.jpg");
  rock = loadImage("rock.png");

  stones = loadSound("stones.mp3")
  rockfall = loadSound("rockfall.mp3")
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.parent("canvasContainer3");
//   createCanvas(1000, 500);
  counter = getItem("counter");
  //carcoordinate
  x = 50;
  y = -500;
  //carsarray
  for (let i = 0; i < img.length; i++) {
    cars[i] = new Car(x, y, i);
  }

  y1 = 10; //height for falling rocks

  //random rocks on x axis
  for (let i = 0; i < 100; i++) {
    x1[i] = random(width);
  }
}

function draw() {
  background(220);
  image(cave, 0, 0, width, height);

  //launchwhenclick
  stepStones(n);

  //car
  user = new Car(x, y, counter);
  user.display();
  //starting position
  if (y < height - 130) {
    y += 20;
  }

  //text
  if (y > height / 2) {
    subTitle(height / 2 - 70);
    click = true
  }

  if (n > 0) {
    textshow = false;
  }

  //only move when all blocks are initiated
  if (n >= 6) {
    fill(255);
    ellipse(width / 2 + 167, height / 2 - 8, 400, 85);
    textSize(25);
    fill(0);
    text("We are ready to go! Hurry up!", width / 2, height / 2);
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        x += 20;
      }
      if (keyCode == LEFT_ARROW) {
        if (x < 0) {
          x += 0;
        } else {
          x -= 20;
        }
      }
    }
  }

  //when car leaves rocks fall
  if (x > width - 100) {
    click = false
    if (sound<2){
      if(rockfall.isPlaying()==false){
      rockfall.play()
    }
      sound+=1
    }
    for (let i = 0; i < 6; i++) {
      rocks = new Rock(x1, y1, 50);
      rocks.display();
      rocks.fall();
    }
    //blackout
    noStroke();
    fill(0, brightness);
    rect(0, 0, width, h);
    brightness += 2;
    h += 6;
    if (brightness > 255) {
      textSize(25);
      fill(c);
      text("omg...I almost rest in peace there", width / 2 - 180, height / 2);
    }
    if (h > 1600) {
      c -= 5;
    }
  }
}

function mousePressed() {
  //works on ground area
  if (click == true) {
    stones.play()
    if (mouseX > width * 0.33 && mouseY > height - 60 && mouseY<height && mouseX<width) {
      if (n < 7) {
        n += 1;
      }
    }
  }
}

function subTitle(txt) {
  if (textshow == true) {
    fill(255);
    ellipse(width / 2 + 190, txt + 18, 500, 150);
    textSize(25);
    fill(0);
    text("Ouch, where am I now?", width / 2, txt);
    text("A cave? I can't drive here!", width / 2, txt + 25);
    text("Please help me to clear those rock!", width / 2, txt + 50);
    textSize(13);
    fill(255);
    text("click here!", width / 2 + 50, height - 40);
  }
}

function stepStones(n) {
  for (let i = 0; i < n; i++) {
    strokeWeight(1);
    stroke(180);
    fill(200);
    rect(width * 0.25 + 140 * i, height - 70, 140, 50);
  }
}

class Rock {
  constructor(x, y, sp) {
    this.x = x;
    this.y = y;
    this.sp = sp;
  }
  display() {
    for (let k = 0; k < 6; k++) {
      for (let i = 0; i < 90; i++) {
        image(rock, this.x[i], this.y - 100 * k, 70, 100);
      }
    }
  }
  fall() {
    if (y1 < height - this.sp) {
      y1 += 2;
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
