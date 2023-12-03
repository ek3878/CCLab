let img = [];
let cars = [];
let x, y, x1, y1,x3,y3;

let start = true;
let flood = false;
let keyPress = false;
let w, h, waterh, f; //wave
let txt; //position for text
let textshow = true;
let textshow2 = false;
let textshow3 = false;
let b = 0; //brightness of black
let floodsound;
let blackout;
let bye;
let happy;
let byecount=1;
let bcount =1;

function preload() {
  //cars
  img[0] = loadImage("maqueen.png");
  img[1] = loadImage("sheriff.png");
  img[2] = loadImage("sally.png");

  //water
  water = loadImage("water.jpg");
  wave = loadImage("waves.png");
  waterfall = loadImage("waterfall.jpg");

  floodsound = loadSound("flood.mp3");
  blackout = loadSound("blackout.mp3");
  bye = loadSound("bye.mp3");
  happy = loadSound("waterfall.mp3")
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.parent("canvasContainer4");
//   createCanvas(1000, 500);
  counter = getItem("counter");
  //carcoordinate
  x = -200;
  y = height - 140;
  //user2
  x1 = -200;
  y1 = height - 140;

  //carsarray
  for (let i = 0; i < img.length; i++) {
    cars[i] = new Car(x, y, i);
  }

  h = height; //wave height
  w = 0; //wave width
  waterh = 0; //water cave height
  f = 0; //waterfall x
}

function draw() {
  background(220);
  image(waterfall, f, 0, 2000, 500);
  image(water, 0, waterh, 1000, 500);
  

  //car
  user = new Car(x, y, counter);
  user.display();

  startCar();
  subTitle(height / 2 - 50);
  subTitle2(height / 2 - 50);

  if (keyIsPressed) {
    start = false;
    flood = true;
    textshow = false;
    textshow2 = true;

    if (keyCode == RIGHT_ARROW) {
      x += 8;
      if (x > width - 180) {
        x = width - 180;
      }
    }
    if (keyCode == LEFT_ARROW) {
      x -= 8;
      if (x < 0) {
        x = 0;
      }
    }
  }
  user.display();
  startFlood();

  if (mouseIsPressed) {
    start = false;
    flood = true;
    y -= 2;
    if (y < height / 2) {
      textshow2 = false;
    }
  }

  if (h < -height - 150) {
    flood = false;
    floodsound.stop()
    if(happy.isPlaying()==false){
        happy.play()
      }
    textshow2 = false;
    if (x1 < width / 2 - 80) {
      textshow3 = true;
      subTitle3(height / 2 - 50);
    } else {
      textshow3 = false;
    }

    fill(92, 169, 4);
    ellipse(x1 + 90, y1 + 80, 230, 50);

    user2 = new Car(x1, y1, counter);
    user2.display();
    if (x1 < width / 2 - 80) {
      x1 += 2;
    }
    keyPress = true;
    moveLeave();
  }

  if (x1 > width) {
    fill(0, b);
    rect(0, 0, width, height);
    b += 1;
  }

  if (b > 255) {
    happy.stop()
    if (bcount < 2) {
        if (blackout.isPlaying() == false) {
          blackout.play();
          bcount+=1
        }
      }
    textSize(25);
    fill(255);
    textAlign(CENTER);
    text("a good peaceful ending of our journey...", width / 2, height / 2);
  }

  if (b > 800) {
    if (byecount < 2) {
        if (bye.isPlaying() == false) {
          bye.play();
          byecount+=1
        }
      }
    fill(0);
    rect(0, 0, width, height);
    fill(255);
    ellipse(width / 2 + 130, height / 2 - 100, 100, 90);
    textSize(25);
    fill(0);
    text("bye!", width / 2 + 128, height / 2 - 92);
    x3 = width / 2 - 80;
    y3 = height / 2 + 10;
    user3 = new Car(x3, y3, counter);
    user3.display();
  }
}

function subTitle(txt) {
  if (textshow == true) {
    fill(255);
    ellipse(width / 2, txt + 13, 450, 130);
    textSize(25);
    fill(0);
    textAlign(CENTER);
    text("phew~ where am I again now?", width / 2, txt);
    text("Another cave? Oh my lord,", width / 2, txt + 25);
    text("let's find a way out...", width / 2, txt + 50);
  }
}

function subTitle2(txt) {
  if (textshow2 == true) {
    fill(255);
    ellipse(width / 2, txt + 20, 450, 130);
    textSize(25);
    fill(0);
    textAlign(CENTER);
    text("WHATTT?!", width / 2, txt);
    text("Why is there water coming!?", width / 2, txt + 25);
    text("omg help me swimmmm....", width / 2, txt + 50);
  }
}

function subTitle3(txt) {
  if (textshow3 == true) {
    fill(255);
    ellipse(width / 2, txt + 15, 500, 130);
    textSize(25);
    fill(0);
    textAlign(CENTER);
    text("? And we are suddenly out now.", width / 2, txt);
    text("Sun is setting and is time to go home!", width / 2, txt + 35);
  }
}

function moveLeave() {
  if (keyPress == true) {
    if (keyIsPressed) {
      if (keyCode == RIGHT_ARROW) {
        f -= 3;
        if (f < -1000) {
          x1 += 2;
          f = -1000;
        }
      }
      if (keyCode == LEFT_ARROW) {
        f += 3;
        if (f > 0) {
          f = 0;
        }
        if (x1 > width / 2 - 80 && f == -1000) {
          f += 3;
          x1 -= 2;
        }
      }
    }
  }
}

function startCar() {
  if (start == true) {
    if (x < 80) {
      x += 3;
    }
  }
}

function startFlood() {
  if (flood == true) {
    if(floodsound.isPlaying() == false){
      floodsound.play();
    }
    image(wave, w, h, 4000, 600);
    if (h > -height - 200) {
      h -= 1;
    }
    if (h < 0) {
      waterh -= 1;
    }
    if (h > 2 * (height / 3) && h < height) {
      w -= 1;
      x -= 1;
    }
    if (h > height / 3 && h < 2 * (height / 3)) {
      w += 1;
      x += 1;
    }
    if (h > 0 && h < height / 3) {
      w -= 1;
      x -= 1;
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
