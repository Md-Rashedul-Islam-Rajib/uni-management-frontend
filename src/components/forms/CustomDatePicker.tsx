import { Controller } from "react-hook-form"
import { TDatePickerProps } from "../../types/form.types"
import { DatePicker, Form } from "antd"


const CustomDatePicker = ({name,label}: TDatePickerProps) => {
  return (
      <div style={{ marginBottom: '20px' }}>
          <Controller
          name={name}
              render={({ field }) => (
                  <Form.Item label={label}>
                      <DatePicker {...field} size="large" style ={{width: '100%'}} />
              </Form.Item>
          )}
          />
      
    </div>
  )
}

export default CustomDatePicker
