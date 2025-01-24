import {
  TDepartment,
  TFaculty,
  TSemester,
} from "../../../../types/academicManagement.types";
import { TQueryParam, TResponseRedux } from "../../../../types/global.types";
import { baseApi } from "../../../api/baseApi";

const managementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
    getFaculties: builder.query({
      query: () => {
        return { url: "/academic-faculties", method: "GET" };
      },
      transformResponse: (response: TResponseRedux<TFaculty[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
    getDepartments: builder.query({
      query: () => {
        return { url: "/academic-departments", method: "GET" };
      },
      transformResponse: (response: TResponseRedux<TDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllSemestersQuery,
  useAddSemesterMutation,
  useAddDepartmentMutation,
  useAddFacultyMutation,
  useGetDepartmentsQuery,
  useGetFacultiesQuery
} = managementApi;
