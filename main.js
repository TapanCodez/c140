song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;

function preload() {
 
}
function setup() {
   canvas = createCanvas(600, 350);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}
function modelLoaded() {
   console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
   if (results.length > 0) {
      console.log(results);
      scoreLeftWrist = results[0].pose.keypoints[9].score;
      console.log("scoreLeftWrist = " + scoreLeftWrist);

      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
      <iframe width="545" 
      height="409" 
      src="https://www.youtube.com/embed/WrTUGIC6lmM"
      title="Disney's " 
       frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen >
       </iframe >

         rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
     
      <iframe width="545" 
      height="409" 
      src="https://www.youtube.com/watch?v=Htaj3o3JD8I"
        title="Disney's " 
       frameborder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen >
       </iframe >
   }
}
function draw() {
   image(video, 0, 0, 600, 500);
   fill("#4169e1");
    stroke("#4169e1");

   if(scoreLeftWrist > 0.2)
   {
   circle(leftWristX,leftWristY,20);
     InNumberleftWristY = Number(leftWristY);
     volume = floor(InNumberleftWristY)/500;
     document.getElementById("volume").innerHTML = "Volume = " + volume;
     song.setVolume(volume);
   }
}
