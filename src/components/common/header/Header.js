import Container from "../container/Container";
import { Col, Row, theme, Typography, Menu, Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./Header.css";

const headerMenu = [
  { label: "Home", key: "" },
  { label: "Cart", key: "cart" },
  { label: "Sign In", key: "signin" },
];
const Header = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  return (
    <header style={{ background: token.colorPrimary }}>
      <Container>
        <Row justify="center" align="middle">
          <Col
            span={6}
            style={{
              backgroundColor: token.colorSuccess,
              textAlign: "center",
            }}
          >
            <Link to="/">
              <Typography.Title level={3} style={{ marginTop: 10 }}>
                Restaurant App
              </Typography.Title>
            </Link>
          </Col>
          <Col span={17}>
            <Menu
              mode="horizontal"
              items={headerMenu}
              onClick={({ key }) => navigate(`/${key}`)}
              style={{
                backgroundColor: "transparent",
                color: "white",
                justifyContent: "flex-end",
              }}
            />
          </Col>
          <Col span={1} align="right">
            <Badge
              color={token.colorSuccess}
              style={{ borderColor: token.colorSuccess }}
              count={5}
            >
              <HiOutlineShoppingBag
                style={{ color: token.colorSuccess }}
                size={30}
              />
            </Badge>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
