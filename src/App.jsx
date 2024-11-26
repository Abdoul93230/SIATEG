import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import History from './pages/History';
import AI from './pages/AI';
import ML from './pages/ML';
import DL from './pages/DL';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/ml" element={<ML />} />
            <Route path="/dl" element={<DL />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;