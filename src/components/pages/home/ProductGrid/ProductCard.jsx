import { Card, Rate, theme, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

const ProductCard = ({ title, imageUrl, price, toppings, unit = "$" }) => {
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
          src={imageUrl}
        />
      }
    >
      <Rate style={{ fontSize: 13 }} />
      <Meta title={title} description={toppings} />
      <Text style={{ color: token.colorPrimary, fontWeight: "bold" }}>
        {unit}
        {price}
      </Text>
    </Card>
  );
};

export default ProductCard;
