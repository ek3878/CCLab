let x=0;
let y=0;


function setup() {
    let canvas=createCanvas(400, 400);
    canvas.parent("myContainer2")
  colorMode(HSB,100)
}

function draw() {
  background(0,40);
  let b=map(mouseX,0,width,0,255)
  stroke(0)
  strokeWeight(1)
  fill(y)
  circle(y,height/2-30,20)
  circle(x,height/2,20)
  circle(y,height/2+30,20)
  x=width/2+50*sin(frameCount*0.06)
  y=width/2+50*cos(frameCount*0.06)
  
  let x2=map(sin(frameCount*0.09),-1,1,80,320)
  let s=map(cos(frameCount*0.09),-1,1,10,50)
  let h=map(cos(frameCount*0.02),-1,1,0,100)
  let y2=map(cos(frameCount*0.09),-1,1,80,320)
  fill(h,50,100)
  circle(x,x2,s)
  noStroke()
  fill(y)
  circle(x2,y2,5)
  x=x+3
  if (x>width){
    x=-10
  }

}