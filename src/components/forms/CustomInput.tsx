import { Controller } from "react-hook-form"
import { TInputProps } from "../../types/form.types"
import { Input } from "antd"


const CustomInput = ({type,name,label}: TInputProps) => {
  return (
      <div style={{ marginBottom: '20px' }}>
          {label ? label : null}
          <Controller
              name={name}
              render={({field}) => <Input {...field} type={type} id={name} />}
          />
      
    </div>
  )
}

export default CustomInput
