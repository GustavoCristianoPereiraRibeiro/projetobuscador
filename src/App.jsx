import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { CountryDetails } from './pages/CountryDetails';
import { Favorites } from './pages/Favorites';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pais/:code" element={<CountryDetails />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;