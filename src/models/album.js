import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Album = sequelize.define('Product', {
  titulo: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  fechaLanzamiento: { 
    type: DataTypes.DATEONLY,
  },
  imagenPortada: { 
    type: DataTypes.STRING,
  }
});

export default Album;