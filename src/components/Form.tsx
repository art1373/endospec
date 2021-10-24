import { Form, Button, Upload, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./Form.scss";

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e: any) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const InformationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      layout="vertical"
      className="form"
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Full name"
        rules={[
          {
            type: "string",
            message: "Enter a valid name!",
            min: 3,
          },
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="clinic_dentist"
        label="Clinic/Dentist"
        rules={[
          {
            type: "string",
            message: "Enter a valid name!",
            min: 3,
          },
          {
            required: true,
            message: "Please input your clinic or dentist name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[
          {
            type: "string",
            message: "Enter a long enough message!",
            min: 25,
          },
          {
            required: true,
            message: "Please input your message for us!",
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item label="Dragger">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          className="btn"
          type="primary"
          loading={false}
          htmlType="submit"
        >
          Submit!
        </Button>
      </Form.Item>
    </Form>
  );
};
export default InformationForm;
