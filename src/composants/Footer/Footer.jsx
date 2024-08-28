import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';
import LOGO from './images/LOGO.PNG';  
import linkedin from './images/linkedin.png';
import twetter from './images/twetter.png';
import youtube from './images/youtube.png';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-left">
          <img src={LOGO} alt="GreenLaz Logo" className="footer-logo" />
          <p className="footer-description">
            GreenLaz une application de gestion de l'énergie domestique qui permet aux utilisateurs de suivre la consommation d'énergie en temps réel... 
            <span className="read-more">Lire la suite</span>
          </p>
        </div>
      
        <div className="footer-column footer-middle">
          <ul className="footer-nav">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/consommation">Consommation</Link></li>
            <li><Link to="/historique">Historique</Link></li>
            <li><Link to="/parametres">Paramètres</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      
        <div className="footer-column footer-right">
          <p className="footer-title">GreenLaz</p>
          <p>Ghormassen</p>
          <p>+216*********</p>
          <p><a href="mailto:info@greenlaz.com">info@greenlaz.com</a></p>
          <div className="footer-social">
            <a href="#linkedin"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#twetter"><img src={twetter} alt="Twitter" /></a>
            <a href="#youtube"><img src={youtube} alt="YouTube" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 GreenLaz. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;