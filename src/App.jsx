import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<home/>} />
            <Route path="/pais/:code" element={<CountryDetails />} />
            <Route path="/favoritos" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;