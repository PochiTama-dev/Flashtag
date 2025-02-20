import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('UserSubscription', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_user: { type: DataTypes.INTEGER, allowNull: false },
  id_subscription: { type: DataTypes.INTEGER, allowNull: false },
  valid_from: { type: DataTypes.DATE, allowNull: false },
  valid_to: { type: DataTypes.DATE, allowNull: false },
}, 
{
  timestamps: false,
  tableName: 'users_subscriptions'
});