let stream = null;
let facing = 'user';

async function cameraOn(videoElement, done) {
  const md = navigator.mediaDevices;
  const constrains = {
    video: { facingMode: facing, width: 375, height: 500 },
  };
  try {
    stream = await md.getUserMedia(constrains);
    videoElement.srcObject = stream;
    videoElement.addEventListener('loadedmetadata', () => {
      videoElement.play();
      done();
    });
  } catch (error) {
    console.log(error.message);
  }
}

async function cameraOff(videoElement, done) {
  if (!stream) return;

  let tracks = stream.getTracks();
  tracks.forEach((track) => track.stop());
  done();
}

async function takePhoto() {
  try {
    const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
    let blob = await imageCapture.takePhoto();

    const date = new Date();
    const photo = {
      src: URL.createObjectURL(blob),
      position: '',
      date: `${date.getDate()} / ${
        date.getMonth() + 1
      } / ${date.getFullYear()}`,
    };
    return photo;
  } catch (error) {
    console.log('En error has accured.' + error.message);
  }
}

export { cameraOn, cameraOff, takePhoto };
