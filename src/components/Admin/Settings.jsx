// Settings.js
import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="setting-item">
        <label>Notifications</label>
        <input
          type="checkbox"
          checked={settings.notifications}
          onChange={() => handleToggle("notifications")}
        />
      </div>
      <div className="setting-item">
        <label>Dark Mode</label>
        <input
          type="checkbox"
          checked={settings.darkMode}
          onChange={() => handleToggle("darkMode")}
        />
      </div>
    </div>
  );
}

export default Settings;
