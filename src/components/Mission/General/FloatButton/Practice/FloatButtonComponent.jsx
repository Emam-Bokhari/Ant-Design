import { SearchOutlined, UpOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { Fragment } from "react";

export default function FloatButtonComponent() {
  return (
    <Fragment>
      <div style={{ marginTop: "2000px" }}></div>
      <FloatButton
        shape="circle"
        // style={{ insetInlineEnd: 94 }}
        tooltip="Search"
        icon={<SearchOutlined />}
        type="primary"
      />
      <FloatButton
        shape="circle"
        style={{ insetInlineEnd: 94 }}
        tooltip="Search"
        description="Search"
        icon={<SearchOutlined />}
        type="primary"
      />
      <FloatButton
        shape="circle"
        style={{ insetInlineEnd: 200 }}
        badge={{ count: 5, color: "red" }}
        icon={<SearchOutlined />}
        type="primary"
      />
      <FloatButton.BackTop icon={<UpOutlined style={{ color: "red" }} />} />
    </Fragment>
  );
}
