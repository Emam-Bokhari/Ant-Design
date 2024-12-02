import { DatePicker } from "antd";
import { Fragment } from "react";
const { RangePicker } = DatePicker;

export default function DatePickerComponent() {
  const value = (date, dateString) => {
    console.log(date, dateString);
  };
  const minDate = "2024-01-11";
  const disabledDate = (current) => {
    return current && current.isBefore(minDate, "day");
  };
  return (
    <Fragment>
      {/* basic date picker */}
      <DatePicker onChange={value} picker="date" />
      <DatePicker picker="month" />
      <DatePicker picker="year" />
      <DatePicker picker="quarter" />
      <DatePicker picker="week" />
      <DatePicker picker="time" />
      {/* range picker */}
      <RangePicker />
      <RangePicker picker="week" />
      <RangePicker picker="year" />
      <RangePicker picker="time" />
      {/* need confirm */}
      <RangePicker disabledDate={disabledDate} needConfirm />
      {/* variants */}
      <DatePicker variant="filled" />
      <DatePicker variant="outlined" />
      <DatePicker variant="borderless" />
      {/* size */}
      <DatePicker size="small" />
      <DatePicker size="middle" />
      <DatePicker size="large" />
      {/* disabled */}
      <DatePicker disabled />
    </Fragment>
  );
}
