
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import personalDetailsRoutes from "./routes/personalDetailsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/matrimony")
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

app.use("/api/personal-details", personalDetailsRoutes);

app.listen(5000, () => console.log("🚀 Server running on port 5000"));
