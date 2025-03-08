import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('RouletteConfig',{
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_roulette: { type: DataTypes.INTEGER, allowNull: false },
  reward: { type: DataTypes.STRING(50), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  probability: { type: DataTypes.SMALLINT(6), allowNull: false }
},
{
  timestamps: false,
  tableName: 'roulette_configs'
});