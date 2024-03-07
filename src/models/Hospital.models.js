import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const HospitalModel = database.define('Hospital', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    hospital_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

export { HospitalModel }