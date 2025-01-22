import { Button, Col, Flex } from "antd";
import { useAddSemesterMutation } from "../../../redux/features/admin/academicManagement/managementApi"
import CustomForm from "../../../components/forms/CustomForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import CustomSelect from "../../../components/forms/CustomSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions, yearOptions } from "../../../constants/global";
import { TResponse } from "../../../types/global.types";
import { SemesterData } from "../../../types/academicManagement.types";


const CreateSemester = () => {

  const [addSemester] = useAddSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating Semester...");
    const name = semesterOptions[Number(data?.name) - 1]?.label;

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth
    }
    console.log(semesterData)

    try {
      const res = (await addSemester(semesterData)) as TResponse<SemesterData>;
      console.log(res);
      if (res.data) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else { 
        toast.success("Semester created successfully", { id: toastId });
      }
    } catch (error) {
      console.log(error);
      toast.error('something went wrong', { id: toastId });
    }


  }
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <CustomForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <CustomSelect label="Name" name="name" options={semesterOptions} />
          <CustomSelect label="Year" name="year" options={yearOptions} />
          <CustomSelect label="Start Month" name="startMonth" options={monthOptions} />
          <CustomSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Create</Button>
        </CustomForm>

      </Col>

    </Flex>
  )
}

export default CreateSemester
