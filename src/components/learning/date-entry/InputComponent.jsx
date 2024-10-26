import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
const { Search } = Input;
import { Fragment } from "react";

export default function InputComponent() {
  const seleftBefore = (
    <Select defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".org">.org</Option>
      <Option value=".net">.net</Option>
      <Option value=".xyz">.xyz</Option>
      <Option value=".gov">.gov</Option>
    </Select>
  );
  return (
    <Fragment>
      <Input placeholder="Enter Your Name " />
      {/* size */}
      <Input placeholder="small" size="small" />
      <Input placeholder="middle" size="middle" />
      <Input placeholder="large" size="large" />
      {/* variants */}
      <Input placeholder="outlined" variant="outlined" />
      <Input placeholder="filled" variant="filled" />
      <Input placeholder="borderless" variant="borderless" />
      {/* pre post tab */}
      <Input
        addonBefore="https://"
        addonAfter=".com"
        placeholder="Enter Your Site URL"
      />
      <Input
        addonBefore={
          <Select defaultValue="http://">
            <Option value="https://">https://</Option>
            <option value="http://">http://</option>
          </Select>
        }
      />
      <Input addonBefore={seleftBefore} />
      <Input addonBefore={seleftBefore}  addonAfter={selectAfter} />
      {/* search box */}
      <Search placeholder="Search here..." style={{width:"200px"}} />
    </Fragment>
  );
}
