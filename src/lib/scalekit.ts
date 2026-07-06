import { Scalekit } from "@scalekit-sdk/node";

console.log("ENV URL:", process.env.SCALEKIT_ENVIRONMENT_URL);
console.log("CLIENT ID:", process.env.SCALEKIT_CLIENT_ID);
console.log(
  "CLIENT SECRET:",
  process.env.SCALEKIT_CLIENT_SECRET?.substring(0, 8)
);

export const scalekit = new Scalekit(
  process.env.SCALEKIT_ENVIRONMENT_URL!,
  process.env.SCALEKIT_CLIENT_ID!,
  process.env.SCALEKIT_CLIENT_SECRET!
);