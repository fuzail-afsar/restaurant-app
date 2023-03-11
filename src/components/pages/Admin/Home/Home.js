import { Divider } from "antd";
import ProductGrid from "./ProductGrid/ProductGrid";
const Home = () => {
  return (
    <>
      <Divider className="hidden" style={{ marginTop: 80 }} />
      <ProductGrid />
      <Divider className="hidden" style={{ marginTop: 80 }} />
    </>
  );
};

export default Home;
