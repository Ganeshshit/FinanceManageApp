import { Box, Button, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { useGetYearlyDataQuery } from "../../state/api";
import DashboardBox from "../../components/DashboardBox";
import FlexBetween from "../../components/FlexBetween";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

const YearlyView = () => {
  const { palette } = useTheme();
  const [view, setView] = useState<"revenue" | "profit">("revenue");
  const { data, isLoading } = useGetYearlyDataQuery();

  const formattedData = useMemo(() => {
    if (!data) return [];

    return data.map((item) => ({
      year: item.year,
      Revenue: item.revenue,
      Expenses: item.expenses,
      Profit: item.profit,
      "Operational Expenses": item.operationalExpenses,
      "Non-Operational Expenses": item.nonOperationalExpenses,
    }));
  }, [data]);

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Yearly Financial Overview</Typography>
          <Typography variant="h6">
            Yearly breakdown of revenue, expenses, and profit
          </Typography>
        </Box>
        <Button
          onClick={() => setView(view === "revenue" ? "profit" : "revenue")}
          sx={{
            color: palette.grey[900],
            backgroundColor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
          }}
        >
          {view === "revenue" ? "Show Profit View" : "Show Revenue View"}
        </Button>
      </FlexBetween>

      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="80%">
          <Typography variant="h5">Loading yearly data...</Typography>
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height="80%">
          {view === "revenue" ? (
            <BarChart
              data={formattedData}
              margin={{
                top: 20,
                right: 75,
                left: 20,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
              <XAxis
                dataKey="year"
                tickLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                axisLine={{ strokeWidth: "0" }}
                style={{ fontSize: "10px" }}
                tickFormatter={(v) => `$${v.toLocaleString()}`}
              />
              <Tooltip
                formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
                labelFormatter={(value) => `Year: ${value}`}
              />
              <Legend />
              <Bar
                dataKey="Revenue"
                fill={palette.primary.main}
              />
              <Bar
                dataKey="Expenses"
                fill={palette.secondary.main}
              />
              <Bar
                dataKey="Operational Expenses"
                fill={palette.info.main}
              />
              <Bar
                dataKey="Non-Operational Expenses"
                fill={palette.grey[700]}
              />
            </BarChart>
          ) : (
            <LineChart
              data={formattedData}
              margin={{
                top: 20,
                right: 75,
                left: 20,
                bottom: 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
              <XAxis
                dataKey="year"
                tickLine={false}
                style={{ fontSize: "10px" }}
              />
              <YAxis
                axisLine={{ strokeWidth: "0" }}
                style={{ fontSize: "10px" }}
                tickFormatter={(v) => `$${v.toLocaleString()}`}
              />
              <Tooltip
                formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
                labelFormatter={(value) => `Year: ${value}`}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Revenue"
                stroke={palette.primary.main}
                strokeWidth={2}
                dot={{ strokeWidth: 5 }}
              />
              <Line
                type="monotone"
                dataKey="Profit"
                stroke={palette.secondary.main}
                strokeWidth={2}
                dot={{ strokeWidth: 5 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      )}
    </DashboardBox>
  );
};

export default YearlyView;
