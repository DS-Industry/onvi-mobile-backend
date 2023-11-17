import * as process from 'process';

export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.APP_PORT, 10) || 5001,
  appName: process.env.APP_NAME,
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    sid: process.env.DB_SID,
    connectionString: process.env.DB_CONNECTION_STRING,
  },
});
