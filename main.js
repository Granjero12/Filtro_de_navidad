noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('gorra.png')
    bufanda_nose = loadImage('bufanda.png')
}

function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(600,600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet está inicializando');
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    console.log(results[0].pose.nose.x);
    console.log(results[0].pose.nose.y);

    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    }
}


function draw(){
    image(video,0,0,600,600);

    image(clown_nose,noseX-170,noseY-340,290,320);
    image(bufanda_nose,noseX-100,noseY+50,170,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}
