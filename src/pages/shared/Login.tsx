import { Button, Row } from "antd";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { tokenDecoder } from "../../utilities/tokenDecoder";
import { useAppDispatch } from "../../redux/hooks";
import { signin } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { User } from "../../types/route.types";
import CustomForm from "../../components/forms/CustomForm";
import CustomInput from "../../components/forms/CustomInput";
import { FieldValues } from "react-hook-form";


const Login = () => {
  const dispatch = useAppDispatch();
  const [login, { error }] = useLoginMutation();
  const navigate = useNavigate();

  console.log(error);


  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    
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
    <Row
      justify="center" align="middle" style={{ height: "100vh" }}>
      <CustomForm onSubmit={onSubmit}
      >
        <CustomInput type="text" name="id" label="ID:" />
        <CustomInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
      </CustomForm>
    </Row>
  );
};

export default Login;
