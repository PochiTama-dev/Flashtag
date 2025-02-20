import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Coupon', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_qr_code: { type: DataTypes.INTEGER, allowNull: false },
  code: { type: DataTypes.TEXT, allowNull: true, defaultValue: null },
  discount: { type: DataTypes.DECIMAL(5,2), allowNull: false },
  valid_from: { type: DataTypes.DATE, allowNull: false },
  valid_to: { type: DataTypes.DATE, allowNull: false },
  active: { type: DataTypes.TINYINT(4), defaultValue: 1, allowNull: false }
}, 
{
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  tableName: 'coupons'
});