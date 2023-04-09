import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Kikepzok from './pages/Kikepzok';
import Galeria from './pages/Galeria';
import Elerhetoseg from './pages/Elerhetoseg';
import Aszf from './pages/Aszf';
import Panzio from './pages/Panzio';
import Hirek from './pages/Hirek';
import Partnerek from './pages/Partnerek';


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kikepzok" element={<Kikepzok />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/elerhetoseg" element={<Elerhetoseg />} />
        <Route path="/aszf" element={<Aszf />} />
        <Route path="/panzio" element={<Panzio />} />
        <Route path="/hirek" element={<Hirek />} />
        <Route path="/partnerek" element={<Partnerek />} />
      </Routes>
    </>
  );
}

export default App;
