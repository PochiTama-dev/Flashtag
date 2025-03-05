import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Roulette', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_qr_code: { type: DataTypes.STRING(500), allowNull: false },
  title: { type: DataTypes.STRING(50), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
}, 
{
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'roulettes'
});