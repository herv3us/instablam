// import '../img/Instablam-logo.png';
const state = {
  notis: null,
};

const img = './img/Instablam-logo.png';

const useNotifications = () => {
  state.notis = new Notification('Photo added to the gallery..', {
    body: 'You added a new photo to the gallery',
    image: img,
  });
};

export { useNotifications };
