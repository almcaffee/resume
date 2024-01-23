export default () => ({
  port: parseInt(process.env.PORT, 10) || 3100,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
});
