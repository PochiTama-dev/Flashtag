import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('QrAnalytic', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_qr_code: { type: DataTypes.STRING(500), allowNull: false },
  device: { type: DataTypes.TEXT, allowNull: false },
  browser: { type: DataTypes.TEXT, allowNull: false },
  operating_system: { type: DataTypes.TEXT, allowNull: false },
  location: { type: DataTypes.TEXT, allowNull: false }
}, 
{
  timestamps: true,
  createdAt: 'date',
  updatedAt: false,
  tableName: 'qr_analytics'
});