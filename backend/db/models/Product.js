import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Product',{
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_user: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.TEXT, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.DECIMAL(7,2), allowNull: false }
},
{
  timestamps: false,
  tableName: 'products'
});