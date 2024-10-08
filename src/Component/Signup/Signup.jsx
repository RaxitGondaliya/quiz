import './App.css';
import './index.css';
import Navbar from './Component/Header/Navbar';
import Footer from './Component/Footer/Footer';
import Card from './Component/Body/Card';
import Signup from './Component/Signup/Signup'; // Import Signup component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Card />} />
        <Route path="/signup" element={<Signup />} />
        {/* Add more routes here for other pages if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
