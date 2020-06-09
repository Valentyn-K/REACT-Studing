import React from "react";
import Select from "react-select";

const options = [
  { label: "india", value: "india" },
  { label: "wales", value: "wales" },
  { label: "la", value: "la" },
];

const findOption = (value) => options.find((opt) => opt.value === value);

const TagFilter = ({ currentTag = null, onChangeTag = () => null }) => (
  <>
    <div style={{ width: 200 }}>
      <Select
        options={options}
        value={findOption(currentTag)}
        onChange={onChangeTag}
      />
    </div>
  </>
);

export default TagFilter;
