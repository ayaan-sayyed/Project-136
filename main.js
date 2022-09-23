stat = "";
objects = [];

function preload() {
    video = createVideo("video.mp4");
}

function setup() {
    canvas = createCanvas(700, 400);
    canvas.position(400, 330);
    video.hide();
}

function draw() {
    image(video, 0, 0, 700, 400);
    if (stat != "") {
    }
}

    function start() {
        objectdetector = ml5.objectDetector("cocossd", modelLoaded);
        document.getElementById("status").innerHTML= "Objects are getting detected";
    }
    
    function modelLoaded() {
        console.log("Model is Loaded!");
        stat= true;
    }