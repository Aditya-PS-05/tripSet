import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TripPlanning from './components/TripPlanning';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-50">
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planning" element={<TripPlanning />} />
          <Route path="/contact" element={<Contact />} />
          {/* Other routes will be added later */}
        </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
}

export default App;