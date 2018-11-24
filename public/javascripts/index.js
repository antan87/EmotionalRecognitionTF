<<<<<<< Updated upstream
let video = null;
let canvas = null;
let ctx = null;
let btnSnap = null;
let face = null;
const faceDetector = new window.FaceDetector()

function setup() {
  canvas = document.createElement('canvas');

  canvas.id = "CursorLayer";
  canvas.width = 500;
  canvas.height = 375;
  canvas.style.position = "absolute";
  canvas.style.border = "1px solid";


  video = document.getElementById('video-container');
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
      })
      .then(function (stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  };
  ctx = canvas.getContext("2d");
=======
  // TODO: put you code here 
  'use strict';
  let canvas = null;
  let ctx = null;
  let btnSnap = null;
  let faceShapes = null;
  const faceDetector = new FaceDetector();
  const socket = io.connect('http://localhost:3000');
  let img = null;
  let imgP5 = null;

  socket.on('imageConversionByServer', function (data) {

    img = new Image();
    img.setAttribute('src', data);
    imgP5 = loadImage(data);
    console.log(img);
    resizeCanvas(img.width, img.height);
  });


  function setup() {
    btnSnap = document.getElementById('btn-snap');
    btnSnap.addEventListener("click", function () {
      takeSnapShot();
    });
    createCanvas(1400, 1400);
  }

  function draw() {
>>>>>>> Stashed changes

  btnSnap = document.getElementById('btn-snap');

<<<<<<< Updated upstream
  btnSnap.addEventListener("click", function () {
    takeSnapShot();
  });

}

function draw() {
  let img = document.getElementById('img-container');
  if (img === null || img === undefined)
    background(0);
  else
    background(0);
  // image(capture, 0, 0, 320, 240);
  // filter('INVERT');

  if (face !== null) {

    const {
      width,
      height,
      top,
      left
    } = face.boundingBox;

    fill(204, 101, 192, 127);
    stroke(127, 63, 120);

    // A rectangle
    rect(left, top, width, height);
=======
    if (faceShapes !== null) {
      faceShapes.forEach((faceShape) => {
        const {
          width,
          height,
          top,
          left
        } = faceShape.boundingBox;

        stroke(0);
        noFill();
        rect(left, top, width, height);
      });
    }
>>>>>>> Stashed changes
  }
}

<<<<<<< Updated upstream
async function takeSnapShot() {
  if (video === null || canvas === null)
    return;


  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  let img = document.getElementById('img-container');
  img.src = canvas.toDataURL('image/jpeg');

  faceDetector.detect(img).then((faces) => {

    for (let index = 0; index < faces.length; index++) {
      face = faces[index];
      console.log(face);

      for (let index2 = 0; index2 < face.landmarks.length; index2++) {}
    }
  });

}


function drawFace(img) {
  if (face === null)
    return;


  const {
    width,
    height,
    top,
    left
  } = face.boundingBox;


  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  // A rectangle
  rect(width, 500, 600, height);
}


// })

// document.addEventListener('DOMContentLoaded', function () {
//   const video = document.getElementById('video-container');
//   const canvas = document.getElementById('img-container');
//   const faceDetector = new window.FaceDetector()
//   let faces = null;
//   let context = canvas.getContext('2d')
//   const videoCompStyle = window.getComputedStyle(video)
//   const videoWidth = videoCompStyle.width.replace('px', '')
//   const videoHeight = videoCompStyle.height.replace('px', '')

//   setTimeout(100, tt());


//   async function tt() {
//     context = canvas.getContext('2d')
//     context.drawImage(video, 0, 0, videoWidth, videoHeight)
//     faces = await faceDetector.detect(canvas);
//     console.log(faces);
//   };


//   if (navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia({
//         video: true
//       })
//       .then(function (stream) {
//         video.srcObject = stream;
//       })
//       .catch(function (err0r) {
//         console.log("Something went wrong!");
//       });
//   };
//   // loop(canvas, video, 100);
//   let hideTimeout = 100;
//   async function loop(canvas, video, overlay) {
//     window.requestAnimationFrame(() => loop(canvas, video, overlay))
//     const context = canvas.getContext('2d')
//     const videoCompStyle = window.getComputedStyle(video)
//     const videoWidth = videoCompStyle.width.replace('px', '')
//     const videoHeight = videoCompStyle.height.replace('px', '')
//     context.drawImage(video, 0, 0, videoWidth, videoHeight)

//     clearTimeout(hideTimeout)
//     if (faces !== null && faces.length) {
//       const face = faces[0].boundingBox
//       console.log('Face detected on video frame: ', face)
//     } else {
//       // hideTimeout = hideOverlay(overlay)
//     }

//     if (isDetectingFaces) return

//     isDetectingFaces = true
//     faces = await faceDetector.detect(canvas)
//     isDetectingFaces = false
//   }

//  })
=======
  async function takeSnapShot() {

    const scale = img.width / img.naturalWidth;
    faceDetector
      .detect(img)
      .then((faces) => {
        faceShapes = faces;
        console.log(faces);
        return faces;
      })
      .catch(err => console.log(err));

  }

  const drawFaceBox = (height, width, top, left, scale) => {
    const div = document.createElement('div');
    div.className = 'face-box';
    div.style.cssText = `
      top: ${top * scale}px;
      left: ${left * scale}px;
      height: ${height * scale}px;
      width: ${width * scale}px;
    `;
    return div;
  };
>>>>>>> Stashed changes
