import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./main.css";

const Theme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#c00a27",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default Theme;
