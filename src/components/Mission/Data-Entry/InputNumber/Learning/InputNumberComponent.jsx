import { ClockCircleFilled, DollarCircleFilled } from "@ant-design/icons";
import { InputNumber } from "antd";
import { Fragment } from "react";

export default function InputNumberComponent() {
  return (
    <Fragment>
      {/* basic uses */}
      <InputNumber />
      <InputNumber defaultValue={0} />
      <InputNumber min={0} max={5} />
      {/* size */}
      <InputNumber size="small" />
      <InputNumber size="middle" />
      <InputNumber size="large" />
      {/* addonbefore/addonafter */}
      <InputNumber
        addonBefore={<DollarCircleFilled />}
        style={{ width: "250px" }}
      />
      <InputNumber
        addonBefore={<DollarCircleFilled />}
        style={{ width: "250px" }}
      />
      {/* status */}
      <InputNumber status="error" prefix={<ClockCircleFilled />} />
    </Fragment>
  );
}
