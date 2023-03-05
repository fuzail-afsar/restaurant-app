import { ConfigProvider } from "antd";
import * as theme from "./theme.json";
import "antd/dist/reset.css";
import "./main.css";
import { useToken } from "antd/es/theme/internal";

const Theme = ({ children }) => {
  console.log(useToken());
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
export default Theme;
