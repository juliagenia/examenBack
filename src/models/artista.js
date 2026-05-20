import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Artista = sequelize.define('Product', {
  nombreArtistico: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  biografia: { 
    type: DataTypes.TEXT,
    validate: { min: 0 } 
  }
});

export default Artista;