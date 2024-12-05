import { Flex, Radio, Space } from "antd";
import { Fragment } from "react";

export default function RadioComponent() {
  return (
    <Fragment>
      {/* basic uses */}
      <Radio>Radio</Radio>
      {/* radio group */}
      <Radio.Group>
        <Radio value="A">A</Radio>
        <Radio value="B">B</Radio>
        <Radio value="C">C</Radio>
        <Radio value="D">D</Radio>
      </Radio.Group>
      {/* vertical radio group */}
      <Radio.Group>
        <Space direction="vertical">
          <Radio value="A">A</Radio>
          <Radio value="B">B</Radio>
          <Radio value="C">C</Radio>
          <Radio value="D">D</Radio>
        </Space>
      </Radio.Group>
      {/* block */}
      <Radio.Group
        optionType="button"
        buttonStyle="solid"
        block
        defaultValue="male"
      >
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
      </Radio.Group>
      {/* size */}
      <Flex vertical gap="middle">
        <Radio.Group size="small">
          <Radio.Button value="apple">Apple</Radio.Button>
          <Radio.Button value="mango">Mango</Radio.Button>
          <Radio.Button value="jackfruit">Jackfruit</Radio.Button>
        </Radio.Group>
        <Radio.Group size="middle">
          <Radio.Button value="apple">Apple</Radio.Button>
          <Radio.Button value="mango">Mango</Radio.Button>
          <Radio.Button value="jackfruit">Jackfruit</Radio.Button>
        </Radio.Group>
        <Radio.Group size="large">
          <Radio.Button value="apple">Apple</Radio.Button>
          <Radio.Button value="mango">Mango</Radio.Button>
          <Radio.Button value="jackfruit">Jackfruit</Radio.Button>
        </Radio.Group>
      </Flex>
    </Fragment>
  );
}
