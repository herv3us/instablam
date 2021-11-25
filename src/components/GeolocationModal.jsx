import Modal from './Modal';

function GeolocationModal({ setCanUseLocation, setShowModal }) {
  return (
    <div>
      <Modal>
        <h3>
          Would you let me use <br /> your location?
        </h3>
        <button
          onClick={() => {
            setCanUseLocation(true);
            setShowModal(false);
          }}
        >
          Sure thing
        </button>
        <button
          onClick={() => {
            setCanUseLocation(false);
            setShowModal(false);
          }}
        >
          Never!
        </button>
      </Modal>
    </div>
  );
}

export default GeolocationModal;
