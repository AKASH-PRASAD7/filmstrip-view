import express from "express";
import cors from "cors";
import filmRoute from "./routes/film/index.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// for handling invalid JSON format in the request body
app.use((err, _, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON format in the request body",
    });
  }
  next(err);
});

const PORT = 8000;

app.get("/", async (_, res) => {
  res.send("server is running!");
});

// Routes
app.use("/api/film", filmRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
