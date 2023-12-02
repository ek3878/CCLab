// //let mcqueen, sheriff, sally;
// let x, y;
// let img = [];
// let cars = [];
// let counter = 0;
// let choose = true;

// function preload() {
//   img[0] = loadImage("maqueen.png");
//   img[1] = loadImage("sheriff.png");
//   img[2] = loadImage("sally.png");
//   bg = loadImage("bg.jpeg");
// }

// function setup() {
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent("canvasContainer");

//   // createCanvas(600, 400);

//   x = windowWidth / 2 - 240;
//   y = windowHeight / 2 + 30;

//   for (let i = 0; i < img.length; i++) {
//     cars[i] = new Car(x, y, i);
//   }
// }

// function draw() {
//   //background(0);
//   image(bg, 0, 0, windowWidth, windowHeight);
//   //button
//   fill(255);
//   rect(windowWidth - 240, windowHeight/2 - 100, 150, 200);
//   rect(80, windowHeight/2 - 100, 150, 200);

//   stage1();  

//   if (keyCode == ENTER) {
//     choose = false;
//     image(bg, 0, 0, windowWidth, windowHeight);
//     stage2();
//     storeItem("counter", counter);
//   }
//   //console.log(counter);
// }

// function stage1() {
//   if (counter >= img.length) {
//     counter = 0;
//   }
//   if (counter < 0) {
//     counter = img.length - 1;
//   }

//   cars[counter].display();
// }

// function stage2() {
//   cars[counter].display();
//   cars[counter].move();
// }

// function mousePressed() {
//   if (
//     mouseX > windowWidth - 240 &&
//     mouseX < windowWidth - 90 &&
//     mouseY > windowHeight/2 - 100 &&
//     mouseY < windowHeight/2 + 100

//   ) {
//     counter = counter + 1;
//   }
//   if (mouseX > 80 && mouseX < 230 && mouseY > windowHeight/2 - 100 && mouseY < windowHeight/2 + 100) {
//     counter = counter - 1;
//   }
// }

// class Car {
//   constructor(x, y, index) {
//     this.x = x;
//     this.y = y;
//     this.img = img[index];
//   }
//   display() {
//     image(this.img, this.x, this.y, windowWidth*0.3, windowHeight*0.25);
//     //image(this.img, this.x, this.y, 170, 100);
//   }
//   move() {
//     if (this.x < width) {
//       this.x += 5;
//     }
//   }
// }

//let mcqueen, sheriff, sally;
let x, y;
let img = [];
let cars = [];
let counter = 0;
let choose = true;

function preload() {
  img[0] = loadImage("maqueen.png");
  img[1] = loadImage("sheriff.png");
  img[2] = loadImage("sally.png");
  bg = loadImage("bg.jpeg");
}

function setup() {
  let canvas = createCanvas(1000, 500);
  canvas.parent("canvasContainer");
  // createCanvas(600, 400);

  x = width / 2 - 88;
  y = height / 2 + 30;

  for (let i = 0; i < img.length; i++) {
    cars[i] = new Car(x, y, i);
  }
}

function draw() {
  image(bg, 0, 0, width, height);
  //button
  fill(255);
  rect(width*0.88, height/2 + 20, 50, 50);
  rect(width*0.065, height/2 + 20, 50, 50);

  stage1();

  if (keyCode == ENTER) {
    choose = false;
    image(bg, 0, 0, width, height);
    stage2();
    storeItem("counter", counter);
  }
  //console.log(counter);
}

function stage1() {
  if (counter >= img.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = img.length - 1;
  }

  cars[counter].display();
}

function stage2() {
  cars[counter].display();
  cars[counter].move();
}

function mousePressed() {
  if (choose == true) {
    if (
      mouseX > width*0.88 &&
      mouseX < width*0.88+50 &&
      mouseY > height/2 + 20 &&
      mouseY < height/2 + 70
    ) {
      counter = counter + 1;
    }
    if (mouseX > width*0.065 && mouseX < width*0.065+50 && mouseY > height/2 + 20 && mouseY < height/2 + 70) {
      counter = counter - 1;
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