import express from "express";
import dotenv from "dotenv";

import wordRoutes from "./routers/word.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//define routes
app.use("/api/", wordRoutes);

//api initial endpoint
app.use("/api", (req, res) => {
  res.json({
    success: true,
    heading: "Welcome to Dictionary Search and AutoSuggestion System",
    message: [
      "1. GET  /api/search?word=(word)  → Search word ",
      "2. GET  /api/prefix?prefix=(word)  → Prefix suggestions",
      "3. POST /api/add  → Add new word (pass through body)",
    ],
  });
});

//server liestening port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
