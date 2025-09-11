import { app } from "./app.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import { connectCloudinary } from "./utils/cdn.cloudinary.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

await connectCloudinary();
await connectDb(); // sirf cold start pe connect karega

export default app;
