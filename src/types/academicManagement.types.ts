export type TSemester = {
  _id: string;
  name: string;
  year: string;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export interface SemesterData {
  id?: string;
  name: string;
  year: string;
  startMonth: string;
  endMonth: string;
}

export type TFaculty = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TDepartment = {
  _id: string;
  name: string;
  academicFaculty: TFaculty;
  createdAt: string;
  updatedAt: string;
};

export type TTableData = Pick<
  TSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;