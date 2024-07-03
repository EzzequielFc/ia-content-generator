/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:wQMsUpKt56oI@ep-raspy-brook-a5wl4s2p.us-east-2.aws.neon.tech/AI-Content-Generator?sslmode=require",
  },
};
