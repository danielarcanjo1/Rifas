import  DataTypes  from "sequelize";
import sequelize from "../config/database.js ";



const Campaign = sequelize.define('Campaign', {
    title: {
        type: DataTypes.STRING,
    },
    subTitle: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    typeOfCampaign: {
        type: DataTypes.STRING,
    },
    dateAndHourCampaign: {
        type: DataTypes.DATE,
    },
    isPrivate: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    privateDetail1: {
        type: DataTypes.STRING,
    },
    privateDetail2: {
        type: DataTypes.STRING,
    },
    isFeatured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    featuredDetail1: {
        type: DataTypes.STRING,
    },
    featuredDetail2: {
        type: DataTypes.STRING,
    },
    numberOfNumbers: {
        type: DataTypes.INTEGER,
    },
    quotaValue: {
        type: DataTypes.DECIMAL(10, 2),
    },
    timeToPay: {
        type: DataTypes.INTEGER, 
    },
    limitValue: {
        type: DataTypes.DECIMAL(10, 2),
    },
    minimunQuantity: {
        type: DataTypes.INTEGER,
    },
    maximunQuantity: {
        type: DataTypes.INTEGER,
    },
    quantityToDraw: {
        type: DataTypes.INTEGER,
    },
    drawDate: {
        type: DataTypes.DATE,
    },
    minimumCampaign: {
        type: DataTypes.INTEGER,
    },
    isAwardedQuotas: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    awardedQuotas: {
        type: DataTypes.INTEGER,
    },
    awardedQuotasDescription: {
        type: DataTypes.TEXT,
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
        type: DataTypes.STRING,
    },
    winnerName: {
        type: DataTypes.STRING,
    },
    showProgressBar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isDiscount: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});


sequelize.sync()
    .then(() => {
        console.log('Tabela Campaign criada com sucesso(se não existir)');
    })
    .catch(error => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });

export default Campaign;

