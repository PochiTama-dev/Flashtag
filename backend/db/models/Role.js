import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('Role',{
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  name: { type: DataTypes.STRING(15), allowNull: false }
},
{
  timestamps: false,
  tableName: 'roles'
});