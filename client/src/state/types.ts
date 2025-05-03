export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}
export interface Month {
  id: String;
  month: String;
  revenue: number;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
}
export interface Day {
  id: String;
  date: String;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
  profit: number;
}
export interface Year {
  id: String;
  year: String;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
  profit: number;
}

export interface GetKpiResponse {
  id: String;
  _id: String;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  yearlyData: Array<Year>;
}
export interface GetProductResponse {
  id: String;
  _id: String;
  __v: number;
  price: number;
  expense: string;
  transactions: Array<string>;
}
export interface GetTranctionResponse {
  id: String;
  _id: String;
  __v: number;
  buyer: number;
  amount: string;
  productIds: Array<string>;
}
export interface addDailyUpdateRequest {
  _id: string;
  date: string;
  revenue: string;
  expenses: string;
  operationalExpenses?: string;
  nonOperationalExpenses?: string;
}
export interface addDailyUpdateRespons {
  success: boolean;
  message: string;
  data: {
    date: string;
    revenue: string;
    expenses: string;
    operationalExpenses: string;
    nonOperationalExpenses: string;
    profit: string;
  };
}
