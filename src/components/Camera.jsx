import { useState, useEffect, useRef } from 'react';
import { MdCameraEnhance } from 'react-icons/md';
import { cameraOn, cameraOff, takePhoto } from '../helpers/cameraHelper.js';

function Camera({ gallery, setGallery, location }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [canUseMd, setCanUseMd] = useState(false);
  const [cameraIsOn, setCameraIsOn] = useState(false);

  const handleCameraClick = async () => {
    const photo = await takePhoto(
      videoRef.current,
      canvasRef.current,
      location
    );
    let newGallery = [...gallery];
    newGallery.splice(0, 0, photo);
    setGallery(newGallery);
  };

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
            <button
              onClick={() => handleCameraClick()}
              className="camera-container_takePicBtn"
            >
              <MdCameraEnhance /> Take pic
            </button>
          ) : null}
          <canvas ref={canvasRef}></canvas>
          <button onClick={handleCameraToggle}>
            {cameraIsOn ? 'Turn off camera' : 'Turn on camera'}
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Camera;
