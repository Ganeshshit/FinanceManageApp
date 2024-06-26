import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpiResponse,
  GetProductResponse,
  GetTranctionResponse,
  addDailyUpdateRequest,
  addDailyUpdateRespons,
} from "./types";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),

  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions", "UpdateData"],
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
    addDailyData: build.mutation<addDailyUpdateRespons, addDailyUpdateRequest>({
      query: (body) => ({
        url: "update/daily-data",
        method: "POST",
        body,
      }),
      invalidatesTags: ["UpdateData"],
    }),
  }),
});

export const {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
  useAddDailyDataMutation,
} = api;
