import { TQueryParam, TResponseRedux } from "../../../../types/global.types";
import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllStudents: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();
                if (args) {
                    args.foreach((item: TQueryParam) => {
                        params.append(item.name,item.value as string)
                    })
                }
                return {
                    url: '/students',
                    method: 'GET',
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<TStuden)
        })


    })


})