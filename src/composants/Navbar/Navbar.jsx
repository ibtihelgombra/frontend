import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import user from './images/user.jpg'; 
import LOGO from './images/LOGO.PNG'; 


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LOGO} alt="Logo" /> 
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/consommation">Consommation</Link></li>
        <li><Link to="/historique">Historique</Link></li>
        <li><Link to="/parametres">Paramètres</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-actions">
      {localStorage.getItem('auth-token')? <button onClick={()=> {localStorage.removeItem('auth-token');
                window.location.replace('/')}} className='login-button'>Se déconnecter</button> :  <Link to='/login'>
                <button className='login-button'>Se connecter</button>
              </Link>  }
              <div className="user-icon">
          <img src={user} alt="User" />
        </div>
      </div>
      
    </nav>
  );
}

export default Navbar;
