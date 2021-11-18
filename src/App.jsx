import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camera from './components/Camera.jsx';
import Gallery from './components/Gallery.jsx';
import Head from './components/Head';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Head />
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Camera />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
        </main>
        <footer>
          {' '}
          <nav>
            <Nav />
          </nav>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
