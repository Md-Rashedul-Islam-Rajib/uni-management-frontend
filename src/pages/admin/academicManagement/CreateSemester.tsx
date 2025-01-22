import { Col, Flex } from "antd";
import { useAddSemesterMutation } from "../../../redux/features/admin/academicManagement/managementApi"
import CustomForm from "../../../components/forms/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import CustomSelect from "../../../components/forms/CustomSelect";

const CreateSemester = () => {

  const [addSemester] = useAddSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Semester...");

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth
    }
  }
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <CustomForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <CustomSelect label="Name" name="name" options={{}} />
        </CustomForm>

      </Col>

    </Flex>
  )
}

export default CreateSemester
