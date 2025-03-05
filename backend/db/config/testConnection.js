import connection from "./connection.js";

export default async () => {
  try {
    await connection.authenticate();
    console.log('Database connection has been established successfully!!');
  } catch (error) {
    console.log('Unable to connect to the database:', error);
  }
}