import React from "react";
import Select from "react-select";
import css from './StepSelector.module.css'

const options = [
  { value: 5, label: 5 },
  { value: 10, label: 10 },
  { value: 15, label: 15 },
];

const StepSelector = ({ value, onChange }) => (
    <div className={css.container}>
  <Select options={options} value={value} onChange={onChange} /></div>
);

export default StepSelector;
