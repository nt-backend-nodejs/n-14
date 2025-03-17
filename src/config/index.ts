import { config as dotConfig } from "dotenv";

dotConfig();

export const config = {
  app: {
    port: process.env.PORT,
  },
  db: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    access: {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    },
    refresh: {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    },
  },
};
