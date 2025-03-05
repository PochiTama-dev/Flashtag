import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Subscription', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  name: { type: DataTypes.STRING(20), allowNull: false },
  days_validity: { type: DataTypes.SMALLINT, allowNull: false },
  price: { type: DataTypes.DECIMAL(5,2), allowNull: false },
}, 
{
  timestamps: false,
  tableName: 'subscriptions'
});