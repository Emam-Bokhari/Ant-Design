import { FloatButton } from "antd";
import { Fragment } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default function FloatButtonComponent() {
  return (
    <Fragment>
      {/* basic float button */}
      <FloatButton />
      {/* type and icon */}
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{ marginRight: 50 }}
      />
      {/* shape */}
      <FloatButton shape="square" style={{ marginRight: 100 }} />
      <FloatButton shape="circle" style={{ marginRight: 150 }} />
      {/* description */}
      <FloatButton
        description="Q&A"
        type="primary"
        icon={<QuestionCircleOutlined />}
        style={{ marginRight: 200 }}
      />
      {/* tooltip */}
      <FloatButton tooltip="Q&A" style={{ marginRight: 250 }} />
      {/* group */}
      <FloatButton.Group trigger="hover" style={{ marginRight: 300 }}>
        <FloatButton />
        <FloatButton icon={<QuestionCircleOutlined />} type="primary" />
        <FloatButton />
      </FloatButton.Group>
      {/* backtop */}
      <FloatButton.BackTop />
      {/* badge */}
      <FloatButton
        type="primary"
        icon={<QuestionCircleOutlined />}
        style={{ marginRight: 350 }}
        badge={{ count: 3 }}
      />
    </Fragment>
  );
}
