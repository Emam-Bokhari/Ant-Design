import { Breadcrumb } from "antd";
import { Fragment } from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

export default function BreadcrumbComponent() {
  return (
    <Fragment>
      {/* basic breadcrumb */}
      <Breadcrumb
        items={[
          { title: "Home" },
          { title: <a href="#">Application Center</a> },
          { title: <a href="#">Application List</a> },
          { title: "An Application" },
        ]}
      />
      {/* config the seperator */}
      <Breadcrumb
        separator=">"
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="#">Application Center</a>,
          },
          {
            title: <a href="#">Application List</a>,
          },
          { title: "An Application" },
        ]}
      />
      {/* icon */}
      <Breadcrumb
        items={[
          {
            title: (
              <Fragment>
                <HomeOutlined />
                <span>Home</span>
              </Fragment>
            ),
          },
          {
            title: <a href="#">Application Center</a>,
          },
          {
            title: (
              <a href="#">
                {" "}
                <UserOutlined /> Application List
              </a>
            ),
          },
          { title: "An Application" },
        ]}
      />
      {/* parmas */}
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="#">Application Center</a>,
          },
          {
            title: "Users",
          },
          { title: ":id" },
        ]}
        params={{ id: 11 }}
      />
    </Fragment>
  );
}
