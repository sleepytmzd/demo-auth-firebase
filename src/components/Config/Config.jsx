import React, { useState } from "react";
import axios from "axios";
import ConfigInput from "./ConfigInput";
import ConfigDemo from "./ConfigDemo";

const Config = () => {
  const [themeColor, setThemeColor] = useState("");
  const [title, setTitle] = useState("");
  const [modalbgColor, setModalbgColor] = useState("")
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [scriptUrl, setScriptUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/create", {
        themeColor,
        title,
        modalbgColor,
        welcomeMessage,
      });

      if (response.data.scriptUrl) {
        setScriptUrl(response.data.scriptUrl); // Update with generated script URL
      }
    } catch (error) {
      console.error("Error submitting chat configuration:", error);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-20">
      <ConfigInput 
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
        modalbgColor={modalbgColor}
        setModalbgColor={setModalbgColor}
        welcomeMessage={welcomeMessage}
        setWelcomeMessage={setWelcomeMessage}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
        scriptUrl={scriptUrl}
      />

      <ConfigDemo 
        title={title}
        modalbgColor={modalbgColor}
        themeColor={themeColor}
        welcomeMessage={welcomeMessage}
      />

    </div>
  );
};

export default Config;
