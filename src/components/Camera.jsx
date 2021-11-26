import { useState, useEffect, useRef } from 'react';
import { MdCameraEnhance, MdAlarm } from 'react-icons/md';
import { cameraOn, cameraOff, takePhoto } from '../helpers/cameraHelper.js';
import { useNotifications } from '../helpers/notis.js';

function Camera({ gallery, setGallery, location }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [canUseMd, setCanUseMd] = useState(false);
  const [cameraIsOn, setCameraIsOn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [addedToGalleryMessage, setAddedToGalleryMessage] = useState('');
  const [count, setCount] = useState(3);

  const handleCameraClick = async () => {
    setTimeout(() => {
      setIsActive(true);
      setAddedToGalleryMessage('Photo added gallery');
    }, 500);
    const photo = await takePhoto(
      videoRef.current,
      canvasRef.current,
      location
    );
    let newGallery = [...gallery];
    newGallery.splice(0, 0, photo);
    setGallery(newGallery);

    setTimeout(() => {
      setIsActive(false);
      setAddedToGalleryMessage('');
    }, 1500);
  };

  const handleDelayClick = async () => {
    setTimeout(() => {
      handleCameraClick();
      console.log('Click');
      useNotifications();
    }, 3000);
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
      <span
        className={
          isActive
            ? 'camera-container-message'
            : 'camera-container-message--hide'
        }
      >
        {addedToGalleryMessage || null}
      </span>
      {canUseMd ? (
        <>
          <video ref={videoRef} playsInline autoPlay></video>
          {cameraIsOn ? (
            <div>
              <button
                className="camera-container_3s"
                title="Photo taken with 3 sec delay"
                onClick={() => handleDelayClick()}
              >
                <MdAlarm />
              </button>
              {/* <p>{count}</p> */}
              <button
                onClick={() => handleCameraClick()}
                className={
                  isActive
                    ? 'camera-container_takePicBtn'
                    : 'camera-container_takePicBtn modal-hide'
                }
              >
                <MdCameraEnhance /> Take pic
              </button>
            </div>
          ) : null}
          <canvas ref={canvasRef} className="hide"></canvas>
          <button onClick={handleCameraToggle}>
            {cameraIsOn ? 'Turn off camera' : 'Turn on camera'}
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Camera;
