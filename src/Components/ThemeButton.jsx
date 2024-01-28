import React, { useContext, useState } from "react";
import "./CSS/button.css";
import { ThemeContext } from "../App";

function ThemeButton() {
    
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
      <div>
        <button
          className="themebttn"
          aria-label="Toggle color mode"
          title="Toggle color mode"
          onClick={toggleTheme}
        >
          <div className={`sun ${theme === 'light' ? 'visible' : ''}`}></div>
          <div className={`moon ${theme === 'dark' ? 'visible' : ''}`}>
            <div className="star"></div>
            <div className="star small"></div>
          </div>
        </button>
      </div>
    );
  }
  
  export default ThemeButton;