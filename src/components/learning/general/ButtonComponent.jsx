import { Button, Dropdown, Tooltip } from "antd";
import { Fragment } from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function ButtonComponent() {
  const items = [
    {
      key: "1",
      label: "Add",
    },
    {
      key: "2",
      label: "Edit",
    },
    {
      key: "3",
      label: "Delete",
    },
  ];
  function handleMenuClick(event) {
    console.log("Click Button");
  }
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
      <Button type="primary" size="middle">
        Default Size
      </Button>
      <Button type="primary" size="small">
        Small Size
      </Button>
      <Button type="primary" size="large">
        Large Size
      </Button>
      <hr style={{ margin: "16px 0" }} />
      {/* dropdown button */}
      <Dropdown.Button
        menu={{
          items,
          onClick: handleMenuClick,
        }}
      >
        Actions
      </Dropdown.Button>
      <hr style={{ margin: "16px 0" }} />
      {/* ghost, danger */}
      <Button type="primary" ghost>
        Ghost
      </Button>
      <Button type="danger" danger ghost>
        Danger Ghost
      </Button>
      <Button type="danger" danger>
        Danger Ghost
      </Button>
      <Button variant="outlined" color="primary">
        Ghost
      </Button>
      {/* block */}
      <hr style={{ margin: "16px 0" }} />
      <Button type="primary" block>
        Block Primary
      </Button>
      <div style={{ width: "500px"}}>
        <Button  variant="solid" color="danger" block>
          Block Danger
        </Button>
      </div>

    </Fragment>
  );
}
