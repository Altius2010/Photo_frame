function preload() {}

function setup() {
    canvas = createCanvas(1140, 680);
    canvas.position(75, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 250, 100, 640, 480);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(80, 45, 1000, 10);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(80, 640, 1000, 10);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(45, 80, 10, 1000);
    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(1085, 80, 10, 1000);
    fill(255, 153, 51);
    stroke(255, 153, 51);
    rect(0, 0, 100, 100);
    fill(255, 153, 51);
    stroke(255, 153, 51);
    rect(1040, 0, 100, 100);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(0, 580, 100, 100);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(1040, 580, 100, 100);
}

function take_snapshot() {
    save('PhotoFrame.png');
}