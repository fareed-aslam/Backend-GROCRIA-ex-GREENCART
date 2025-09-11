import cors from "cors";

export const configureCors = () => {
  return cors({
    //origin ke liye
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:5173",
        "https://frontend-grocria.vercel.app",
      ];

      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by the cors"));
      }
    },

    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept-version"],
    exposedHeaders: ["X-Total-Count", "Content-Range"],
    credentials: true,
    preflightContinue: false,
    maxAge: 600,
    optionsSuccessStatus: 204,
  });
};
