import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Cancion = sequelize.define('Cancion', {
  titulo: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  duracion: { 
    type: DataTypes.INTEGER,
    allowNull: true
  },
  genero: { 
    type: DataTypes.STRING,
    allowNull: true
  },
  idAlbum: { 
    type: DataTypes.INTEGER,
    references:{model: "albunes", key: "id"}
  },
});

export default Cancion;