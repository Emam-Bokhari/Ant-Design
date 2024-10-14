import { FloatButton } from "antd";
import { Fragment } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default function FloatButtonComponent() {
  return (
    <Fragment>
      {/* basic float button */}
      <FloatButton onClick={() => console.log("Click Here")} />
      {/* type */}
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{ insetInlineEnd: 94 }}
      />
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="default"
        style={{ insetInlineEnd: 166 }}
      />
    </Fragment>
  );
}
