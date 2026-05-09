import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import authRoutes from './routes/authRoutes.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes)
connectDb()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(PORT, () => {
    console.log(`server is connected : http://localhost:${PORT}`);
  });