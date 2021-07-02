function preload(){
  //wolf = loadImage("./Wolf-in-Forest.jpg");
}


function setup() {
  createCanvas(1280,960);
  background(100,100,100);
  //image(wolf,0,0);
}


function draw(){
  background(100,100,100);
  strokeWeight(20);
  stroke(0,0,0);
  textSize(20);
  fill(255,0,0);
  rect(0,0,1280,960);
  strokeWeight(2);
  textSize(50);
  textAlign(CENTER,TOP);
  fill(255,255,255);
  text("You take the left path.\nAfter about 5 minutes you trip and fall.\nYou encounter a wolf.",640,100);
  fill(255,0,0);
  textSize(20);
  if (mouseX > 440 && mouseX < 840 && mouseY > 450 && mouseY < 550){
    stroke(0,0,0);
    rect(440,450,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(0,0,0);
    textSize(50);
    text("Run",640,475);
    fill(255,0,0);
} else {
    stroke(255,255,255);
    rect(440,450,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(255,255,255);
    textSize(50);
    text("Run",640,475);
    fill(255,0,0);
}
if (mouseX > 440 && mouseX < 840 && mouseY > 555 && mouseY < 655){
  stroke(0,0,0);
  rect(440,555,400,100);
  textAlign(CENTER,TOP);
  noStroke();
  fill(0,0,0);
  textSize(50);
  text("Play Fetch",640,580);
  fill(255,0,0);
} else {
  stroke(255,255,255);
  rect(440,555,400,100);
  textAlign(CENTER,TOP);
  noStroke();
  fill(255,255,255);
  textSize(50);
  text("Play Fetch",640,580);
  fill(255,0,0);
}
textSize(20);
if (mouseX >= 15 && mouseX <=79 && mouseY>=15 && mouseY <=40){
  stroke(0,0,0);
  rect(15,15,64,25);
  fill(0,0,0);
  noStroke();
  textAlign(LEFT,BASELINE);
textAlign(BASELINE,LEFT);
text("BACK",19,35);
} else {
  stroke(255,255,255);
  rect(15,15,64,25);
  fill(255,255,255);
  noStroke();
  textAlign(LEFT,BASELINE);
textAlign(BASELINE,LEFT);
text("BACK",19,35);
}
}
function mousePressed(){
  if (mouseX >= 15 && mouseX <=79 && mouseY>=15 && mouseY <=40){
  location.href = '../Main/index.html';
  }
  if (mouseX > 440 && mouseX < 840 && mouseY > 450 && mouseY < 550){
    location.href = "../8/index.html";
  }
  if (mouseX > 440 && mouseX < 840 && mouseY > 555 && mouseY < 655){
    location.href = "../9/index.html";
  }
}