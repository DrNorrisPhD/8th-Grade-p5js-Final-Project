function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

var player = {
	x: 20,
	y: 20,
	w: 20,
	h: 20
};

walls = []

function draw() {
	ellipse(mouseX, mouseY, 20, 20);
}