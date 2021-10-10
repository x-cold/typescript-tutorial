import React from 'react';
import { Input, Button, Form } from 'antd';
import CustomForm, { useCustomForm } from './3.5 custom-form';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FormDemo = () => {
  const [form] = useCustomForm<{ note: string }>();




  
  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      // TODO: submit values
    } catch(error) {
      // TODO: log and report
    }
  };

  return (
    <CustomForm
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
    </CustomForm>
  );
};

export default FormDemo;