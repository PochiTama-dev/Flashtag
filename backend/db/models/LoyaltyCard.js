import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('LoyaltyCard',{
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_qr_code: { type: DataTypes.STRING(500), allowNull: false },
  title: { type: DataTypes.STRING(50), allowNull: false },
  reward_condition: { type: DataTypes.TEXT, allowNull: false },
  reward_description: { type: DataTypes.TEXT, allowNull: false }
},
{
  timestamps: false,
  tableName: 'loyalty_cards'
});