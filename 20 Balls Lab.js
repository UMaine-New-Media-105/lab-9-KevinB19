
function setup() {
  createCanvas(400, 400);

  balls = [];
  
  for (let ballsDrawn = 0; ballsDrawn < 20; ballsDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisHue = random(360);

    balls[ballsDrawn] = new ball(thisX, thisY, thisHue);
  }
}

function draw() {
  background("white");
  
  for (let ballsShown = 0; ballsShown < balls.length; ballsShown++) {
    balls[ballsShown].move();
    balls[ballsShown].show();
  }
}

class ball {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.color = "hsla(" + parseInt(hue) + ", 100%, 90%, 1)";
    this.addX = 5;
    this.addY = 5;
  }
  move() {
    this.x = this.x + this.addX;
    this.y = this.y + this.addY;
    let ballIsTooFarLeft = this.x < 0;
    let ballIsTooFarRight = this.x > width;
    if (ballIsTooFarLeft || ballIsTooFarRight) {
      this.addX = -this.addX;
    }
    let ballIsTooHigh = this.y < 0;
    let ballIsTooLow = this.y > height;
    if (ballIsTooHigh || ballIsTooLow) {
      this.addY = -this.addY;
    }
  }
  show() {
    push();
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 50);
    pop();
  }
}
