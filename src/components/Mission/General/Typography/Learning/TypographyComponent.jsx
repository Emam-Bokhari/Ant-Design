import Title from "antd/es/typography/Title";
import { Fragment } from "react";
import { Typography } from "antd";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import { SmileFilled, SmileOutlined } from "@ant-design/icons";
const { Text } = Typography;
export default function TypographyComponent() {
  return (
    <Fragment>
      <Title level={1}>Heading 1</Title>
      <Title level={2}>Heading 2</Title>
      <Title level={3}>Heading 3</Title>
      <Title level={4}>Heading 4</Title>
      <Title level={5}>Heading 5</Title>

      {/* text */}
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />

      <Text type="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text type="success">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text type="danger">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text type="warning">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text disabled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text mark>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text code>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text keyboard>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text underline>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text delete>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Text italic>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        corporis.
      </Text>
      <br />
      <br />
      <Link href="#">Click Here</Link>
      <br />
      <br />

      {/* copyable */}
      <Paragraph copyable={{}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, earum.
      </Paragraph>

      <Paragraph
        copyable={{
          tooltips: ["Click Here", "You Clicked"],
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, earum.
      </Paragraph>

      <Paragraph
        copyable={{
          tooltips: ["Click Here", "You Clicked"],
          text: ["Not Copy!"],
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, earum.
      </Paragraph>

      <Paragraph
        copyable={{
          tooltips: ["Click Here", "You Clicked"],
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copied-icon" />,
          ],
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, earum.
      </Paragraph>
    </Fragment>
  );
}
