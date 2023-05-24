import { Form, Input, Button, Card, InputNumber, message } from "antd";
import { DataStore } from "aws-amplify";
import { Service } from "../../models";
import { useGaradgeContext } from "../../contexts/GaradgeContext";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const CreateMenuItem = () => {
  const { garadge } = useGaradgeContext();
  const navigation = useNavigate();

  const onFinish = ({ name, image, description, price }) => {
    DataStore.save(
      new Service({
        name,
        image,
        description,
        price,
        garadgeID: garadge.id,
      })
    );
    message.success("Service was created");
    navigation("/menu");
  };

  const onFinishFailed = (errorInfo) => {
       message.error("Dish is not added!");
    console.log("Failed:", errorInfo);
  };

  return (
    <Card title="New Order Item" style={{ margin: 20 }}>
      <Form
        layout="vertical"
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Service Name"
          name="name"
          rules={[{ required: true }]}
          required
        >
          <Input placeholder="Enter service name" />
        </Form.Item>
        <Form.Item
          label="Image link"
          name="image"
          rules={[{ required: true }]}
          required
        >
          <Input placeholder="Enter image link" />
        </Form.Item>
        <Form.Item
          label="Service Description"
          name="description"
          rules={[{ required: true }]}
          required
        >
          <TextArea rows={4} placeholder="Enter service description" />
        </Form.Item>
        <Form.Item
          label="Price (KSH)"
          name="price"
          rules={[{ required: true }]}
          required
        >
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateMenuItem;

