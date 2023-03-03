import { Anchor, Button, Input } from "antd";
import "./Signin.css";
const SignIn = () => {
  return (
    <>
      <div className="signin">
        <div className="signin_header">
          <h1>Account</h1>
        </div>

        <section className="signin__main">
          <div className="signin__body">
            <h2>Login</h2>
            <Input
              style={{ width: "300px" }}
              className="signin_child "
              placeholder="Email"
            />
            <Input
              style={{ width: "300px" }}
              className="signin_child "
              placeholder="Password"
            />

            <Anchor
              showInkInFixed={"false"}
              className="signin_child "
              items={[
                { key: "forget-pass", href: "/", title: "Forgot Password?" },
              ]}
            />

            <Button
              style={{ width: "90px" }}
              type="primary"
              className="primary-btn"
            >
              Sign In
            </Button>
            <Anchor
              style={{ outline: "none" }}
              className="signin_child "
              items={[
                { key: "create-acc", href: "/", title: "Create Account" },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default SignIn;
