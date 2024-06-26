import express from "express"
import KPI from "../models/KPI.js";


const router = express.Router()

router.post('/daily-data', async (req, res) => {
    try {
        const { date, revenue, expenses } = req.body;
        const revenueNum = parseFloat(revenue.replace('$', '').replace(',', ''));
        const expensesNum = parseFloat(expenses.replace('$', '').replace(',', ''));

        // Find the KPI document (assuming only one document exists)
        const kpi = await KPI.findById("63bf8239f03239e002001612");

        if (!kpi) {
            return res.status(404).json({ message: 'KPI data not found' });
        }

        // Check if daily data already exists for the given date
        const dailyIndex = kpi.dailyData.findIndex(d => d.date === date);

        if (dailyIndex !== -1) {
            // Update existing daily data
            kpi.dailyData[dailyIndex].revenue = revenueNum;
            kpi.dailyData[dailyIndex].expenses = expensesNum;
        } else {
            // Add new daily data
            kpi.dailyData.push({ date, revenue: revenueNum, expenses: expensesNum });
        }

        // Update monthly data
        const month = new Date(date).toLocaleString('default', { month: 'long' }).toLowerCase();
        const monthIndex = kpi.monthlyData.findIndex(m => m.month === month);

        if (monthIndex !== -1) {
            // Update existing monthly data
            kpi.monthlyData[monthIndex].revenue += revenueNum;
            kpi.monthlyData[monthIndex].expenses += expensesNum;
        } else {
            // Add new monthly data
            kpi.monthlyData.push({
                month,
                revenue: revenueNum,
                expenses: expensesNum,
                operationalExpenses: 0, // Initialize as needed
                nonOperationalExpenses: 0, // Initialize as needed
            });
        }

        // Save the updated document
        await kpi.save();

        res.status(200).json(kpi);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})
export default router;