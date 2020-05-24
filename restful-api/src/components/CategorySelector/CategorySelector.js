import React from "react";

const CategorySelector = ({ options, value, onCategoryChange }) => (
  <select onChange={onCategoryChange}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default CategorySelector;
