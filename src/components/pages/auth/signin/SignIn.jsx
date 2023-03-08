import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { InnerPageBanner } from "../../../common/banner/inner-page-banner/InnerPageBanner";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const signInHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <InnerPageBanner title="Sign In" />
      <div className="signin">
        <section className="signin__main">
          <div className="signin__body">
            <h2>Login</h2>
            <Form
              wrapperCol={{
                span: 24,
              }}
              layout="horizontal"
              size="large"
              style={{
                maxWidth: 400,
                width: "100%",
              }}
              onFinish={signInHandler}
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
                  { min: 6, message: "Password must be at least 6 characters" },
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
                  Sign In
                </Button>
              </Form.Item>
            </Form>
            <Button
              onClick={() => navigate("/signup")}
              type="link"
              className=""
            >
              Create Account
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
