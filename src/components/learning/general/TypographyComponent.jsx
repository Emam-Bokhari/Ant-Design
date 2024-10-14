import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Typography } from 'antd';
import { Fragment } from "react";
const { Text } = Typography;

export default function TypographyComponent() {
  return (
    <Fragment>
      <Title>Heading 1</Title>
      <Title level={2}>Heading 2</Title>
      <Title level={3}>Heading 3</Title>
      <Title level={4}>Heading 4</Title>
      <Title level={5}>Heading 5</Title>
    </Fragment>
  );
}
