import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const ArtistaCancion = sequelize.define('ArtistaCancion', {
  idArtista: { 
    type: DataTypes.INTEGER, 
    primaryKey: true ,
    references:{model:"artistas", key:"id"}
  },
  idCancion: { 
    type: DataTypes.INTEGER, 
    primaryKey: true ,
    references:{model:"canciones", key:"id"}
  },
  price: { 
    type: DataTypes.DECIMAL(10, 2),
    validate: { min: 0 } 
  }
});

export default ArtistaCancion;