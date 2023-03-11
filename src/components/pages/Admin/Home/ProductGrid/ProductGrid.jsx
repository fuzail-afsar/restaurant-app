import "./ProductGrid.css";
import { Button, Col, Row, Typography } from "antd";
import Container from "../../../../common/container/Container";
import ProductCard from "./ProductCard";
import ModalForm from "../../../../common/Modal/Modal";
import { useEffect, useState } from "react";
import {
  addItem,
  getAdminItems,
} from "../../../../../store/reducers/Admin/Item.reducer";
import { useDispatch, useSelector } from "react-redux";

const ProductGrid = () => {
  const { data } = useSelector((state) => state.adminItem);

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { Title } = Typography;

  const onOk = (itemData) => {
    console.log(itemData);
    dispatch(addItem({ itemData }));
  };
  const onCancel = () => {
    setShow(false);
  };

  const onClick = () => {
    setShow(true);
  };

  const onDelete = (id) => {
    console.log(id);
  };

  useEffect(() => {
    dispatch(getAdminItems());
  }, []);

  return (
    <>
      <Container>
        <Row justify="space-between">
          <Col>
            <Title level={2}>Products</Title>
          </Col>
          <Col>
            <Button type="primary" onClick={onClick}>
              Add Item
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row gutter={20}>
              {data.map((items) => (
                <Col xs={24} sm={12} md={8} lg={6} key={items.id}>
                  <ProductCard {...items} onDeleteHandler={onDelete} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <ModalForm visible={show} onOk={onOk} onCancel={onCancel} />
    </>
  );
};

export default ProductGrid;
