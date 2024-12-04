import {
  CiOutlined,
  ClockCircleOutlined,
  EuroOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Fragment, useState } from "react";
const { Option } = Select;
const { Search } = Input;

export default function InputComponent() {
  const [time, setTime] = useState("");
  const [error, setError] = useState(false);

  const validateTime = (value) => {
    // Check if the input matches HH:mm format
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(value);
  };

  const handleSubmit = () => {
    if (!validateTime(time)) {
      setError(true);
    } else {
      setError(false);
      console.log("Appointment time:", time);
      // Proceed with form submission
    }
  };

  const Selectfebore = (
    <Select defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  return (
    <Fragment>
      {/* basic input */}
      <Input placeholder="Enter Your Name" />
      {/* size */}
      <Input size="small" placeholder="Small size" />
      <Input size="middle" placeholder="Middle size" />
      <Input size="large" placeholder="Large size" />
      {/* variants */}
      <Input variant="borderless" placeholder="Borderless" />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="outlined" placeholder="Outlined" />
      {/* pre/post tab */}
      <Input addonBefore="http://" defaultValue="mysite" />
      <Input addonAfter=".com" defaultValue=".com" />
      <Input addonBefore="http://" addonAfter=".com" defaultValue="hi" />
      <Input addonBefore="http://" addonAfter=".com" />
      <Input addonBefore={Selectfebore} />
      {/* search button */}
      <Search placeholder="Search here..." enterButton />
      <Search placeholder="Search here..." enterButton="Search" />
      <Search placeholder="Search here..." enterButton="Search" loading />
      <Search placeholder="Search here..." enterButton="Search" allowClear />
      {/* text area */}
      <TextArea rows={3} maxRows={4} />
      <TextArea rows={4} maxLength={10} placeholder="Enter comments..." />
      <TextArea autoSize placeholder="Apple" />
      <TextArea
        placeholder="Enter you message..."
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <TextArea rows={4} showCount />
      <TextArea rows={4} showCount maxLength={10} />
      {/* prefex/suffex */}
      <Input placeholder="Euro" prefix={<EuroOutlined />} />
      <Input suffix={<CiOutlined />} />
      {/* input with clear icon */}
      <Input allowClear placeholder="Clear icon" />
      <TextArea placeholder="Text area wtih clear icnon" allowClear />
      {/* status */}
      <Input status="error" />
      <Input status="warning" />
      <Input status="error" prefix={<ClockCircleOutlined />} />

      <Form>
        <Form.Item>
          <Input
            status={error ? "error" : ""}
            placeholder="Enter time (HH:mm)"
            prefix={<ClockCircleOutlined />}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {error && (
            <span style={{ color: "red", fontSize: "12px" }}>
              Please enter a valid time in HH:mm format.
            </span>
          )}
        </Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
}
