import { ColorPicker } from "antd";
import { Fragment, useState } from "react";

export default function ColorPickerComponent() {
  const [value, setValue] = useState("#fff");
  return (
    <Fragment>
      {/* basic color picker */}
      <ColorPicker defaultValue="#2a2a2a" />
      {/* size */}
      <ColorPicker size="small" defaultValue="#2c2c2c" />
      <ColorPicker size="middle" defaultValue="#f3971b" />
      <ColorPicker size="large" defaultValue="#f3971b" />
      {/* controlled color picker */}
      <ColorPicker value={value} onChange={setValue} />
      {/* disabled */}
      <ColorPicker disabled />
      {/* allow clear */}
      <ColorPicker allowClear defaultValue="#f3971b" />
    </Fragment>
  );
}
