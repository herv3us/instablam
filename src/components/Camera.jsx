import { useState, useEffect, useRef } from 'react';
import { MdCameraEnhance } from 'react-icons/md';
import { cameraOn, cameraOff, takePhoto } from '../helpers/cameraHelper.js';

function Camera() {
  const videoRef = useRef(null);
  const [canUseMd, setCanUseMd] = useState(false);
  const [cameraIsOn, setCameraIsOn] = useState(false);

  const handleCameraClick = async () => {
    const photo = await takePhoto();

    console.log(photo);
    return photo;
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
          <button onClick={handleCameraToggle}>
            {cameraIsOn ? 'Turn off camera' : 'Turn on camera'}
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Camera;
