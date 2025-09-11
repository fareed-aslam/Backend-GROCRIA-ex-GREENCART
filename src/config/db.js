import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

// export let isConnected = false;

// export const connectDb = async () => {
//   try {
//     const connnectionInstance = await mongoose.connect(
//       `${process.env.MONGO_URI}/${DB_NAME}`
//     );

//     isConnected = true;
//     console.log(
//       `MONGODB connected || DB Host is ${connnectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.log("DB error", error);
//     process.exit(1);
//   }
// };

let isConnected = false; // track connection

export const connectDb = async () => {
  if (isConnected) {
    // agar pehle se connect hai to dobara mat connect kar
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    isConnected = true;
    console.log(
      `✅ MongoDB connected || Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    throw new Error("DB Connection Error"); // process.exit mat use karna
  }
};
