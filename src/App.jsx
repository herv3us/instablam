import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Camera from './components/Camera.jsx';
import Gallery from './components/Gallery.jsx';
import Head from './components/Head';
import Nav from './components/Nav';
import GeoModal from './components/GeoModal.jsx';

function App() {
  const [gallery, setGallery] = useState([
    {
      src: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
      position: 'Göteborg',
      date: '22/11/2021',
      id: nanoid(10),
    },
    {
      src: 'https://images.unsplash.com/photo-1455762279210-ae6b56c7ad7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
      position: 'Lund',
      date: '18/11/2021',
      id: nanoid(10),
    },
  ]);

  const [canUseLocation, setCanUseLocation] = useState(false);
  const [pos, setPos] = useState(null);
  const [location, setLocation] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (canUseLocation) {
      if ('geolocation' in navigator) {
        const geo = navigator.geolocation;
        geo.getCurrentPosition((pos) => {
          setPos(pos.coords);
          setCanUseLocation(true);
          console.log('Hej');
        });
      } else {
        console.log('No location found');
      }
    }
  }, [canUseLocation]);

  async function onSuccess(lat, long) {
    console.log(lat, long);
    const adress = await findPosition(lat, long);
    setLocation(adress.name);
    console.log(adress.name);
  }

  useEffect(() => {
    if (canUseLocation) {
      onSuccess(pos.latitude, pos.longitude);
    }
  }, [pos]);

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Head />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Camera
                  gallery={gallery}
                  setGallery={setGallery}
                  location={location}
                />
              }
            ></Route>
            <Route
              path="/gallery"
              element={<Gallery gallery={gallery} setGallery={setGallery} />}
            ></Route>
          </Routes>

          {showModal && (
            <GeoModal>
              <h3>
                Would you let me find <br /> your location?
              </h3>
              <button
                onClick={() => {
                  setCanUseLocation(true);
                  handleClose();
                }}
              >
                Sure thing
              </button>
              <button
                onClick={() => {
                  setCanUseLocation(false);
                  handleClose();
                }}
              >
                Never!
              </button>
            </GeoModal>
          )}
        </main>
        <footer>
          <nav>
            <Nav />
          </nav>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

async function findPosition(lat, long) {
  try {
    const res = await fetch(
      `https://geocode.xyz/${lat},${long}?geoit=json&auth=446968249876491397676x26597`
    );
    const data = await res.json();
    if (data.error) {
      console.log('Could not find any data');
      return null;
    } else {
      console.log('Data found: ' + data.osmtags.name);
      return data.osmtags;
    }
  } catch (error) {
    console.log('New error found ' + error.message);
  }
}
