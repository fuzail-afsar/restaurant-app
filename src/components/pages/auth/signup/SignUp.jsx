import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { InnerPageBanner } from "../../../common/banner/inner-page-banner/InnerPageBanner";
import Container from "../../../common/container/Container";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const createUserHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <InnerPageBanner title="Create An Account" />
      <Container>
        <Row
          justify="center"
          style={{ textAlign: "center", padding: "3rem 0" }}
        >
          <Col span={12}>
            <div className="form-wrapper">
              <Typography.Title level={3}>Sign Up</Typography.Title>
              <Form
                wrapperCol={{
                  span: 24,
                }}
                layout="horizontal"
                size="large"
                style={{
                  width: "100%",
                }}
                onFinish={createUserHandler}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Password is required",
                      whitespace: true,
                    },
                    {
                      min: 6,
                      message: "Password must be at least 6 characters",
                    },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item className="form-item-button">
                  <Button
                    style={{
                      width: "90px",
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
              <Button
                onClick={() => navigate("/signin")}
                type="link"
                className=""
              >
                Already have an Account
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
