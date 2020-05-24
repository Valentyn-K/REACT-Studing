import React from "react";
import Select from "react-select";

const CategorySelector = ({ categories, onChange, value }) => (
  <Select
    options={categories}
    isClearable={true}
    onChange={onChange}
    value={value}
  />
);

export default CategorySelector;
