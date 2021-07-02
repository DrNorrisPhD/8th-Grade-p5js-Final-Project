function setup() {
	createCanvas(600, 600);
	background(100);
	textAlign(CENTER, CENTER);
	textSize(100);
	colorSetting = true; //true = dark, false = light
	colorSwitch();
	noCursor();
	rectMode(CENTER);
}
//Ctrl Change to High-Contrast Mode
//Enter Change to Reset Board
let value, computersMove;
resetBoard();

// i1 i2 i3
// i4 i5 i6
// i7 i8 i9
function draw() {
	lightUp();

	if (array.includes(ting)) {
		array = array.filter(function(value, index, arr) {
			return value != ting;
		});
	}
	fill(letterColor);
	moveCheck();
	fill(boxColor);
	strokeWeight(5);
	winCheck();
	strokeWeight(1);
	fill(cursorColor);
	stroke(cursorStroke);
	rect(mouseX, mouseY, 25, 2);
	rect(mouseX, mouseY, 2, 25);
	stroke(lineColor);
}
p = true;

function mousePressed() {
	winCheck();
	if (won == false) {
		if (mouseX >= 0 && mouseX <= 200 && mouseY <= 200 && mouseY >= 0) {
			if (i1 == false) {
				if (p == true) {
					a = "x";
				} else {
					a = "o";
				}
				p = false;
				ting = "i1";
				i1 = true;
				computerMove();
			}
		}

		if (mouseX > 200 && mouseX <= 400 && mouseY <= 200 && mouseY >= 0) {
			if (i2 == false) {
				if (p == true) {
					b = "x";
				} else {
					b = "o";
				}
				p = false;
				ting = "i2";
				i2 = true;
				computerMove();
			}
		}

		if (mouseX > 400 && mouseX <= 600 && mouseY <= 200 && mouseY >= 0) {
			if (i3 == false) {
				if (p == true) {
					c = "x";
				} else {
					c = "o";
				}
				p = false;
				ting = "i3";
				i3 = true;
				computerMove();
			}
		}
		if (mouseX >= 0 && mouseX <= 200 && mouseY < 400 && mouseY > 200) {
			if (i4 == false) {
				if (p == true) {
					d = "x";
				} else {
					d = "o";
				}
				p = false;
				ting = "i4";
				i4 = true;
				computerMove();
			}
		}

		if (mouseX > 200 && mouseX < 400 && mouseY < 400 && mouseY > 200) {
			if (i5 == false) {
				if (p == true) {
					e = "x";
				} else {
					e = "o";
				}
				p = false;
				ting = "i5";
				i5 = true;
				computerMove();
			}
		}
		if (mouseX > 400 && mouseX < 600 && mouseY < 400 && mouseY > 200) {
			if (i6 == false) {
				if (p == true) {
					f = "x";
				} else {
					f = "o";
				}
				p = false;
				ting = "i6";
				i6 = true;
				computerMove();
			}
		}
		if (mouseX >= 0 && mouseX <= 200 && mouseY <= 600 && mouseY > 400) {
			if (i7 == false) {
				if (p == true) {
					g = "x";
				} else {
					g = "o";
				}
				p = false;
				ting = "i7";
				i7 = true;
				computerMove();
			}
		}
		if (mouseX > 200 && mouseX < 400 && mouseY <= 600 && mouseY > 400) {
			if (i8 == false) {
				if (p == true) {
					h = "x";
				} else {
					h = "o";
				}
				p = false;
				ting = "i8";
				i8 = true;
				computerMove();
			}
		}
		if (mouseX > 400 && mouseX < 600 && mouseY <= 600 && mouseY > 400) {
			if (i9 == false) {
				if (p == true) {
					i = "x";
				} else {
					i = "o";
				}
				p = false;
				ting = "i9";
				i9 = true;
				computerMove();
			}
		}
		winCheck();
	}

}

function lightUp() {
	if (mouseX >= 0 && mouseX <= 200 && mouseY <= 200 && mouseY >= 0) {
		fill(oncolor);
		quad(0, 0, 0, 200, 200, 200, 200, 0);
	} else {
		fill(offcolor);
		quad(0, 0, 0, 200, 200, 200, 200, 0);
	}

	if (mouseX > 200 && mouseX <= 400 && mouseY <= 200 && mouseY >= 0) {
		fill(oncolor);
		quad(200, 0, 400, 0, 400, 200, 200, 200);
	} else {
		fill(offcolor);
		quad(200, 0, 400, 0, 400, 200, 200, 200);
	}

	if (mouseX > 400 && mouseX <= 600 && mouseY <= 200 && mouseY >= 0) {
		fill(oncolor);
		quad(400, 0, 600, 0, 600, 200, 400, 200);
	} else {
		fill(offcolor);
		quad(400, 0, 600, 0, 600, 200, 400, 200);
	}

	if (mouseX >= 0 && mouseX <= 200 && mouseY < 400 && mouseY > 200) {
		fill(oncolor);
		quad(0, 200, 0, 400, 200, 400, 200, 200);
	} else {
		fill(offcolor);
		quad(0, 200, 0, 400, 200, 400, 200, 200);
	}

	if (mouseX > 200 && mouseX < 400 && mouseY < 400 && mouseY > 200) {
		fill(oncolor);
		quad(200, 200, 200, 400, 400, 400, 400, 200);
	} else {
		fill(offcolor);
		quad(200, 200, 200, 400, 400, 400, 400, 200);
	}
	if (mouseX > 400 && mouseX < 600 && mouseY < 400 && mouseY > 200) {
		fill(oncolor);
		quad(400, 200, 400, 400, 600, 400, 600, 200);
	} else {
		fill(offcolor);
		quad(400, 200, 400, 400, 600, 400, 600, 200);
	}
	if (mouseX >= 0 && mouseX <= 200 && mouseY <= 600 && mouseY > 400) {
		fill(oncolor);
		quad(0, 400, 0, 600, 200, 600, 200, 400);
	} else {
		fill(offcolor);
		quad(0, 400, 0, 600, 200, 600, 200, 400);
	}
	if (mouseX > 200 && mouseX < 400 && mouseY <= 600 && mouseY > 400) {
		fill(oncolor);
		quad(200, 400, 200, 600, 400, 600, 400, 400);
	} else {
		fill(offcolor);
		quad(200, 400, 200, 600, 400, 600, 400, 400);
	}
	if (mouseX > 400 && mouseX < 600 && mouseY <= 600 && mouseY > 400) {
		fill(oncolor);
		quad(400, 400, 400, 600, 600, 600, 600, 400);
	} else {
		fill(offcolor);
		quad(400, 400, 400, 600, 600, 600, 600, 400);
	}
}

function resetBoard() {
	i1 = false;
	i2 = false;
	i3 = false;
	i4 = false;
	i5 = false;
	i6 = false;
	i7 = false;
	i8 = false;
	i9 = false;
	ting = "";
	array = ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9"];
	p = true;
	a = "a";
	b = "b";
	c = "c";
	d = "d";
	e = "e";
	f = "f";
	g = "g";
	h = "h";
	i = "i";
	cg = true;
	won = false;
}

function keyPressed() {
	if (keyCode === ENTER) {
		resetBoard();
	}
	if (keyCode === CONTROL) {
		colorSetting = !colorSetting;
		colorSwitch();
	}
}

function computerMove() {
	computersMove = array[Math.floor(Math.random() * array.length)];
	computerGo();
}

function computerGo() {
	winCheck();
	if (cg == true) {
		if (computersMove == "i1") {
			if (i1 == false) {
				i1 = true;
				a = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i2") {
			if (i2 == false) {
				i2 = true;
				b = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i3") {
			if (i3 == false) {
				i3 = true;
				c = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i4") {
			if (i4 == false) {
				i4 = true;
				d = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i5") {
			if (i5 == false) {
				i5 = true;
				e = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i6") {
			if (i6 == false) {
				i6 = true;
				f = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i7") {
			if (i7 == false) {
				i7 = true;
				g = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i8") {
			if (i8 == false) {
				i8 = true;
				h = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		} else if (computersMove == "i9") {
			if (i9 == false) {
				i9 = true;
				i = "o";
				p = true;
				won = false;
			} else {
				computerMove();
			}
		}
	}
}

function winCheck() {
	fill(winColor)
	if (a == b && b == c) {
		text(b + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (d == e && e == f) {
		text(e + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (g == h && h == i) {
		text(h + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (a == d && d == g) {
		text(d + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (b == e && e == h) {
		text(e + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (c == f && f == i) {
		text(f + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (a == e && e == i) {
		text(e + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (c == e && e == g) {
		text(e + " wins!", 300, 300);
		cg = false;
		won = true;
	} else if (a != "a" && b != "b" && c != "c" && d != "d" && e != "e" && f != "f" && g != "g" && h != "h" && i != "i") {
		cg = false;
		won = true;
		text("DRAW", 300, 300);
	}
}

function moveCheck() {
	if (i1 == true) {
		text(a, 100, 100);
	}
	if (i2 == true) {
		text(b, 300, 100);
	}
	if (i3 == true) {
		text(c, 500, 100);
	}
	if (i4 == true) {
		text(d, 100, 300);
	}
	if (i5 == true) {
		text(e, 300, 300);
	}
	if (i6 == true) {
		text(f, 500, 300);
	}
	if (i7 == true) {
		text(g, 100, 500);
	}
	if (i8 == true) {
		text(h, 300, 500);
	}
	if (i9 == true) {
		text(i, 500, 500);
	}
}

function colorSwitch() {
	if (colorSetting == true) {
		winColor = color(0);
		lineColor = color(255);
		boxColor = color(0);
		letterColor = color(255);
		offcolor = color(0);
		oncolor = color(50);
		cursorColor = color(127);
		cursorStroke = color(127);
	} else if (colorSetting == false) {
		winColor = color(255);
		lineColor = color(0);
		boxColor = color(255);
		letterColor = color(0);
		offcolor = color(255);
		oncolor = color(100);
		cursorColor = color(0);
		cursorStroke = color(0);
	}
}