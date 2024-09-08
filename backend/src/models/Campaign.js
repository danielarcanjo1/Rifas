import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const Campaign = sequelize.define('Campaign', {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subTitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  typeOfCampaign: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  dateAndHourCampaign: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isPrivate: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  numberOfNumbers: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  quotaValue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  timeToPay: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  limitValue: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  minimunQuantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  maximunQuantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  minimumCampaign: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  isAwardedQuotas: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  awardedQuotas: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  awardedQuotasDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isRanking: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  showTicketQuantity: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  rankingMessage: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  winnerName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  showProgressBar: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isDiscount: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
  tableName: 'campaigns',
});

export default Campaign;
