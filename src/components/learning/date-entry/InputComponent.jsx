import { Input } from "antd";
import { Fragment } from "react";

export default function InputComponent() {
  return (
    <Fragment>
      <Input placeholder="Enter Your Name " />
      {/* size */}
      <Input placeholder="small" size="small" />
      <Input placeholder="middle" size="middle" />
      <Input placeholder="large" size="large" />
    </Fragment>
  );
}
