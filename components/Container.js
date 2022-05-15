import React, { useState } from "react";
import { Button, Space, DatePicker, Card, Menu } from "antd";
import { Layout } from "antd";
import Link from "next/link";
import {
  GithubFilled,
  DashboardOutlined,
  ShoppingFilled,
  HddFilled,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const Conatiner = ({ children }) => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 123,
      title: "Dashboard",
      href: "/",
    },
    {
      id: 555,
      title: "Blank",
      href: "#",
    },
    {
      id: 567,
      title: "Articles",
      href: "/articles",
    },
  ]);
  const renderIcon = (choice) => {
    switch (choice) {
      case "Dashboard":
        return (
          <a>
            <DashboardOutlined style={{ fontSize: "40px" }} />
          </a>
        );
      case "Articles":
        return (
          <a>
            <HddFilled style={{ fontSize: "40px" }} />
          </a>
        );
      case "Blank":
        return (
          <a>
            <ShoppingFilled style={{ fontSize: "40px" }} />
          </a>
        );
      default:
        break;
    }
  };
  return (
    <>
      <Layout style={{ backgroundColor: "white" }}>
        <Header style={{ backgroundColor: "whitesmoke" }}>
          <GithubFilled style={{ fontSize: "50px" }} />
        </Header>
        <Layout style={{ backgroundColor: "white" }}>
          <Sider style={{ backgroundColor: "whitesmoke" }}>
            <Menu
              theme="light"
              style={{
                backgroundColor: "whitesmoke",
                paddingTop: "20px",
                paddingLeft: "20px",
              }}
            >
              {menuItems.map((item) => {
                return (
                  <Menu.Item style={{ margin: "50px" }}>
                    <Link key={item.id} href={item.href}>
                      {renderIcon(item.title)}
                    </Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <main>{children}</main>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default Conatiner;
