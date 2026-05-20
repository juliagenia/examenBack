import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PlaylistCancion = sequelize.define(' PlaylistCancion', {
  idPlaylist: { 
    type: DataTypes.INTEGER, 
    allowNull: true ,
    references: {model: "playlist", key:"id"}
  },
  idCancion: { 
    type: DataTypes.INTEGER, 
    allowNull: true ,
    references: {model: "canciones", key:"id"}
  },
  orden: { 
    type: DataTypes.INTEGER,
    validate: { min: 0 } 
  }, 
});

export default  PlaylistCancion;