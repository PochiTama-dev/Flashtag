import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Review', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_user: { type: DataTypes.INTEGER, allowNull: false },
  fullname: { type: DataTypes.STRING(50), allowNull: false },
  email: { type: DataTypes.STRING(50), allowNull: false },
  comment: { type: DataTypes.TEXT, allowNull: false },
  stars: { type: DataTypes.SMALLINT(6), allowNull: false },
  avatar: { type: DataTypes.TEXT, allowNull: false }
}, 
{
  timestamps: true,
  createdAt: 'date',
  updatedAt: false,
  tableName: 'reviews'
});