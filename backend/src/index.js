import app from './app.js'; // Importa la aplicación
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await db.authenticate();
    console.log('Conexión a la base de datos exitosa.');
    await db.sync(); // Sincronizar el modelo con la base de datos

    app.listen(PORT, () => {
      console.log(`Servidor en ejecución en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();