import { Breadcrumb } from "antd";
import { Fragment } from "react";

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
    </Fragment>
  );
}
