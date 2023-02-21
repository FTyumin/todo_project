import React from "react"
import App from "../App"
import { ProSidebarProvider } from "react-pro-sidebar"

const Layout = () => {
  return (
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
  );
};

export default Layout;