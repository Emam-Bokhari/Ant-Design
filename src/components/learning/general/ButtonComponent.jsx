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
      <hr style={{ margin: "16px 0" }} />
      {/* variant and color */}
      <Button color="primary" variant="solid">
        Solid
      </Button>
      <Button color="danger" variant="dashed">
        Dashed
      </Button>
      <Button color="primary" variant="filled">
        Filled
      </Button>
      <Button color="danger" variant="link">
        Link
      </Button>
      <Button color="primary" variant="outlined">
        Outlined
      </Button>
      <Button color="danger" variant="text">
        Text
      </Button>
    </Fragment>
  );
}
