import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import KPI from './models/KPI.js'
import { kpis, products, transactions } from "./data/data.js"
import prodeuct from './models/product.js'
import kpiRoutes from './routes/kpi.js'
import productRoutes from './routes/product.js'
import transactionRoutes from './routes/transaction.js'
import udateDataRoute from './routes/daily-data.routes.js'

import Transaction from './models/Transaction.js'


// Configuration

const app = express()

dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())




console.log("Hello world")
// *Routes

app.use("/kpi", kpiRoutes)
app.use("/product", productRoutes)
app.use("/transaction", transactionRoutes)
app.use("/update", udateDataRoute);

// ongoose setup 
const PORT = process.env.PORT || 1337
mongoose
    .connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => console.log(`Server run at port ${PORT} Mongourl :${process.env.MONGO_URI}`))
        // !ADD DATA TO THE DATABASE ON ONE TIME OR ANY  TIME NEEDED
        // await mongoose.connection.db.dropDatabase();
        // KPI.insertMany(kpis);
        // prodeuct.insertMany(products)
        // Transaction.insertMany(transactions)
    })
    .catch((error) => console.log(`${error} Error on finding`))

