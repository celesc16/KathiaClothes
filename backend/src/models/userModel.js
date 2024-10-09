import { DataTypes } from 'sequelize'; // Tipo de dato extraído de la base de datos
import db from '../config/db.js'; // Se importa la base de datos para extraer info

// El modelo de todos los usuarios extrayendo todos sus campos
const userModel = db.define('users', {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: { // Corrección del nombre del campo
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
    },
}, {
    timestamps: true,
});

export default userModel;
