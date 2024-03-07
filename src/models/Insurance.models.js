import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const InsuranceModel = database.define('Insurance', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    insurance_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    type_services: {
        type: DataTypes.ENUM('emergency_room','query','treatment','surgery'),
        allowNull: false
    }
});

export { InsuranceModel }