function setup(){
    Xhanvas = createCanvas(400, 350);
    Xhanvas.background("black");
    Xhanvas.position(440, 480);

    WebCam = createCapture(VIDEO);
    WebCam.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/38I7r4x6S/model.json', MODELLOADED);
}

function MODELLOADED(){
    console.log("I'm Alive");
}

function draw(){
    image(WebCam, 0, 0, 400, 350);
    classifier.classify(WebCam, MyResults);
}

function MyResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("ObjectSpan").innerHTML = results[0].label;
        document.getElementById("AccuracySpan").innerHTML = (results[0].confidence * 100).toFixed(1) + "%";
    }
}