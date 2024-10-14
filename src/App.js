// src/App.js
import React, { useState } from 'react';
import './App.css';
import BurgerBuilder from './components/BurgerBuilder';
import HomePage from './HomePage';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Example function to add ingredients, replace this with actual logic
  const addIngredient = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  return (
    <div className="App">
      <div className="scroll-container">
        <HomePage />
        <div className="layout">
          <BurgerBuilder ingredients={selectedIngredients} />
          <div className="main-content">
            {/* Other pages would go here */}
            {/* E.g., AboutPage, SkillsPage, etc. */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
