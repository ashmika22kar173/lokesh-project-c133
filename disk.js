img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("disk.jpg");
}

function setup() {
    canvas = createCanvas(350, 350);
    canvas.position(490,230)
    object = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function draw() {
    image(img, 0, 0, 350, 350);
    if (status != "") {
        object.detect(img, gotresult);
        r = random(255);
        g = random(255);
        b = random(255);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Detected Objects";
            document.getElementById("number").innerHTML = "Number of objects Detected =" + objects.length;

            fill(r, g, b);
            lokesh = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + lokesh + "%", objects[i].x + 20, objects[i].y + 20);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            
        }

    }
}

function modelloaded() {
    console.log("model loaded");
    status = true;
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }

}

function back(){
    window.location="index.html";
}