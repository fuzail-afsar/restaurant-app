import { Button, Card, Col, Rate, Row, theme, Typography } from "antd";
import Meta from "antd/es/card/Meta";

import React from "react";

const ProductCard = ({ id, title, thumbnail, price, onDeleteHandler }) => {
  const { Text } = Typography;
  const { token } = theme.useToken();
  return (
    <Card
      bordered={false}
      bodyStyle={{
        paddingLeft: 0,
        paddingRight: 0,
        boxShadow: "none",
      }}
      style={{
        boxShadow: "none",
      }}
      cover={
        <img
          style={{ height: 270, objectFit: "cover" }}
          alt={title}
          src={thumbnail}
        />
      }
    >
      <Rate style={{ fontSize: 13 }} />
      <br />
      <Meta title={title} />
      <Row justify="space-between">
        <Col>
          <Text style={{ color: token.colorPrimary, fontWeight: "bold" }}>
            RS: {price}
          </Text>
        </Col>
        <Col>
          <Button type="primary" onClick={() => onDeleteHandler(id)}>
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
