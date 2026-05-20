import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Reproduccion = sequelize.define('Reproduccion', {
  idUsuario: { 
    type: DataTypes.INTEGER, 
    allowNull: true ,
    references:{model:"usuarios", key:"id"}
  },
   idCancion: { 
    type: DataTypes.INTEGER, 
    allowNull: true ,
    references:{model:"cancioness", key:"id"}
  },
  
  fechaHora: { 
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});

export default Reproduccion;