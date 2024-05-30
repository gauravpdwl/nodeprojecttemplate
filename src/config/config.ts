import { config } from "dotenv";
config();

const { port, node_env } = process.env;

export const Config = {
  port: port,
  node_env,
};
