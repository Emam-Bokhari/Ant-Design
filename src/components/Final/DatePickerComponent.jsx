import { DatePicker } from "antd";
import { Fragment } from "react";

export default function DatePickerComponent() {
  function handleDatePicker(_, dateString) {
    console.log(dateString);
  }
  return (
    <Fragment>
      {/* basic */}
      <DatePicker picker="year" />
      <DatePicker picker="month" />
      <DatePicker picker="week" />
      <DatePicker picker="date" onChange={handleDatePicker} needConfirm />
      {/* placement and size */}
      <br />
      <br />
      <DatePicker picker="year" placement="bottomLeft" size="large" />
      {/* status */}
      <DatePicker picker="date" status="error" />
      <DatePicker picker="month" disabled />
    </Fragment>
  );
}
