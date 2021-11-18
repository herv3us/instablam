import { useState, useEffect, useRef } from 'react';
import { MdCameraEnhance } from 'react-icons/md';

function Camera() {
  const videoRef = useRef(null);
  const [canUseMd, setCanUseMd] = useState(false);
  const [cameraIsOn, setCameraIsOn] = useState(false);

  const handleCameraToggle = () => {
    if (cameraIsOn) {
      cameraOff(videoRef.current, () => {
        setCameraIsOn(false);
      });
    } else {
      cameraOn(videoRef.current, () => {
        setCameraIsOn(true);
      });
    }
  };

  useEffect(() => {
    if ('mediaDevices' in navigator) {
      setCanUseMd(true);
    }
  }, []);

  return (
    <div className="camera-container">
      {canUseMd ? (
        <>
          <video ref={videoRef}></video>
          {cameraIsOn ? (
            <button className="camera-container_takePicBtn">
              <MdCameraEnhance /> Take pic
            </button>
          ) : null}
          <button onClick={handleCameraToggle}>
            {cameraIsOn ? 'Tun off camera' : 'Turn on camera'}
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Camera;

let stream = '';

async function cameraOn(videoElement, done) {
  const md = navigator.mediaDevices;
  const constrains = {
    video: { facingMode: 'user', width: 375, height: 500 },
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
