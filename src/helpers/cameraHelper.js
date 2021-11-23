import { nanoid } from 'nanoid';
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

async function takePhoto(videoElement, canvasElement, location) {
  if ('ImageCapture' in window) {
    try {
      const imageCapture = new ImageCapture(stream.getVideoTracks()[0]);
      let blob = await imageCapture.takePhoto();

      const date = new Date();

      const photo = {
        src: URL.createObjectURL(blob),
        position: location ? location : 'No location found',
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        id: nanoid(10),
      };
      return photo;
    } catch (error) {
      console.log('En error has accured.' + error.message);
    }
  } else {
    const context = canvasElement.getContext('2d');
    videoElement.srcObject = stream;
    return new Promise((res, rej) => {
      videoElement.addEventListener('loadeddata', async () => {
        const { videoWidth, videoHeight } = videoElement;
        canvasElement.width = videoWidth;
        canvasElement.height = videoHeight;
        try {
          await videoElement.play();
          context.drawImage(videoElement, 0, 0, videoWidth, videoHeight);
          let data = canvasElement.toDataURL('image/png');
          const date = new Date();
          const photo = {
            src: data,
            position: location ? location : 'No location found',
            date: `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`,
            id: nanoid(10),
          };
          console.log(photo);
          return photo;
        } catch (error) {
          rej(error);
        }
      });
    });
  }
}

export { cameraOn, cameraOff, takePhoto };
