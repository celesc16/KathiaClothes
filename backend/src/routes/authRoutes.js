// controllers/authController.js
import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

// Controlador para el registro de usuarios
export const register = async (req, res) => {
  try {
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Crear el usuario en la base de datos
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      telephone: req.body.telephone
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', user });
  } catch (error) {
    res.status(400).json({ error: 'Error al registrar el usuario' });
  }
};

// Controlador para el inicio de sesión de usuarios
export const login = async (req, res) => {
  try {
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    res.json({ message: 'Inicio de sesión exitoso', user });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
