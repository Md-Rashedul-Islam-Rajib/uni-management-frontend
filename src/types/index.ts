// /* eslint-disable @typescript-eslint/no-explicit-any */
// export interface ISelectOptions {
//   value: string | number;
//   label: string;
// }

// /**
//  * Create form select options array.
//  * @param data Array of `data` to convert into select options.
//  * @param valueKey Field name (key) to include as value.
//  * @param labelKey Field name (key) to include as label.
//  * @returns Formatted array of select options.
//  */
// export const createSelectOptions = <T extends Record<string, any>>(
//   data: T[],
//   valueKey: keyof T,
//   labelKey: keyof T
// ): ISelectOptions[] => {
//   if (data && data.length) {
//     return data?.map((datum) => {
//       return {
//         value: datum[valueKey],
//         label: datum[labelKey],
//       };
//     });
//   } else {
//     return [];
//   }
// };

// const demus = [{
//     "id": 1,
//     "name": "Demus",
//     "email": ""
// },
//     {
//         "id": 2,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 3,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 4,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 5,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 6,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 7,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 8,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 9,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 10,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 11,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 12,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 13,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 14,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 15,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 16,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 17,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 18,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 19,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 20,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 21,
//         "name": "Demus",
//         "email": ""
//     },
//     {
//         "id": 22,
//         "name": "Demus",
//         "email":""
//     }]

// const res = createSelectOptions(demus, "email", "name")
// res.map((result) => (
//     result.label
// ))