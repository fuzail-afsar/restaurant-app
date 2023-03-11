import React, { useState } from "react";
import { Modal, Form, Input } from "antd";

const { Item } = Form;

const ModalForm = ({ visible, onCancel, onOk }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleOk = () => {
    onOk({ title, price, imageUrl });
    setTitle("");
    setPrice("");
    setImageUrl("");
  };

  const handleCancel = () => {
    onCancel();
    setTitle("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <Modal
      title="Add Item"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form layout="vertical">
        <Item label="Title">
          <Input value={title} onChange={handleTitleChange} />
        </Item>
        <Item label="Price">
          <Input value={price} onChange={handlePriceChange} />
        </Item>
        <Item label="Image URL">
          <Input value={imageUrl} onChange={handleImageUrlChange} />
        </Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
