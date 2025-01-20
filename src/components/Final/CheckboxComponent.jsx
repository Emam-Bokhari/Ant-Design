import { Checkbox, Col, Row } from "antd";
import { Fragment } from "react";

export default function CheckboxComponent() {
  function handleChange(event) {
    console.log(event.target.checked);
  }

  function handleChangeFruit(checkedValues) {
    console.log(checkedValues);
  }

  function handleChangeLetter(checkedValues) {
    console.log(checkedValues);
  }

  const fruitOptions = [
    {
      value: "apple",
      label: "Apple",
    },
    {
      value: "jackfruit",
      label: "Jackfruit",
    },
    {
      value: "lichi",
      label: "Lichi",
      disabled: true,
    },
  ];
  return (
    <Fragment>
      {/* basic checkbox */}
      <Checkbox onChange={handleChange}>Male</Checkbox>
      <Checkbox defaultChecked={false} disabled>
        Default checked False
      </Checkbox>
      <Checkbox indeterminate disabled>
        Default checked
      </Checkbox>
      <Checkbox defaultChecked disabled>
        Default Checked
      </Checkbox>
      {/* group  */}
      <br />
      <br />
      <Checkbox.Group options={fruitOptions} onChange={handleChangeFruit} />
      {/* implement grid for complex layout */}
      <br />
      <br />
      <Checkbox.Group style={{ width: "50%" }} onChange={handleChangeLetter}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Fragment>
  );
}
