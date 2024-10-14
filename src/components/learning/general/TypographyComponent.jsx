import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Typography } from "antd";
import { Fragment } from "react";
const { Text, Link } = Typography;

export default function TypographyComponent() {
  return (
    <Fragment>
      {/* heading */}
      <Title>Heading 1</Title>
      <Title level={2}>Heading 2</Title>
      <Title level={3}>Heading 3</Title>
      <Title level={4}>Heading 4</Title>
      <Title level={5}>Heading 5</Title>
      {/* multiple types */}
      <Text>Ant Design</Text>
      <br />
      <Text type="secondary">Ant Design secondary</Text>
      <br />
      <Text type="danger">Ant Design danger</Text>
      <br />
      <Text type="success">Ant design success</Text>
      <br />
      <Text type="warning">Ant design warning</Text>
      <br />
      <Text disabled>Ant Design disabled</Text>
      <br />
      <Text mark>Ant Design mark</Text>
      <br />
      <Text code>Ant Design code</Text>
      <br />
      <Text keyboard>Ant Design keyboard</Text>
      <br />
      <Text underline>Ant Design underline</Text>
      <br />
      <Text italic>Ant Design italic</Text>
      <br />
      <Text strong>Ant Design strong</Text>
      <br />
      <Text delete>Ant Design delete</Text>
      <br />
      <Link href="https://google.com" target="_blank">
        Ant Design link
      </Link>
    </Fragment>
  );
}
