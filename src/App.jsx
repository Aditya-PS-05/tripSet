import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TripPlanning from './components/TripPlanning';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<TripPlanning />} />
          <Route path="/contact" element={<Contact />} />
          {/* Other routes will be added later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;