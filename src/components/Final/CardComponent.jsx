import { Card, Col, Image, Row } from "antd";
import { Fragment } from "react";
import creditCard from "../../assets/icon/creditCard.png";
import freeDelivery from "../../assets/icon/freeDelivery.png";
import helpDesk from "../../assets/icon/helpDesk.png";

const data = [
  {
    image: freeDelivery,
    title: "Free Shipping",
    key: "1",
    description:
      "Our free shipping policy applies to all orders, regardless of order value or destination.",
  },
  {
    image: creditCard,
    title: "Secure Payments",
    key: "2",
    description:
      "Your payment is always safe, secure, and protected at all times.",
  },
  {
    image: helpDesk,
    title: "Support Online 24/7",
    key: "3",
    description:
      "We are available 24/7 to assist you with any questions or issues you may have.",
  },
];

export default function CardComponent() {
  return (
    <Fragment>
      <Row
        gutter={[20, 20]}
        style={{ maxWidth: "1200px", margin: "50px auto" }}
      >
        {data.map((item) => (
          <Col key={item.key} xs={24} md={12} lg={8}>
            <Card style={{ height: "220px", textAlign: "center" }}>
              <Image
                src={item.image}
                preview={false}
                width={60}
                style={{ margin: "0 auto" }}
              />
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "10px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#B2B2B2", fontSize: "15px" }}>
                {item.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
