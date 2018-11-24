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

    if (imgP5 !== null) {
      image(imgP5, 0, 0);
    }

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
  }

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