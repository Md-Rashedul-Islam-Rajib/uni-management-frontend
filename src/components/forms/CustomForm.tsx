import { FormProvider, useForm } from "react-hook-form";
import { TFormConfig, TFormProps } from "../../types/form.types";


const CustomForm = ({ onSubmit, children,defaultValues }: TFormProps) => {
    
      const formConfig: TFormConfig = {};

      if (defaultValues) {
        formConfig["defaultValues"] = defaultValues;
      }

    const methods = useForm();
    return (
    <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>{ children}</form>
    </FormProvider>
  )
}

export default CustomForm
