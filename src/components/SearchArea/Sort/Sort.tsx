import React from "react";
import { Select } from "antd";

import "antd/dist/antd.css";

const { Option } = Select;

const Sort = () => {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Select
        defaultValue="relevance"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="relevance">relevance</Option>
        <Option value="newest">newest</Option>
      </Select>
    </div>
  );
};

export default Sort;
