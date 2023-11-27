let mcqueen, sheriff, sally;
let x, y;
let button="green";

function preload(){
  mcqueen=loadImage("maqueen.png")
  sheriff=loadImage("sheriff.png")
  sally=loadImage("sally.png")
}


function setup() {
  // let canvas=createCanvas(500, 500);
  // canvas.parent("myContainer")
  createCanvas(500, 500);
  x = width/2-65;
  y = height/2;
}

function draw() {
  background(220);
  image(mcqueen,x,y,140,80)
  image(sheriff,x+350,y-30,130,150)
  image(sally,x+700,y,130,70)
  
  fill(button)
  rect(425,220,50,50)
  rect(25,220,50,50)
  
}

function mousePressed(){
  if (mouseX>425 && mouseX<475 && mouseY>220 && mouseY<270){
    x-=350
   if (x<-2000){
     x=width/2-65
   }
   // }else{
   //   button="red"
   // }
  }
  if (mouseX>25 && mouseX<75 && mouseY>220 && mouseY<270){
    x+=350
   if (x>2000){
     x=width/2-65
   }
  }
}