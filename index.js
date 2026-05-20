import app from './src/app.js';
import { sequelize, testConnection } from './src/config/database.js';
import { 
    Playlist,
    Usuario,
    Plan,
    Suscripcion,
    Artista,
    Album,
    Cancion,
    PlaylistCancion,
    Reproduccion,
    ArtistaCancion,
    ArtistaAlbum,} from './src/models/index.js'; 

const startServer = async () => {
  try {
    // Paso A: Verificar la conexión
    await testConnection();

    // Paso B: Crear tablas (si no existen)
    await sequelize.sync({ force: false });
    console.log('✅ Tablas sincronizadas');

    // Paso C: Abrir el puerto
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 App corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('💥 Error fatal:', error);
  }
};

startServer();