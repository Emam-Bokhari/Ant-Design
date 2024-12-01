import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { Fragment } from "react";

export default function ButtonComponent() {
  return (
    <Fragment>
      {/* button type */}
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="default">Default</Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
      {/* variant */}
      <Button variant="dashed" color="primary">
        Dashed
      </Button>
      <Button variant="solid" color="default">
        Solid
      </Button>
      <Button variant="outlined" color="default">
        Outline
      </Button>
      <Button variant="filled" color="default">
        Filled
      </Button>
      <Button variant="link" color="default">
        Link
      </Button>
      <Button variant="text" color="default">
        Text
      </Button>
      {/* size */}
      <Button size="small">Small</Button>
      <Button size="middle">Medium</Button>
      <Button size="large">Large</Button>
      {/* button with icon */}
      <Tooltip title="Search">
        <Button icon={<SearchOutlined />}>Search</Button>
      </Tooltip>
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      <Button
        variant="dashed"
        color="primary"
        shape="circle"
        icon={<SearchOutlined />}
      />
      {/* disabled */}
      <Button type="primary" disabled>
        Disabled
      </Button>
    </Fragment>
  );
}
