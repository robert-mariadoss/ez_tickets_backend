module.exports.Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3331,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_USER: process.env.DB_USER || "root",
  DB_PASS: process.env.DB_PASS || "",
  DB_DATABASE: process.env.DB_DATABASE || "test",
  DB_WAIT_FOR_CONNECTIONS: process.env.DB_WAIT_FOR_CONNECTIONS || true,
  DB_CONNECTION_LIMIT: process.env.DB_CONNECTION_LIMIT || 10,
  DB_QUEUE_LIMIT: process.env.DB_QUEUE_LIMIT || 0,
  SECRET_JWT: process.env.SECRET_JWT || "",
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || "SENDGRID_API_KEY",
  SENDGRID_SENDER: process.env.SENDGRID_SENDER || "FROM_EMAIL",
};
