status2 = "";
img2 = "";
object2 = [];

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("detect").innerHTML = "status : detecting object";
}

function modelLoaded(){
    console.log("modelloaded")
    status2 = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, result){
if(error){
    console.log("error");
}
console.log(result);
object2 = result;
}

function preload() {
    img2 = loadImage("xbox.jpeg");
}

function draw() {
    image(img2, 0, 0, 640, 420);

    if (status2 != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status2").innerHTML = "status : detected";
            fill("red");
            accuracy = floor(object[i].confidence * 100);
            text(object[i].label + " " + accuracy + "%", object[i].x, object[i].y);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

