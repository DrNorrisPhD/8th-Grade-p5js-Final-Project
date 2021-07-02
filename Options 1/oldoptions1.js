function setup() {
    createCanvas(1280,960);
    background(100,100,100);
  }
  Shield = false;
  Helmet = true;
  function draw(){
    background(100,100,100);
    strokeWeight(20);
    stroke(0,0,0);
    textSize(20);
    fill(72,206,100);
    rect(0,0,1280,960);
    fill(0,0,0);
    noStroke();
    textAlign(CENTER, TOP);
    text("Here, you can select the items you want to equip",640,100);
    strokeWeight(2);
    fill(72,206,100);
    if (mouseX >= 15 && mouseX <=79 && mouseY>=15 && mouseY <=40){
      stroke(0,0,0);
      rect(15,15,64,25);
      noStroke();
      fill(0,0,0);
      text("BACK",47,19);
    } else {
      stroke(255,255,255);
      rect(15,15,64,25);
      noStroke();
      fill(255,255,255);
      text("BACK",47,19);
    }
    fill(72,206,100);
    if (mouseX > 440 && mouseX < 840 && mouseY > 450 && mouseY < 550){
      stroke(0,0,0);
      rect(440,450,400,100);
      textAlign(CENTER,TOP);
      noStroke();
      fill(0,0,0);
      textSize(50);
      if (Shield == true){
        text("Shield: On",640,475);
      }
      if (Shield == false){
        text("Shield: Off",640,475);
      }
      fill(72,206,100);
  } else {
      stroke(255,255,255);
      rect(440,450,400,100);
      textAlign(CENTER,TOP);
      noStroke();
      fill(255,255,255);
      textSize(50);
      if (Shield == true){
        text("Shield: On",640,475);
      }
      if (Shield == false){
        text("Shield: Off",640,475);
      }
      fill(72,206,100);
  }
    if (mouseX > 440 && mouseX < 840 && mouseY > 555 && mouseY < 655){
      stroke(0,0,0);
      rect(440,555,400,100);
      textAlign(CENTER,TOP);
      noStroke();
      fill(0,0,0);
      textSize(50);
      if (Helmet == true){
        text("Helmet: On",640,580);
      }
      if (Helmet == false){
        text("Helmet: Off",640,580);
      }
      fill(72,206,100);
  } else {
      stroke(255,255,255);
      rect(440,555,400,100);
      textAlign(CENTER,TOP);
      noStroke();
      fill(255,255,255);
      textSize(50);
      if (Helmet == true){
        text("Helmet: On",640,580);
      }
      if (Helmet == false){
        text("Helmet: Off",640,580);
      }
      fill(72,206,100);
  }
    if (mouseX > 440 && mouseX < 840 && mouseY > 650 && mouseY < 750){
      stroke(0,0,0);
      rect(440,660,400,100);
      textAlign(CENTER,TOP);
      noStroke();
      fill(0,0,0);
      textSize(50);
      text("Options 3",640,685);
      if (Helmet == true){
        text("Helmet: On",640,580);
      }
      if (Helmet == false){
        text("Helmet: Off",640,580);
      }
      fill(72,206,100);
  } else{
    stroke(255,255,255);
    rect(440,660,400,100);
    textAlign(CENTER,TOP);
    noStroke();
    fill(255,255,255);
    textSize(50);
    text("Options 3",640,685);
    fill(72,206,100);
  }
  }
  
  function mousePressed(){
    if (mouseX >= 15 && mouseX <=79 && mouseY>=15 && mouseY <=40){
    location.href = '../Main/index.html';
    }
    if (mouseX > 440 && mouseX < 840 && mouseY > 450 && mouseY < 550){
      Shield = !Shield;
    }
    if (mouseX > 440 && mouseX < 840 && mouseY > 555 && mouseY < 655){
      Helmet = !Helmet;
    }
  }