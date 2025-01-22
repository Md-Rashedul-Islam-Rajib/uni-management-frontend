import { baseApi } from "../../../api/baseApi";

const managementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),


    addSemester: builder.mutation({
      query: (data) => ({
        url: '/academic-semesters/create-academic-semester',
        method: 'POST',
        body: data
      })
    })
  }),

});

export const { useGetAllSemestersQuery, useAddSemesterMutation } = managementApi;
