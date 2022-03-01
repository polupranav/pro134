status3 = "";
img3 = "";
object3 = [];

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("detect").innerHTML = "status : detecting object";
}

function modelLoaded(){
    console.log("modelloaded")
    status3 = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, result){
if(error){
    console.log("error");
}
console.log(result);
object3 = result;
}

function preload() {
    img3 = loadImage("football.jpeg");
}

function draw() {
    image(img3, 0, 0, 640, 420);

    if (status3 != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status3").innerHTML = "status : detected";
            fill("red");
            accuracy = floor(object[i].confidence * 100);
            text(object[i].label + " " + accuracy + "%", object[i].x, object[i].y);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

