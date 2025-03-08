import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('QrType',{
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  name: { type: DataTypes.STRING(30), allowNull: false }
},
{
  timestamps: false,
  tableName: 'qr_types'
});