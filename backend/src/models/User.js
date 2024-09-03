import DataTypes from "sequelize"
import sequelize from "../config/database.js" 

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  number: {
    type: DataTypes.NUMBER,
    allowNull: true, 
  },
  district: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  address_complement: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  uf: {
    type: DataTypes.STRING,
    allowNull: true, 
  },
  reference_point: {
    type: DataTypes.STRING,
    allowNull: true, 
  },

}, {
  tableName: 'users',
  timestamps: false, 
});

export default User;

