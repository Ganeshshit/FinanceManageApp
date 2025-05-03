import express from "express"
import KPI from "../models/KPI.js";


const router = express.Router()

router.post('/daily-data', async (req, res) => {
    try {
        const { date, revenue, expenses, operationalExpenses = 0, nonOperationalExpenses = 0 } = req.body;
        const revenueNum = parseFloat(revenue.replace('$', '').replace(',', ''));
        const expensesNum = parseFloat(expenses.replace('$', '').replace(',', ''));
        const operationalExpensesNum = parseFloat(operationalExpenses.toString().replace('$', '').replace(',', '') || '0');
        const nonOperationalExpensesNum = parseFloat(nonOperationalExpenses.toString().replace('$', '').replace(',', '') || '0');
        const profitNum = revenueNum - expensesNum;

        const kpi = await KPI.findById("63bf8239f03239e002001612");
        if (!kpi) {
            return res.status(404).json({ message: 'KPI data not found' });
        }

        // Update daily data
        const dailyIndex = kpi.dailyData.findIndex(d => d.date === date);
        if (dailyIndex !== -1) {
            kpi.dailyData[dailyIndex].revenue = revenueNum;
            kpi.dailyData[dailyIndex].expenses = expensesNum;
            kpi.dailyData[dailyIndex].operationalExpenses = operationalExpensesNum;
            kpi.dailyData[dailyIndex].nonOperationalExpenses = nonOperationalExpensesNum;
            kpi.dailyData[dailyIndex].profit = profitNum;
        } else {
            kpi.dailyData.push({
                date,
                revenue: revenueNum,
                expenses: expensesNum,
                operationalExpenses: operationalExpensesNum,
                nonOperationalExpenses: nonOperationalExpensesNum,
                profit: profitNum
            });
        }

        // Update monthly data
        const dateObj = new Date(date);
        const month = dateObj.toLocaleString('default', { month: 'long' }).toLowerCase();
        const monthIndex = kpi.monthlyData.findIndex(m => m.month === month);
        if (monthIndex !== -1) {
            kpi.monthlyData[monthIndex].revenue += revenueNum;
            kpi.monthlyData[monthIndex].expenses += expensesNum;
            kpi.monthlyData[monthIndex].operationalExpenses += operationalExpensesNum;
            kpi.monthlyData[monthIndex].nonOperationalExpenses += nonOperationalExpensesNum;
            kpi.monthlyData[monthIndex].profit += profitNum;
        } else {
            kpi.monthlyData.push({
                month,
                revenue: revenueNum,
                expenses: expensesNum,
                operationalExpenses: operationalExpensesNum,
                nonOperationalExpenses: nonOperationalExpensesNum,
                profit: profitNum
            });
        }

        // Update yearly data
        const year = dateObj.getFullYear().toString();
        const yearIndex = kpi.yearlyData.findIndex(y => y.year === year);
        if (yearIndex !== -1) {
            kpi.yearlyData[yearIndex].revenue += revenueNum;
            kpi.yearlyData[yearIndex].expenses += expensesNum;
            kpi.yearlyData[yearIndex].operationalExpenses += operationalExpensesNum;
            kpi.yearlyData[yearIndex].nonOperationalExpenses += nonOperationalExpensesNum;
            kpi.yearlyData[yearIndex].profit += profitNum;
        } else {
            kpi.yearlyData.push({
                year,
                revenue: revenueNum,
                expenses: expensesNum,
                operationalExpenses: operationalExpensesNum,
                nonOperationalExpenses: nonOperationalExpensesNum,
                profit: profitNum
            });
        }

        await kpi.save();
        res.status(200).json(kpi);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Get yearly data
router.get('/yearly-data', async (req, res) => {
    try {
        const kpi = await KPI.findById("63bf8239f03239e002001612");
        if (!kpi) {
            return res.status(404).json({ message: 'KPI data not found' });
        }

        res.status(200).json(kpi.yearlyData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;