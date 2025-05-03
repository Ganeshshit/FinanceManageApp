import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpiResponse,
  GetProductResponse,
  GetTranctionResponse,
  addDailyUpdateRequest,
  addDailyUpdateRespons,
  Year,
} from "./types";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),

  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions", "UpdateData", "YearlyData"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpiResponse>, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductResponse>, void>({
      query: () => "product/products",
      providesTags: ["Products"],
    }),
    getTransactions: build.query<Array<GetTranctionResponse>, void>({
      query: () => "transaction/transactions",
      providesTags: ["Transactions"],
    }),
    getYearlyData: build.query<Array<Year>, void>({
      query: () => "update/yearly-data",
      providesTags: ["YearlyData"],
    }),
    addDailyData: build.mutation<addDailyUpdateRespons, addDailyUpdateRequest>({
      query: (body) => ({
        url: "update/daily-data",
        method: "POST",
        body,
      }),
      invalidatesTags: ["UpdateData", "Kpis", "YearlyData"],
    }),
  }),
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
  useGetYearlyDataQuery,
  useAddDailyDataMutation,
} = api;
