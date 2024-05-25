import React, { useState } from 'react';

const themes = [
  { backgroundColor: '#DDEEED', bubbleColor: '#FDF1E0' },
  { backgroundColor: '#FFCCCC', bubbleColor: '#660000' },
  { backgroundColor: '#CCFFCC', bubbleColor: '#006600' },
  { backgroundColor: '#CCCCFF', bubbleColor: '#000066' },
];

const ThemeCycler = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => {
    const newIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(newIndex);
    document.documentElement.style.setProperty('--background-color', themes[newIndex].backgroundColor);
    document.documentElement.style.setProperty('--bubble-color', themes[newIndex].bubbleColor);
  };

  return (
    <div className="container">
      <h1>Cycle Color Themes</h1>
      <button onClick={cycleTheme}>Change Theme</button>
      <div className="bubble"></div>
    </div>
  );
};

export default ThemeCycler;
