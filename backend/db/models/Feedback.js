import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Feedback', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_qr_code: { type: DataTypes.INTEGER, allowNull: false },
  fullname: { type: DataTypes.STRING(50), allowNull: false },
  email: { type: DataTypes.STRING(50), allowNull: true, defaultValue: null },
  comment: { type: DataTypes.TEXT, allowNull: false },
  stars: { type: DataTypes.SMALLINT(6), allowNull: false },
  avatar: { type: DataTypes.TEXT, allowNull: false }
}, 
{
  timestamps: true,
  createdAt: 'date',
  updatedAt: false,
  tableName: 'feedbacks'
});