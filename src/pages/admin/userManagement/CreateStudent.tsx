import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement/managementApi";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement/userManagementApi"


const CreateStudent = () => {

  const [addStudent, {data,error}] = useAddStudentMutation();

  console.log(data, error);

  const {data: semesterData, isLoading: semesterIsLoading } = useGetAllSemestersQuery(undefined);
  
  
  
  return (
    <div>
      CreateStudent
    </div>
  )
}

export default CreateStudent
