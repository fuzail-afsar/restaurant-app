import { Button, Form, Input } from "antd";

 const AddProducts = () => {
  const addHandler = () => {};
  return (
    <div className="signin">
      <section style={{ padding: "1rem 0" }}>
        <div className="signin__body">
          <h2>Add Item</h2>
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
            onFinish={addHandler}
          >
            <Form.Item
              name="item name"
              rules={[{ required: true, message: "item name is required" }]}
            >
              <Input placeholder="item name" />
            </Form.Item>

            <Form.Item
              name="item Price"
              rules={[{ required: true, message: "item Price is required" }]}
            >
              <Input placeholder="item Price" />
            </Form.Item>

            <Form.Item
              name="item Description"
              rules={[
                { required: true, message: "item Description is required" },
              ]}
            >
              <Input placeholder="item Description" />
            </Form.Item>

            <Form.Item className="form-item-button">
              <Button
                style={{
                  width: "fit-content",
                }}
                type="primary"
                htmlType="submit"
              >
                Add Item
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default AddProducts;