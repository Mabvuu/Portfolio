// src/components/ThemeSwitcher.js
import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (bun) => {
    if (bun === 'wheat') setTheme('light');
    else if (bun === 'black') setTheme('dark');
    else if (bun === 'avocado') setTheme('green');
  };

  return (
    <div className={`theme-${theme}`}>
      <h2>Select Your Bun:</h2>
      <button onClick={() => handleThemeChange('wheat')}>Wheat Bun</button>
      <button onClick={() => handleThemeChange('black')}>Black Bun</button>
      <button onClick={() => handleThemeChange('avocado')}>Avocado Bun</button>
      {/* Apply styles based on selected theme */}
    </div>
  );
};

export default ThemeSwitcher;
