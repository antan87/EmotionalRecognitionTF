  // TODO: put you code here 

  let canvas = null;
  let ctx = null;
  let btnSnap = null;
  let faceShape = null;
  const faceDetector = new FaceDetector();
  const socket = io.connect('http://localhost:3000');
  let img = null;
  let imgP5 = null;

  socket.on('imageConversionByServer', function (data) {

    img = new Image();
    img.setAttribute('src', data);
    imgP5 = loadImage(data);
  });


  function setup() {
    btnSnap = document.getElementById('btn-snap');
    btnSnap.addEventListener("click", function () {
      takeSnapShot();
    });
    createCanvas(720, 400);
  }

  function draw() {

    if (imgP5 !== null) {
      image(imgP5, 0, 0);
    }

    if (faceShape !== null) {

      const {
        width,
        height,
        top,
        left
      } = faceShape.boundingBox;

      stroke(0);
      noFill();
      rect(left, top, width, height);

      // Setting the outline (stroke) to black
      // A rectangle



    }
  }

  async function takeSnapShot() {

    const scale = img.width / img.naturalWidth;
    faceDetector
      .detect(img)
      .then(faces =>
        faces.map((face) => {
          faceShape = face;
          return face.boundingBox
        })
      )
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