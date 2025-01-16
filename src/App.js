import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; 

import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Newsletter from './pages/Newsletter/Newsletter';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
