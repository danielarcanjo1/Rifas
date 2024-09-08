import DataTypes from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define(
   "User",
   {
      name: {
         type: DataTypes.STRING,
      },
      username: {
         type: DataTypes.STRING,
         unique: true,
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
      },
      password: {
         type: DataTypes.STRING,
      },
      date_of_birth: {
         type: DataTypes.DATEONLY,
      },
      cpf: {
         type: DataTypes.STRING,
         unique: true,
      },
      phone: {
         type: DataTypes.STRING,
      },
      cep: {
         type: DataTypes.STRING,
      },
      street: {
         type: DataTypes.STRING,
      },
      number: {
         type: DataTypes.INTEGER,
      },
      district: {
         type: DataTypes.STRING,
      },
      address_complement: {
         type: DataTypes.STRING,
      },
      uf: {
         type: DataTypes.STRING,
      },
      reference_point: {
         type: DataTypes.STRING,
      },
   },
   {
      tableName: "users",
      timestamps: false,
   }
);

export default User;
