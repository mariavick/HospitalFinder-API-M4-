import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const UserModel = database.define('User', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cpf: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },
    phone_number: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },
    insurance_id: {
        type: DataTypes.CHAR(11),
        allowNull: false
    }
});

export { UserModel }