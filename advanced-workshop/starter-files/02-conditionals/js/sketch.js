/*
	Conditionals - making decisions in code!

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		mouseIsPressed
		mouseButton
		mouseX, mouseY
        keyPressed(...)
        key, keyCode

	See index.html for disabling the right click menu.
*/

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
createCanvas(windowWidth, windowHeight);
background(0,0,0);

colorMode(HSB,360,100,100,1);
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
console.log(mouseIsPressed, mouseButton);

colorHue +=5;


fill(0,100,100);
stroke(0,0,100);

if(mouseIsPressed){
  if(mouseButton===LEFT){
    //Normal Ellipse
    ellipse(mouseX,mouseY,20);
    //Flipped horizontally
    ellipse(width-mouseX,mouseY,20);
    //flippedVertically
    ellipse(mouseX,height-mouseY,20);
    //flippedvertically and horizontally
    ellipse(width-mouseX,height-mouseY,20);
}else if(mouseButton===RIGHT){
  background(0,0,0);
}
}
}
