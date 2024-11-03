import  { useState } from 'react';
import { Steps, Button, Input, Form, Modal } from 'antd';
import { UserOutlined, CreditCardOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Step } = Steps;

const StepperPractice= () => {
  const [current, setCurrent] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentDetails: '',
  });

  const next = () => setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  // Handle Tab key to navigate through steps
  const handleTabNavigation = (e) => {
    if (e.key === 'Tab'||e.key==="Enter") {
      e.preventDefault();
      if (current < steps.length - 1) {
        next();
      } else {
        handleSubmit(); // Submit on the last step
      }
    }
  };

  const handleSubmit = () => {
    alert('Payment and data submitted');
    handleCancel(); // Close the modal on submit
  };

  const steps = [
    {
      title: 'Enter Details',
      content: (
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              autoFocus // Focuses the first input field
              onKeyDown={handleTabNavigation} // Handle Tab key for navigation
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              onKeyDown={handleTabNavigation}
            />
          </Form.Item>
        </Form>
      ),
      icon: <UserOutlined />,
    },
    {
      title: 'Payment',
      content: (
        <Form layout="vertical">
          <Form.Item label="Payment Details">
            <Input
              name="paymentDetails"
              value={formData.paymentDetails}
              onChange={handleInputChange}
              placeholder="Enter payment information"
              onKeyDown={handleTabNavigation}
            />
          </Form.Item>
        </Form>
      ),
      icon: <CreditCardOutlined />,
    },
    {
      title: 'Confirmation',
      content: (
        <div>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Payment Details:</strong> {formData.paymentDetails}</p>
          <p>Your information has been successfully submitted.</p>
        </div>
      ),
      icon: <CheckCircleOutlined />,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Payment Stepper
      </Button>

      <Modal
        title="Payment Stepper"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
        centered
        bodyStyle={{ padding: 20 }}
      >
        <Steps current={current}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} icon={step.icon} />
          ))}
        </Steps>

        <div style={{ marginTop: 20 }}>{steps[current].content}</div>

        <div style={{ marginTop: 20, textAlign: 'right' }}>
          {current > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default StepperPractice;
