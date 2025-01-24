import { Col, Divider, Row, Space } from "antd";
import { Fragment } from "react";

export default function GridComponent() {
  return (
    <Fragment>
      <Divider orientation="left">Col-24</Divider>
      <Row>
        <Col
          span={24}
          style={{
            backgroundColor: "#5099ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          Col
        </Col>
      </Row>

      <Divider orientation="left">Col-12</Divider>
      <Row>
        <Col
          span={12}
          style={{
            backgroundColor: "#5099ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          Col-12
        </Col>

        <Col
          span={12}
          style={{
            backgroundColor: "#1677ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          Col-8
        </Col>
      </Row>

      <Divider orientation="left">Col-8</Divider>
      <Row>
        <Col
          span={8}
          style={{
            backgroundColor: "#5099ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          Col-12
        </Col>
        <Col
          span={8}
          style={{
            backgroundColor: "#1677ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          Col-8
        </Col>
        <Col
          span={8}
          style={{
            backgroundColor: "#5099ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          Col-8
        </Col>
      </Row>

      <Divider orientation="left">Offset-8</Divider>

      <Row>
        <Col
          span={8}
          //   offset={8}
          style={{
            backgroundColor: "#5099ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          col-8
        </Col>
        <Col
          span={8}
          offset={8}
          style={{
            backgroundColor: "#1677ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          col-8
        </Col>
      </Row>
      <Divider orientation="left">Offset-6</Divider>
      <Row>
        <Col
          span={6}
          offset={6}
          style={{
            backgroundColor: "#1677ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          col-6 col-offset-6
        </Col>
        <Col
          span={6}
          offset={6}
          style={{
            backgroundColor: "#5099ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          col-6 col-offset-6
        </Col>
      </Row>
      <Divider orientation="left">Offset-6</Divider>
      <Row>
        <Col
          span={12}
          offset={6}
          style={{
            backgroundColor: "#5099ff",
            padding: 8,
            textAlign: "center",
          }}
        >
          col-12 col-offset-6
        </Col>
      </Row>
    </Fragment>
  );
}
