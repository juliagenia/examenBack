import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const ArtistaAlbum = sequelize.define('ArtistaAlbum', {
  idArtistaAlbum: { 
    type: DataTypes.INTEGER,   // tipo de dato correcto
    primaryKey: true,          // clave primaria
    autoIncrement: true,       // autoincremental
    allowNull: false,          // no puede ser nulo
    references: { 
      model: "albunes",        // tabla relacionada
      key: "id"                // columna relacionada
    }
  }
});

export default ArtistaAlbum;

