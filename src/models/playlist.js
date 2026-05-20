import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Playlist = sequelize.define('Playlist', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  fechaCreacion: { 
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  idUsuario: { 
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {model: "usuarios", key: "id"}
    
  },

});

export default Playlist;