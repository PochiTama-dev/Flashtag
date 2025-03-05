import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Template', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_user: { type: DataTypes.INTEGER, allowNull: false },
  image: { type: DataTypes.TEXT, allowNull: false }
},
{
  timestamps: false,
  tableName: 'templates'
})