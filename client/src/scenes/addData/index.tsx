import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { useAddDailyDataMutation } from "@/state/api";
import {
  Alert,
  Box,
  Button,
  TextField,
  Typography,
 
} from "@mui/material";
// import { useTheme } from "@mui/material";
import { useState } from "react";



const AddData = () => {
  // const { palette } = useTheme();
  const [date, setDate] = useState("");
  const [revenue, setRevenue] = useState("");
  const [expenses, setExpenses] = useState("");
  const [addDailyKpi, { isLoading, isSuccess, isError }] =
    useAddDailyDataMutation();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await addDailyKpi({
        date,
        revenue,
        expenses,
        _id: "",
      }).unwrap();
      // handle success, e.g., show a success message, reset form, etc.
      setDate("");
      setRevenue("");
      setExpenses("");
    } catch (error) {
      // handle error, e.g., show an error message
      console.error("Failed to add daily KPI:", error);
    }
  };
  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Add Daily Data</Typography>
        </Box>
      </FlexBetween>
      <FlexBetween>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 400,
            mx: "auto",
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Daily Data
          </Typography>
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            label="Revenue"
            type="text"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            fullWidth
            margin="normal"
            placeholder="e.g., $1234.56"
            required
          />
          <TextField
            label="Expenses"
            type="text"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            fullWidth
            margin="normal"
            placeholder="e.g., $123.45"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
          >
            Add Daily Data
          </Button>
          {isSuccess && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Daily Data added successfully!
            </Alert>
          )}
          {isError && (
            <Alert severity="error" sx={{ mt: 2 }}>
              Failed to add daily Data.
            </Alert>
          )}
        </Box>
      </FlexBetween>
    </DashboardBox>
  );
};

export default AddData;
