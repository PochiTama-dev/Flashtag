import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('QrTag',{
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  name: { type: DataTypes.STRING(25), allowNull: false }
},
{
  timestamps: false,
  tableName: 'qr_tags'
});