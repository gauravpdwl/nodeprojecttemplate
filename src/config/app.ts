import express, { NextFunction, Request, Response } from "express";
import logger from "./logger";
import { HttpError } from "http-errors";

const app = express();

app.get("/", (req, res) => {
  // const err=createHttpError(401, "You are not allowed to access the page");
  //   throw err;

  res.send("Welcome to Express Server");
});

// global error handler middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});

export default app;
