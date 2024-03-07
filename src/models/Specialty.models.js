import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const SpecialtyModel = database.define('Specialty', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    specialty_name: {
        type: DataTypes.ENUM('general_practitioner','cardiologist','orthopedist'),
        allowNull: false
    },
});

export { SpecialtyModel }