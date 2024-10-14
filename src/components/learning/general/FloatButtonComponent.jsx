import { FloatButton } from "antd";
import { Fragment } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { FileTextOutlined } from "@ant-design/icons";

export default function FloatButtonComponent() {
  return (
    <Fragment>
     <div style={{height:"300vh"}} >
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore velit architecto nihil consequatur qui facere, nulla atque ad eligendi, vel commodi sequi saepe accusantium nam libero asperiores nostrum veritatis. Fuga!</p>
       {/* basic float button */}
       <FloatButton onClick={() => console.log("Click Here")} />
      {/* type */}
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{ insetInlineEnd: 560 }}
      />
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="default"
        style={{ insetInlineEnd: 166 }}
      />
      {/* shape */}
      <FloatButton
        icon={<CustomerServiceOutlined />}
        type="default"
        shape="square"
        style={{ insetInlineEnd: 240 }}
      />
      <FloatButton
        icon={<CustomerServiceOutlined />}
        type="default"
        shape="circle"
        style={{ insetInlineEnd: 315 }}
      />
      {/* description */}
      <FloatButton
        icon={<FileTextOutlined />}
        style={{ insetInlineEnd: 415 }}
        type="primary"
        description="HTML"
      />
      {/* tooltip */}
      <FloatButton
        tooltip="Custeomer Service"
        icon={<CustomerServiceOutlined />}
        style={{ insetInlineEnd: 480 }}
      />
      {/* backtop */}
      <FloatButton.BackTop  />
     </div>
    </Fragment>
  );
}
