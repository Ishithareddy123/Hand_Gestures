Webcam.set({

    width:350,

    height:300,

    image_format:"png",

    png_quality:90

});
camera=document.getElementById("camera");

Webcam.attach(camera);

function takeSnapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML='<img id="take_snapshot" src="'+data_uri+'">';
    });
}
console.log("ml5version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/coFIOUOWd/model.json",modelLoaded);

function modelLoaded(){

    console.log("model is loaded!");
}
function speak(){

    var synth=window.speechSynthesis;

    speak_Data1="Your gesture's prediction is"+prediction1;
    
    var utterIs=new SpeechSynthesisUtterance(speak_Data1);
    
    synth.speak(utterIs);
}