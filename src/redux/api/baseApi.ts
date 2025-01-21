import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { signin } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = ((getState()) as RootState).auth.token;

    if (token) {
      headers.set('authorization', `${token}`);

    }
    return headers;
  }
});

// const baseQueryWithRefreshToken: BaseQueryFn<
//   string | FetchArgs, // Args
//   unknown, // Result
//   FetchBaseQueryError
// > = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     // Try refreshing the token here
//     const refreshResult = await baseQuery(
//       {
//         url: "/auth/refresh",
//         method: "POST",
//       },
//       api,
//       extraOptions
//     );

//     if (refreshResult.data) {
//       // Save the new token and retry the original request
//       const newToken = (refreshResult.data as { token: string }).token;
//       (api.dispatch as any)(
//         (
//           dispatch: (arg0: { type: string; payload: string }) => void,
//           getState: any
//         ) => {
//           // Replace this with your Redux logic for saving the new token
//           dispatch({
//             type: "auth/saveToken",
//             payload: newToken,
//           });
//         }
//       );

//       // Retry the original request with the new token
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // Handle token refresh failure
//       return {
//         error: { status: 401, data: "Unauthorized" },
//       } as QueryReturnValue;
//     }
//   }

//   return result; // Make sure to return the result here
// };

const baseQueryWithRefreshToken = async (
  args: string | FetchArgs,
  api: BaseQueryApi, 
  extraOptions: object
) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result?.error?.status === 401) {
    console.log("sending refresh token request")
  }

  const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
    method: "POST",
    credentials: "include",
    
  })
  const data = await res.json();
  const user = (api.getState() as RootState).auth.user;
  api.dispatch(signin({ user, token: data.data.accessToken }));
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
