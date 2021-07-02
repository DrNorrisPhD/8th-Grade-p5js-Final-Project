function setup() {
  createCanvas(1280,960);
  Color = color(random(0,255),random(0,255),random(0,255));
  Color1 = color(random(0,255),random(0,255),random(0,255));
}

function draw(){
  background(100,100,100);
  strokeWeight(20);
  stroke(0,0,0);
  textSize(20);
  fill(72,206,100);
  rect(0,0,1280,960);
  textSize(75);
  textAlign(CENTER,TOP);
  fill(255,255,255);
  text("WELCOME TO THE MENU",640,100);
  fill(72,206,100);
  strokeWeight(3);
  if (mouseX > 440 && mouseX < 840 && mouseY > 450 && mouseY < 550){
    stroke(0,0,0);
    rect(440,450,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(0,0,0);
    textSize(50);
    text("Play",640,475);
    fill(72,206,100);
} else {
    stroke(255,255,255);
    rect(440,450,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(255,255,255);
    textSize(50);
    text("Play",640,475);
    fill(72,206,100);
}
  if (mouseX > 440 && mouseX < 840 && mouseY > 555 && mouseY < 655){
    stroke(0,0,0);
    rect(440,555,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(0,0,0);
    textSize(50);
    text("TicTacToe",640,580);
    fill(72,206,100);
    if(mouseIsPressed){
      location.href = '../TicTacToe/index.html';
    }
} else {
    stroke(255,255,255);
    rect(440,555,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(255,255,255);
    textSize(50);
    text("Tic Tac Toe",640,580);
    fill(72,206,100);
}
/*  if (mouseX > 440 && mouseX < 840 && mouseY > 650 && mouseY < 750){
    stroke(0,0,0);
    rect(440,660,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(0,0,0);
    textSize(50);
    text("Options 3",640,685);
    fill(72,206,100);
    if(mouseIsPressed){
      location.href = '../Options 3/index.html';
    }
} else{
  stroke(255,255,255);
  rect(440,660,400,100);
  textAlign(CENTER,TOP);
  noStroke();
  fill(255,255,255);
  textSize(50);
  text("Options 3",640,685);
  fill(72,206,100);
}*/
}

function mousePressed(){
  if (mouseX > 440 && mouseX < 840 && mouseY > 450 && mouseY < 550){
    location.href="../Options 1/index.html";
  }
}