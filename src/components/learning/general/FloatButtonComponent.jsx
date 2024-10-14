import { FloatButton } from "antd";
import { Fragment } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { CustomerServiceOutlined } from '@ant-design/icons';

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
      {/* shape */}
      <FloatButton icon={<CustomerServiceOutlined/>} type="default" shape="square" style={{insetInlineEnd:240}} />
      <FloatButton icon={<CustomerServiceOutlined/>} type="default" shape="circle" style={{insetInlineEnd:315}} />
    </Fragment>
  );
}
