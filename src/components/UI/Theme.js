import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./main.css";

const Theme = ({ children }) => (
  <ConfigProvider theme={{ token: { colorPrimary: "#1677ff" } }}>
    {children}
  </ConfigProvider>
);

export default Theme;
