import db from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { name, password, address, telephone, email } = req.body;

    // Lógica para registrar al usuario
    // Ejemplo: 
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash del password
        // Aquí deberías guardar al usuario en la base de datos utilizando Sequelize
        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    // Lógica para iniciar sesión
    // Ejemplo:
    try {
        // Aquí deberías buscar al usuario en la base de datos
        const user = null; // Sustituir por la lógica real de búsqueda del usuario

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password); // Comparar el password

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar un token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};
