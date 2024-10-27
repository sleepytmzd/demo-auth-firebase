import React, { useState } from "react";
import axios from "axios";

const ConfigDemo = ({modalbgColor, title, themeColor, welcomeMessage}) => {
    return (
        <div>
        <div className={`border border-gray-300 h-[500px] w-[500px] border rounded-lg`} style={{ backgroundColor: modalbgColor }}>
          <h2 className="p-10 text-lg">{title}</h2>
          <div className="border border-gray-300 h-[350px] w-[450px] rounded-lg ml-7 overflow-y-scroll" style={{ backgroundColor: themeColor }}>
            <p className="p-5 text-lg mb-4">{welcomeMessage}</p>
            <div className="h-[150px] p-4">
              <p>User: Hi! Help me</p>
              <p>AI: Sure!</p>
            </div>
            <div className="flex flex-rows mt-20 ml-4">
              <input type="text" className="bg-gray-100 w-[300px]"/>
              <button className="btn btn-primary ml-4 bg-gray-100 text-gray-900">Send</button>
            </div>
          </div>
          <button className="btn btn-primary flex flex-rows ml-auto mr-5 mt-2 bg-gray-100 text-gray-900">Close</button>
        </div>
      </div>
    )
};

export default ConfigDemo;