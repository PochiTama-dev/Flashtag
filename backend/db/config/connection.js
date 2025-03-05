import { Sequelize } from 'sequelize';

export default new Sequelize('flashtag_db', 'root', '1234', { host: 'localhost', dialect: 'mysql', port: 3306 });