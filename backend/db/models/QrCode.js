import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('QrCode', {
  id: { type: DataTypes.STRING(500), primaryKey: true, allowNull: false ,  autoIncrement: true},
  id_qr_type: { type: DataTypes.INTEGER, allowNull: true },
  id_qr_tag: { type: DataTypes.INTEGER, allowNull: false },
  id_product: { type: DataTypes.INTEGER, allowNull: true },
  id_analytics: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
  id_template: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null },
  id_social_network: { type: DataTypes.INTEGER, allowNull: true, defaultValue: null  },
  border : { type: DataTypes.STRING(50), allowNull: true },
  color: { type: DataTypes.STRING(50), allowNull: true },
  smooth: { type: DataTypes.STRING(50), allowNull: true },
  url: { type: DataTypes.TEXT, allowNull: false },
  code: { type: DataTypes.TEXT, allowNull: false },
  social_network_code: { type: DataTypes.TEXT, allowNull: false },
  scan_limit: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
  image: { type: DataTypes.TEXT, allowNull: false },
  isUsed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },  
  data: { type: DataTypes.STRING(255), allowNull: true }, 
}, 
{
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'qr_codes'
});