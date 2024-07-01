//import type { Config } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./utils/schema.tsx",
  out: "./drizzle",
  dbCredentials:{
    url:'postgresql://aigen_owner:0jJpv5XKSuFL@ep-morning-bush-a58harbi.us-east-2.aws.neon.tech/aigen?sslmode=require'
  }
};
