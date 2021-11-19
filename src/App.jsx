import { useState } from 'react';
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
      position: 'Göteborg',
      date: '2021-11-18',
      id: nanoid(10),
    },
  ]);

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
              element={<Gallery gallery={gallery} />}
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
