let video = null;
let canvas = null;
let faceShapes = null;
const faceDetector = new FaceDetector({});

function setup() {
  canvas = createCanvas(1280 / 2, 720 / 2);
  let constraints = {
    video: {
      mandatory: {
        minWidth: 1280 / 2,
        minHeight: 720 / 2
      },
      optional: [{
        maxFrameRate: 50
      }]
    },
    audio: false
  };
  video = createCapture(constraints, function (stream) {});
  video.hide();

  setInterval(async function () {
    await faceDetector.detect(canvas.canvas)
      .then((faces) => {
        faceShapes = faces;
        if (faceShapes[0] != null && faceShapes[0].landmarks.length > 0)
          console.log(aceShapes.landmarks);
        return faces;
      })
      .catch(err => console.log(err));
    //code goes here that will be run every 5 seconds.    
  }, 100);

}

function draw() {

  image(video, 0, 0, video.width, video.height);

  if (faceShapes !== null) {

    faceShapes.forEach((faceShape) => {
      const {
        width,
        height,
        top,
        left
      } = faceShape.boundingBox;

      stroke(190);
      noFill();
      rect(left, top, width, height);
    });
  }
}