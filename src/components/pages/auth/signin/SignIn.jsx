import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { InnerPageBanner } from "../../../common/banner/inner-page-banner/InnerPageBanner";
import "./SignIn.css";
const SignIn = () => {
  const navigate = useNavigate();
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
            >
              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Password" />
              </Form.Item>

              <Form.Item className="form-item-button">
                <Button
                  style={{
                    width: "90px",
                  }}
                  type="primary"
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
