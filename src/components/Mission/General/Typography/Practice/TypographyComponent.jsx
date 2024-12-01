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
      {/* heading  */}
      <Title level={1}>Heading 1</Title>
      <Title level={2}>Heading 2</Title>
      <Title level={3}>Heading 3</Title>
      <Title level={4}>Heading 4</Title>
      <Title level={5}>Heading 5</Title>
      {/* text */}
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A perferendis,
        numquam, nobis voluptate deserunt illum id voluptas, ipsum laboriosam
        vero beatae mollitia. Nulla voluptatum aut aliquid quae distinctio
        accusamus nemo?
      </Text>
      <br />
      <Text type="success">Success</Text>
      <br />
      <Text type="danger">Danger</Text>
      <br />
      <Text type="secondary">Secondary</Text>
      <br />
      <Text type="warning">Warning</Text>
      <br />
      <Text mark>Mark</Text>
      <br />
      <Text italic>Italic</Text>
      <br />
      <Text strong>Strong</Text>
      <br />
      <Text keyboard>Keyboard</Text>
      <br />
      <Text underline>Underline</Text>
      <br />
      <Text delete>Delete</Text>
      <br />
      <Link href="https:moshfiqur-rahman.vercel.app">Portfolio</Link>
      {/* copyable text */}
      <Paragraph copyable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        debitis officiis earum pariatur illum quam. Quibusdam quidem similique,
        tempora illo consectetur aperiam amet corporis, cumque atque dicta eius
        beatae porro!
      </Paragraph>
      <Paragraph
        copyable={{
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copyed-icon" />,
          ],
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        debitis officiis earum pariatur illum quam. Quibusdam quidem similique,
        tempora illo consectetur aperiam amet corporis, cumque atque dicta eius
        beatae porro!
      </Paragraph>
      <Paragraph
        copyable={{
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copyed-icon" />,
          ],
          tooltips: ["Click to copy", "Copyed"],
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        debitis officiis earum pariatur illum quam. Quibusdam quidem similique,
        tempora illo consectetur aperiam amet corporis, cumque atque dicta eius
        beatae porro!
      </Paragraph>
    </Fragment>
  );
}
