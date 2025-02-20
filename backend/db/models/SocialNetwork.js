import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('SocialNetwork',{
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  name: { type: DataTypes.STRING(20), allowNull: false }
},
{
  timestamps: false,
  tableName: 'social_networks'
});