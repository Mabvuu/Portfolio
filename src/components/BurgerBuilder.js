// src/components/BurgerBuilder.js
import React from 'react';

const BurgerBuilder = ({ ingredients }) => {
  return (
    <div className="burger-builder">
      <h2>Build Your Burger</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerBuilder;
