import { UserOutlined } from "@ant-design/icons";
import { Col, Input, InputNumber, Select } from "antd";
import { Fragment } from "react";

const { Option } = Select;

const addOnAfter = (
  <Select>
    <Option value="USD">$</Option>
    <Option value="EUR">€</Option>
    <Option value="GBP">£</Option>
    <Option value="CNY">¥</Option>
  </Select>
);

export default function InputNumberComponent() {
  function handleChange(value) {
    console.log(value);
  }

  return (
    <Fragment>
      <InputNumber
        type="number"
        placeholder="Enter staff salary"
        size="middle"
      />
      <Col span={4}>
        <InputNumber
          placeholder="Enter staff salary"
          size="middle"
          addonAfter={addOnAfter}
          onChange={handleChange}
        />
      </Col>
      <Input
        placeholder="Enter your name"
        prefix="￥"
        addonBefore={<UserOutlined />}
      />
    </Fragment>
  );
}
