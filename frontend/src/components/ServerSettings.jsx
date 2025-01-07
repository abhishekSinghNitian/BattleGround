// filepath: /d:/fog_assessment/battleGround_4/frontend/src/components/ServerSettings.jsx
import React, { useState, useEffect } from "react";
import "./ServerSettings.css";
import ButtonContainer from "./ButtonContainer";

const ServerSettings = ({ id }) => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
    const url = id
      ? `${BASE_URL}/api/settings/server-settings/${id}`
      : `${BASE_URL}/api/settings/server-settings`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSettings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch settings");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <ButtonContainer rating={settings.rating} />
      <div className="server-settings">
        <div className="header">
          <div className="header-item">
            <p>Ping</p>
            <p>{settings.ping} ms</p>
          </div>
          <div className="header-item">
            <p>Tickrate</p>
            <p>{settings.tickrate}</p>
          </div>
          <div className="header-item">
            <p>Players</p>
            <p>
              {settings.players.current}/{settings.players.max}
            </p>
          </div>
        </div>
        <div className="settings-container">
          <div className="settings-section">
            <h3>Settings</h3>
            <div className="settings-item">
              <span>Region:</span> <span>{settings.region}</span>
            </div>
            <div className="settings-item">
              <span>Punkbuster:</span>{" "}
              <span>{settings.punkbuster ? "On" : "Off"}</span>
            </div>
            <div className="settings-item">
              <span>Fairfight:</span>{" "}
              <span>{settings.fairfight ? "On" : "Off"}</span>
            </div>
            <div className="settings-item">
              <span>Password:</span>{" "}
              <span>{settings.password ? "On" : "Off"}</span>
            </div>
            <div className="settings-item">
              <span>Preset:</span> <span>{settings.preset}</span>
            </div>
          </div>

          <div className="settings-section">
            <h3>Advanced</h3>
            {Object.entries(settings.advanced).map(([key, value]) => (
              <div className="settings-item" key={key}>
                <span>{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</span>{" "}
                <span>{value ? "On" : "Off"}</span>
              </div>
            ))}
          </div>

          <div className="settings-section">
            <h3>Rules</h3>
            {Object.entries(settings.rules).map(([key, value]) => (
              <div className="settings-item" key={key}>
                <span>{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</span>{" "}
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerSettings;
