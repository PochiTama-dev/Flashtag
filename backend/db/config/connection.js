import { Sequelize } from 'sequelize';

// Leer las variables de entorno
const dbName = process.env.DB_NAME || 'flashtag_db';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbPort = process.env.DB_PORT || 3306;

// Intentar primero con la IP, si falla usar el nombre del contenedor
const dbHost = process.env.DB_HOST || '172.18.0.2';
const fallbackDbHost = 'db-container';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: 'mysql',
  port: dbPort,
  logging: false, // Desactivar logs para producción
});

// Probar la conexión y cambiar al fallback si falla
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos con:', dbHost);
  } catch (error) {
    console.error('Error con', dbHost, '- intentando con', fallbackDbHost);
    sequelize.options.host = fallbackDbHost;
    try {
      await sequelize.authenticate();
      console.log('Conectado a la base de datos con:', fallbackDbHost);
    } catch (error) {
      console.error('No se pudo conectar a la base de datos.');
      process.exit(1); // Salir si no se conecta
    }
  }
}

testConnection();

export default sequelize;
