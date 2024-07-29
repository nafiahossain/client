import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Parent from './parent.jsx'
import NotFound from './notfound.jsx';
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/hotel/:hotelSlug" element={<Parent />} />
          {/* Other routes */}
          <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
        </Routes>
      </Router>
  );
}

export default App;