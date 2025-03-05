import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Wifi', {
  id: { type: DataTypes.STRING(100), primaryKey: true, allowNull: false },
  id_qr_code: { type: DataTypes.STRING(500), allowNull: false },
  ssid: { type: DataTypes.TEXT, allowNull: false },
  encryption: { type: DataTypes.TEXT, allowNull: false },
  password: { type: DataTypes.TEXT, allowNull: false }
}, 
{
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'wifi'
});