import React from "react";
import { Select } from "antd";

import "antd/dist/antd.css";

const { Option } = Select;

const Filters = () => {
  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  return (
    <div>
      <Select defaultValue="all" style={{ width: 120 }} onChange={handleChange}>
        <Option value="all">all</Option>
        <Option value="art">art</Option>
        <Option value="biography">biography</Option>
        <Option value="computers">computers</Option>
        <Option value="history">history</Option>
        <Option value="medical">medical</Option>
        <Option value="poetry">poetry</Option>
      </Select>
    </div>
  );
};

export default Filters;
