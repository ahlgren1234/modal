
import './App.css';

import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {

  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/services" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
