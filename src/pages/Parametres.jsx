import React, { useState } from 'react';
import './Parametres.css'; // Assure-toi de créer un fichier CSS correspondant

function Settings() {
  const [preferences, setPreferences] = useState({
    energySavingMode: false,
    notifications: true,
  });

  const [userAccount, setUserAccount] = useState({
    username: 'votre Nom',
    email: 'Votre mail',
  });

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleAccountChange = (e) => {
    const { name, value } = e.target;
    setUserAccount((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="settings">
      <h1>Paramètres</h1>

      <div className="settings-section">
        <h2>Préférences</h2>
        <div className="settings-item">
          <label>
            Mode Économie d'énergie
            <input
              type="checkbox"
              name="energySavingMode"
              checked={preferences.energySavingMode}
              onChange={handlePreferenceChange}
            />
          </label>
        </div>
        <div className="settings-item">
          <label>
            Notifications
            <input
              type="checkbox"
              name="notifications"
              checked={preferences.notifications}
              onChange={handlePreferenceChange}
            />
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Alertes</h2>
        {/* Ajoute ici des paramètres pour les alertes */}
      </div>

      <div className="settings-section">
        <h2>Compte Utilisateur</h2>
        <div className="settings-item">
          <label>
            Nom d'utilisateur
            <input
              type="text"
              name="username"
              value={userAccount.username}
              onChange={handleAccountChange}
            />
          </label>
        </div>
        <div className="settings-item">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={userAccount.email}
              onChange={handleAccountChange}
            />
          </label>
        </div>
        <button className="save-button">Enregistrer les modifications</button>
      </div>
    </div>
  );
}

export default Settings;
