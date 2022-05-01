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
function predictGesture(){
    img=document.getElementById("take_snapshot");
    classifier.classify(img,gotResult);

}
function gotResult(error,results){
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("gesture_name").innerHTML=results[0].label;
        prediction1=results[0].label;
        speak()
        if(results[0].label=="namaste")
        {
            document.getElementById("gesture").innerHTML="&#128079;";
        }
        if(results[0].label=="victory")
        {
            document.getElementById("gesture").innerHTML="&#9996;";
        }
        if(results[0].label=="Amazing")
        {
            document.getElementById("gesture").innerHTML="&#128076;";
        }
        if(results[0].label=="best(thumbs up)")
        {
            document.getElementById("gesture").innerHTML="&#128077;";
        }
    }
}