import React from 'react';
import { Input, Button, Form } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormDemo = () => {
  const [form] = Form.useForm<{ note: string }>();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      // TODO: submit values
    } catch(error) {
      // TODO: log and report
    }
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={(values) => {}}
    >
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormDemo;