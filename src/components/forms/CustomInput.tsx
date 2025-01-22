import { Controller } from "react-hook-form"
import { TInputProps } from "../../types/form.types"
import { Form, Input } from "antd"


const CustomInput = ({type,name,label}: TInputProps) => {
  return (
      <div style={{ marginBottom: '20px' }}>
          
          <Controller
              name={name}
        render={({ field }) =>(
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} size="large" />
          </Form.Item>
        
  )}
          />
      
    </div>
  )
}

export default CustomInput
