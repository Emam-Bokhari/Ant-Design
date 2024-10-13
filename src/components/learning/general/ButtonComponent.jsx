import { Button } from "antd";
import { Fragment } from "react";

export default function ButtonComponent() {
  return (
    <Fragment>
      {/* button type */}
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
      <Button type="primary">Primary</Button>
      <Button type="text">Text</Button>
    </Fragment>
  );
}
