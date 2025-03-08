import { DataTypes } from "sequelize";
import connection from "../config/connection.js";

export default connection.define('LinkList', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
  id_qr_code: { type: DataTypes.STRING(500), allowNull: false },
  link: { type: DataTypes.TEXT, allowNull: false }
}, 
{
  timestamps: false,
  tableName: 'link_list'
});