import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryBg: "#FAF4F1",
          colorPrimary: "#415be7",
          colorText: "#000000",
          colorTextSecondary: "#B2B2B2",
          fontFamily: "Poppins",
          fontSizeHeading1: "28px",
          fontSizeHeading2: "24px",
          fontSizeHeading3: "22px",
          fontSizeHeading4: "20px",
          fontSizeHeading5: "18px",
        },
        components: {
          Typography: {
            fontSize: "16px",
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>
);
