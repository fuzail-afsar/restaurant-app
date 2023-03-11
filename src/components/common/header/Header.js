import Container from "../container/Container";
import { Col, Row, theme, Typography, Menu, Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./Header.css";
import { useSelector } from "react-redux";

const headerMenu = [
  { label: "Home", key: "" },
  { label: "Cart", key: "cart" },
  { label: "Sign In", key: "signin" },
];
const Header = () => {
  const { token } = theme.useToken();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  return (
    <header style={{ background: token.colorPrimary }}>
      <Container>
        <Row justify="center" align="middle">
          <Col
            xs={12}
            lg={6}
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
          <Col xs={11} lg={17}>
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
          <Col xs={1} lg={1} align="right">
            <Badge
              color={token.colorSuccess}
              style={{ borderColor: token.colorSuccess }}
              count={cart.length}
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
