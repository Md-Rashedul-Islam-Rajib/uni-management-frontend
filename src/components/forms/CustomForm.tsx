import { FormProvider, useForm } from "react-hook-form";
import { TFormConfig, TFormProps } from "../../types/form.types";
import { Form } from "antd";


const CustomForm = ({ onSubmit, children,defaultValues }: TFormProps) => {
    
      const formConfig: TFormConfig = {};

      if (defaultValues) {
        formConfig["defaultValues"] = defaultValues;
      }

    const methods = useForm();
    return (
    <FormProvider {...methods}>
            <Form onFinish={methods.handleSubmit(onSubmit)}>{ children}</Form>
    </FormProvider>
  )
}

export default CustomForm
