import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

export default app;
