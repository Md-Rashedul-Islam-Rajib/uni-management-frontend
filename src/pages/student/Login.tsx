
import { Button, Form, Input } from "antd";
import { useLoginMutation } from "../../redux/features/auth/authApi";

type TLoginData = {
    id: string,
    password: string
}
const Login = () => {

    const [login, { data, error }] = useLoginMutation();
    
    console.log(data)
    console.log(error)
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 9 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
    };
    const [form] = Form.useForm();

    const onSubmit = (data: TLoginData) => {
        console.log(data)
        login(data)
    }
    

    return (
      <>
        <Form style={{ maxWidth: 350 }} {...formItemLayout} form={form} onFinish={onSubmit}>
          <Form.Item
            name="id"
            label="ID"
            rules={[{ required: true, message: "Please input a valid ID!" }]}
          >
            <Input placeholder="type your ID here" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please provides a valid password" },
            ]}
          >
            <Input.Password placeholder="type your password" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              xs: { span: 24 },
              sm: { offset: 9, span: 14 },
            }}
          >
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </>
    );
};

export default Login;
