import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_role: { type: DataTypes.INTEGER, allowNull: false },
  company: { type: DataTypes.STRING(50), allowNull: false },
  cuit_cuil: { type: DataTypes.INTEGER, allowNull: false },
  fullname: { type: DataTypes.STRING(50), allowNull: false },
  dni: { type: DataTypes.STRING(12), allowNull: false },
  phone: { type: DataTypes.STRING(20), allowNull: false },
  email: { type: DataTypes.STRING(50), unique: true, allowNull: false },
  password: { type: DataTypes.TEXT, allowNull: false },
  avatar: { type: DataTypes.TEXT, allowNull: false }
}, 
{
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'users'
});