import { Button, Tooltip } from "antd";
import { Fragment } from "react";
import { SearchOutlined } from "@ant-design/icons";

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
      <hr style={{ margin: "16px 0" }} />
      {/* icon */}
      <Tooltip title="Search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Tooltip title="Search">
        <Button type="primary" iconPosition="start" icon={<SearchOutlined />}>
          Search
        </Button>
      </Tooltip>
      <Tooltip title="Search">
        <Button type="primary" iconPosition="end" icon={<SearchOutlined />}>
          Search
        </Button>
      </Tooltip>
      <Tooltip title="Loading">
        <Button type="primary" loading>
          Loading
        </Button>
      </Tooltip>
      <hr style={{ margin: "16px 0" }} />
      {/* disabled */}
      <Button type="primary" disabled>
        Primary Disabled
      </Button>
      <Button type="link" disabled>
        Link Disabled
      </Button>
      <Button type="text" disabled>
        Text Disabled
      </Button>
      <hr style={{ margin: "16px 0" }} />
    </Fragment>
  );
}
