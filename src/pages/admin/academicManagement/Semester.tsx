import { useGetAllSemestersQuery } from "../../../redux/features/semester/semesterApi";


const Semester = () => {

  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data)
  return (
    <div>
        academic semester
    </div>
  )
}

export default Semester
