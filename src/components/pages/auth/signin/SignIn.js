import { Anchor, Button, Input } from "antd";

const SignIn = () => {
  return (
    <>
      <div className="cart">
        <div className="cart__header">
          <h2>Account</h2>
        </div>

        <section className="cart__main">
          <div className="signin">
            <h2>Login</h2>
            <Input className="signin_child " placeholder="Email" />
            <Input className="signin_child " placeholder="Password" />

            <Anchor
              showInkInFixed={"false"}
              className="signin_child "
              items={[
                { key: "forget-pass", href: "/", title: "Forgot Password?" },
              ]}
            />

            <Button type="primary" className="primary-btn2 center">
              Sign In
            </Button>
            <Anchor
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
