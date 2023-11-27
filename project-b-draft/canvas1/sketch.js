// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 20; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas=createCanvas(500, 500);
  canvas.parent("myContainer")
  // let canvas = createCanvas(600, 600);
  // canvas.parent("canvasWrapper");
  let turnx = random(100,500)
  let turny = random(100,500)
  console.log(turnx, turny)

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height), turnx, turny);
  }
}

function draw() {
  background(20,45);
  
  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY, turnx, turny) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 20;
    this.angle = 0;
    this.isx=startX;
    this.turnx=turnx
    this.turny=turny
    
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    
    this.angle = this.angle + 0.01; 
    
  }
  display() {
    // particle's appearance
    push();
    //rotate within x and y
    translate(this.turnx, this.turny);
    rotate(this.angle);
    for(let i=0; i < 6; i++){
      //rotate of the circles
      push();
      rotate(this.x);
      // d bet circle and mid point
      let R = this.isx;
      let a = R*sin(PI/0.3);
      let b = R*cos(PI/0.3);
      noStroke()
      circle(a, b, this.dia);
      pop();
    }
    pop();
  }
}

