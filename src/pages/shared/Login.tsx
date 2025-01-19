import { Button, Form, Input } from "antd";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { tokenDecoder } from "../../utilities/tokenDecoder";
import { useAppDispatch } from "../../redux/hooks";
import { signin } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { User } from "../../types/route.types";

type TLoginData = {
  id: string;
  password: string;
};
const Login = () => {
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation();
  const navigate = useNavigate();

  console.log(error);
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

  const onSubmit = async (data: TLoginData) => {
    const toastId = toast.loading('logging in');
    try {
      const res = await login(data).unwrap();
      const user = tokenDecoder(res?.data?.accessToken) as User;
      dispatch(signin({ user, token: res.data.accessToken }));
      toast.success('logged In', { id: toastId, duration: 2000 });
      navigate(`/${user?.role}/dashboard`)
    } catch (error) {
      toast.error('something went wrong', { id: toastId, duration: 2000 })      
      console.log(error)
    }

  };

  return (
    <>
      <Form
        style={{ maxWidth: 350 }}
        {...formItemLayout}
        form={form}
        onFinish={onSubmit}
      >
        <Form.Item
          name="id"
          label="ID"
          rules={[{ required: true, message: "Please input a valid ID!" }]}
        >
          <Input autoComplete="id" placeholder="type your ID here" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please provides a valid password" },
          ]}
        >
          <Input.Password
            autoComplete="current-password"
            placeholder="type your password"
          />
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
