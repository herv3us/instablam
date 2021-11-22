import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Camera from './components/Camera.jsx';
import Gallery from './components/Gallery.jsx';
import Head from './components/Head';
import Nav from './components/Nav';

function App() {
  const [gallery, setGallery] = useState([
    {
      src: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
      position: 'Göteborg',
      date: '2021-11-18',
      id: nanoid(10),
    },
    {
      src: 'https://images.unsplash.com/photo-1455762279210-ae6b56c7ad7d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
      position: 'Lund',
      date: '2021-11-18',
      id: nanoid(10),
    },
  ]);

  // const [canUseLocation, setCanUseLocation] = useState(false);
  // const [pos, setPos] = useState(null);

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     const geo = navigator.geolocation;
  //     geo.getCurrentPosition((pos) => {
  //       setPos(pos.coords);
  //       setCanUseLocation(true);
  //     });
  //     console.log(pos);
  //   }
  // }, []);

  // async function findPosition(lat, long) {
  //   try {
  //     const res = await fetch(
  //       `https://geocode.xyz/${lat},${long}?geoit=json&auth=446968249876491397676x26597`
  //     );
  //     const data = await res.json();
  //     if (data.error) {
  //       console.log('Could not find any data');
  //       return null;
  //     }
  //     console.log('Data found: ' + data);
  //   } catch (error) {
  //     console.log('New error found', +error.message);
  //   }
  // }

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
              element={<Camera gallery={gallery} setGallery={setGallery} />}
            ></Route>
            <Route
              path="/gallery"
              element={<Gallery gallery={gallery} setGallery={setGallery} />}
            ></Route>
          </Routes>
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

async function onSuccess(pos) {
  console.log('Current position: ', +pos);
  const adress = await findPosition(pos.coords.latitude, pos.coords.longitude);
  console.log('Här är de undefined? ', +adress);
}
