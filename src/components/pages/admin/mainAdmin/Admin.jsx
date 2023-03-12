import { Layout, Row, Col } from "antd";
import { Sidebar } from "./Sidebar";
import { InnerPageBanner } from "../../../common/banner/inner-page-banner/InnerPageBanner";
import ViewProduct from "../ViewProducts/ViewProducts";

export default function Admin() {
  return (
    <Layout className="mainContainer">
      <Layout>
        <Row>
          <Col span={24}>
            <InnerPageBanner title="Admin Panel" />
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={4}
            style={{ backgroundColor: "white" }}>
            <Sidebar />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={16}
            lg={16}
            xl={20}
            style={{ backgroundColor: "white" }}>
            <ViewProduct />
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
}
