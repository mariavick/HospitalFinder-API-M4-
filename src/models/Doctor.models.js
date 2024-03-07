import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js"

const DoctorModel = database.define('Doctor', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    doctor_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
   
    crm: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },
  
    id_specialty: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    id_hospital: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

export { DoctorModel }