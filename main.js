var objects = []
status  = ""


function preload(){
    video = createVideo("video/video2.mp4")
}


function setup(){
canvas  = createCanvas(470,460)
canvas.center()
video.hide()
}


function start(){
    objectdetector = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML = "status: detecting objects."
}


function modelloaded(){
    console.log("modelloaded")
    status = true
    video.loop()
    video.speed(1)
    video.volume(0)
}


function gotresult(error,results){
 
    if (error) {
       console.log(error)
   }

   else{
       console.log(results)
       objects = results
   }
}
  

function draw(){
    image(video,0,0,470,460)
   
    if (status!="") {
        objectDetector.detect(video,gotresult)
        for (let index = 0; index < objects.length; index++) {
            document.getElementById("status").innerHTML = "status:objectDetector"
            document.getElementById("numberofobjects").innerHTML = "number of objects detected are:"+objects.length
            fill("red")
            percent = floor(objects[i].confidence*100)
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y)
            noFill()
            stroke("red")
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
        }
    }
}