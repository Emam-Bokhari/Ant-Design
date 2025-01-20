import { Input, Select } from "antd";
import { Fragment } from "react";
import { UserOutlined } from "@ant-design/icons";
import { AudioOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const { Option } = Select;
const { Search } = Input;

const addonBefore = (
  <Select defaultValue="https://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);

const addOnAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".net">.net</Option>
    <Option value=".org">.org</Option>
    <Option value=".xyz">.xyz</Option>
  </Select>
);

function handleSearch(value) {
  console.log(value);
}

export default function InputComponent() {
  return (
    <Fragment>
      {/* basic */}
      <Input placeholder="Basic usage" />
      <Input placeholder="Small size" size="small" />
      <Input placeholder="Middle size" size="middle" />
      <Input placeholder="Large size" size="large" />
      <Input placeholder="Prefix" prefix={<UserOutlined />} />
      {/* variants */}
      <Input variant="filled" placeholder="Filled" />
      <Input variant="outlined" placeholder="Outlined" />
      <Input variant="borderless" placeholder="Borderless" />
      {/* add before, add after */}
      <Input
        addonBefore="https://"
        addonAfter=".com"
        placeholder="Enter Your University Website Url"
      />
      <Input
        addonBefore={addonBefore}
        addonAfter={addOnAfter}
        placeholder="Enter Your University Website Url"
      />
      {/* search */}
      <Search loading />
      <Search loading enterButton />
      <Search enterButton="Search" />
      <Search loading enterButton="Search" />
      <br />
      <br />
      <Search
        placeholder="Search..."
        enterButton="Search"
        size="middle"
        allowClear
        onSearch={handleSearch}
        suffix={<AudioOutlined />}
      />
      {/* textarea */}
      <TextArea autoSize={{ minRows: 5, maxRows: 7 }} />
      <TextArea
        minRows={5}
        maxLength={100}
        allowClear
        showCount={{
          formatter: ({ count, maxLength }) => (
            <span
              style={{
                color: count === maxLength ? "red" : "green",
              }}
            >
              {count}/{maxLength}
            </span>
          ),
        }}
      />
    </Fragment>
  );
}
