import { Button, Dropdown, Flex } from "antd";
import { Fragment } from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function ButtonComponent() {
  const menuItems = [
    {
      key: 1,
      label: "Add",
    },
    {
      key: 2,
      label: "Edit",
    },
    {
      key: 3,
      label: "Delete",
    },
  ];
  function onMenuClick() {
    console.log("Click here");
  }
  return (
    <Fragment>
      {/* type */}
      <Flex gap={10}>
        <Button type="primary">Primary Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="link">Link Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="default">Default Button</Button>
      </Flex>
      {/* variant */}
      <Flex gap={20}>
        <Button color="default" variant="solid">
          Variant Solid
        </Button>
        <Button color="primary" variant="dashed">
          Variant Dashed
        </Button>
        <Button color="danger" variant="filled">
          Variant Filled
        </Button>
        <Button color="primary" variant="outlined">
          Variant Filled
        </Button>
        <Button color="danger" variant="link">
          Variant Link
        </Button>
        <Button color="danger" variant="text">
          Variant Text
        </Button>
      </Flex>
      {/* icon position */}
      <Flex gap={20}>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button type="primary" shape="circle">
          <SearchOutlined />
        </Button>
        <Button variant="outlined" icon={<SearchOutlined />}>
          Search
        </Button>
        <Button icon={<SearchOutlined />} shape="circle" />
        <Button type="primary" loading>
          Loading
        </Button>
      </Flex>
      {/* size */}
      <Flex gap={20}>
        <Button type="primary" size="small">
          Small
        </Button>
        <Button type="primary" size="middle">
          Middle
        </Button>
        <Button type="primary" size="large">
          Large
        </Button>
      </Flex>
      {/* disabled */}
      <Button type="primary" disabled>
        Disabled
      </Button>
      {/* dropdown */}
      <Dropdown.Button
        menu={{
          items: menuItems,
          onClick: onMenuClick,
        }}
      >
        Actions
      </Dropdown.Button>
    </Fragment>
  );
}
