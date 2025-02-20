import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME || 'flashtag_db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || ''; // Contraseña vacía
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 3306;

export default new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  port: dbPort,
});