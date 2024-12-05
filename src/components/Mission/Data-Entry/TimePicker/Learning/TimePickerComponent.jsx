import { TimePicker } from "antd";
import { Fragment } from "react";
import dayjs from "dayjs";
import { ClockCircleFilled } from "@ant-design/icons";
const { RangePicker } = TimePicker;

export default function TimePickerComponent() {
  const format = "HH:mm";
  const format2 = "mm:ss";
  return (
    <Fragment>
      {/* basic uses */}
      <TimePicker />
      {/* size */}
      <TimePicker size="small" />
      <TimePicker size="middle" />
      <TimePicker size="large" />
      {/* neddConcfirm and disabled */}
      <TimePicker needConfirm />
      <TimePicker disabled />
      {/* format */}
      <TimePicker defaultValue={dayjs("12:08", format)} format={format} />
      <TimePicker placeholder="mm:ss" format={format2} />
      <TimePicker format="HH:mm:ss:a" />
      {/* use 12 hours */}
      <TimePicker use12Hours />
      {/* range picker and variants */}
      <RangePicker />
      <TimePicker variant="borderless" />
      <TimePicker variant="filled" />
      <TimePicker variant="outlined" />
      {/* sufix,prefix */}
      <TimePicker suffixIcon={<ClockCircleFilled />} />
      {/* status */}
      <TimePicker status="error" />
      <TimePicker status="warning" />
    </Fragment>
  );
}
