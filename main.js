function preload(){

}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    canvas.position(150, 175)
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    image(video, 0, 0, 350, 350);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    
    circle(20, 20, 80);
    circle(330, 325, 80);
    circle(20, 325, 80);
    circle(330, 20, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(50, 0, 250, 20)
    rect(50, 330, 250, 20)
    rect(0, 50, 20, 245)
    rect(330, 50, 20, 245)
}   


function take_snapshot(){
    save('reinier.png');
}

