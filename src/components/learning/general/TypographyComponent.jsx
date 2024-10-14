import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Typography } from "antd";
import { Fragment } from "react";
const { Text, Link } = Typography;
import { SmileFilled, SmileOutlined } from "@ant-design/icons";

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
      {/* copyable text/paragraph */}
      <br />
      <br />
      <br />
      <Text copyable>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
        praesentium maiores sunt repellat sint et aut iure aliquam adipisci
        assumenda officiis quidem, est atque veniam quibusdam eaque quam facere
        sit?
      </Text>
      <Paragraph copyable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        labore autem harum, consequuntur veniam molestias commodi error
        provident consequatur neque corrupti facere sapiente velit sed, ducimus
        voluptatum aperiam necessitatibus iure.
      </Paragraph>
      <Paragraph copyable={{ text: "Say Hello World!" }}>
        Replace a copy text
      </Paragraph>
      <Paragraph
        copyable={{
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copyed-icon" />,
          ],
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt
        id exercitationem sint corporis odio, voluptatem perferendis iste error,
        blanditiis fugit iusto alias magnam rerum totam tempore tenetur
        praesentium. Est.
      </Paragraph>
      <Paragraph
        copyable={{
          icon: [
            <SmileOutlined key="copy-icon" />,
            <SmileFilled key="copyed-icon" />,
          ],
          tooltips: ["Click Here", "You Clicked"],
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt
        id exercitationem sint corporis odio, voluptatem perferendis iste error,
        blanditiis fugit iusto alias magnam rerum totam tempore tenetur
        praesentium. Est.
      </Paragraph>
    </Fragment>
  );
}
