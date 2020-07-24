var points = [];
var speed = 3;
var arrow;
var center;
var angle;
var diameter = 100;
var direction;
var oscillate = false;
function setup() {
	createCanvas(1310, 400);
	arrow = createVector();
	center = createVector(100,height/2);
	direction = createVector(100,0);
	angle = 0;
}

function draw() {
	background(51);
	noFill();
	strokeWeight(2);

 	arrow = p5.Vector.sub(direction,center);
	arrow.setMag(diameter/2);

	if(oscillate)
	{
		arrow.rotate(angle);
		angle += mouseX/500;
	}
	else
	{
		direction.set(mouseX, mouseY);
	}

	let dot = new Dot(arrow.x + center.x, arrow.y + center.y);
	points.push(dot);

	beginShape();
	for(dot of points)
	{
		stroke(0,0,255);
		vertex(dot.x, dot.y);
		dot.x += speed;
		if(dot.x > width)
		{
			points.splice(dot,1);
		}
	}
	endShape();
	stroke(255, 0, 0);
	line(arrow.x + center.x, arrow.y + center.y, arrow.x + center.x, height/2);
	stroke(255);
	ellipse(center.x, center.y, diameter, diameter);
	line(0,height/2, width, height/2);
	line(100, height/2 - 75, 100, height/2 + 75);
	line(center.x, center.y, arrow.x + center.x, arrow.y + center.y);


}

function mouseClicked()
{
  oscillate = !oscillate;
}
