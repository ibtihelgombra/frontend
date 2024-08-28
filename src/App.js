
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Siignup from './pages/Siignup';
import Consommation from './pages/Consommation';
import Historique  from './pages/Historique';
import Contact from './pages/Contact';
import Parametres from './pages/Parametres';
import Navbar from './composants/Navbar/Navbar';
import Footer from './composants/Footer/Footer';






function App() {
  return (
    <Router>
<div className='app_container'>
  <Navbar/>
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Siignup/>} />
      <Route path="/Consommation" element={<Consommation />} />
        <Route path="/Historique" element={<Historique />} />
        <Route path="/Parametres" element={<Parametres />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" />} />
     
    
    </Routes>
  </main>
  <Footer/>
</div>
    
  </Router>
  
  );
}

export default App;
