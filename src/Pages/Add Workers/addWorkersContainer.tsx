// import React from "react";
import { Button, Card, Col, Form, Input, InputNumber, Row, message } from "antd";
import axios from "axios";
// import type { AddWorkersContainerProps } from "./addWorkers.propTypes";

interface AddWorkerFormValues {
  name: string;
  salary: number;
  mobileNumber: string;
  address?: string;
}

const AddworkersContainer = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: AddWorkerFormValues) => {
    try {
      const payload = {
        name: values.name,
        salary: values.salary,
        mobileNumber: values.mobileNumber,
        address: values.address || "",
      };

      const response = await axios.post(
        "http://localhost:8080/api/workers/addworkers",
        payload
      );

      console.log("Response:", response.data);

      message.success("Worker added successfully");

      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("Failed to add worker");
    }
  };

  return (
    <Row justify="center" style={{ padding: "20px" }}>
      <Col xs={24} sm={22} md={18} lg={12}>
        <Card title="Add Worker">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            {/* Name */}
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter worker name",
                },
              ]}
            >
              <Input placeholder="Enter worker name" />
            </Form.Item>

            {/* Salary */}
            <Form.Item
              label="Salary"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Please enter salary",
                },
              ]}
            >
              <InputNumber
                placeholder="Enter salary"
                style={{ width: "100%" }}
                min={0}
              />
            </Form.Item>

            {/* Mobile Number */}
            <Form.Item
              label="Mobile Number"
              name="mobileNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter mobile number",
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Mobile number must be 10 digits",
                },
              ]}
            >
              <Input placeholder="Enter mobile number" maxLength={10} />
            </Form.Item>

            {/* Address Optional */}
            <Form.Item
              label="Address"
              name="address"
            >
              <Input.TextArea
                rows={4}
                placeholder="Enter address"
              />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Add Worker
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default AddworkersContainer;