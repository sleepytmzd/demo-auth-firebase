import React, { useState } from "react";
import axios from "axios";

const ConfigInput = ({handleSubmit, title, setTitle, modalbgColor, setModalbgColor, welcomeMessage, setWelcomeMessage, themeColor, setThemeColor, scriptUrl}) => {
    return (
        <div className="m-4">
        <h1 className="m-4">Chat Plugin Configurator</h1>

        <div className="p-4">
          <form onSubmit={handleSubmit}>
          <div>
              <label className="p-4">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter chat title"
                className="p-2"
              />
            </div>

            <div>
              <label className="p-4">Outer theme Color:</label>
              <input
                type="text"
                value={modalbgColor}
                onChange={(e) => setModalbgColor(e.target.value)}
                placeholder="Enter outer theme color"
                className="p-2"
              />
            </div>

            <div>
              <label className="p-4">Welcome Message:</label>
              <input
                type="text"
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                placeholder="Enter welcome message"
                className="p-2"
              />
            </div>

            <div>
              <label className="p-4">Inner theme color:</label>
              <input
                type="text"
                value={themeColor}
                onChange={(e) => setThemeColor(e.target.value)}
                placeholder="Enter inner theme color"
                className="p-2"
              />
            </div>

            <button type="submit" className="m-4 btn btn-primary">Generate Chat Plugin</button>
        </form>
        </div>

        {scriptUrl && (
          <div>
            <h2>Your Chat Plugin URL:</h2>
            <a href={scriptUrl} target="_blank" rel="noopener noreferrer">
              {scriptUrl}
            </a>
          </div>
        )}
      </div>
    )
};

export default ConfigInput;