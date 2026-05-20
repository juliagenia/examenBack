import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const ArtistaAlbum = sequelize.define('ArtistaCancion', {
  name: { 
    idArtistaAlbum: DataTypes.INTEGER, 
    primaryKey: true ,
    references:{model:"albunes", key:"id"}
  },
 
});

export default ArtistaAlbum;